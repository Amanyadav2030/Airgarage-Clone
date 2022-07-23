import {footer} from '../afooter.js';

document.querySelector('#footer').innerHTML=footer();
let time = document.querySelector('#type');
let charge = "monthly";
let count=0;
time.addEventListener('click',function(){
    count++;
    // console.log(count);
    if(count==1){
        myfunction();
    }else{
        invisible();
    }
});
function invisible(){
    let div = myfunction();
    div.innerHTML = '';
    count=count-2;
}

function myfunction(){
    let box = document.querySelector('#item');
    box.innerHTML=null;
    let bar = document.createElement('div');
    bar.id="bar";
    let monthly = document.createElement('div');  
    monthly.innerText="Monthly";
    monthly.id="monthly"; 
    monthly.onclick=()=>{
       let  change = document.querySelector('#type div');
        change.innerText="Monthly";
        change.id="monthly";
        charge="monthly";
    }
    
    let hourly = document.createElement('div');
    hourly.id="hourly";
    hourly.onclick=()=>{
       let  change = document.querySelector('#type div');
        change.innerText="Hourly";
        change.id="hourly"
        charge="hourly";
    }
    hourly.innerText = "Hourly"; 
    let airport= document.createElement('div');
    airport.innerText = "Airport";
    airport.id="airport";
    airport.onclick=()=>{
       let  change = document.querySelector('#type div');
        change.innerText="Airport";
        change.id="airport";
        charge="daily";
    }
    bar.append(hourly,monthly,airport);
    box.append(bar);
    return box;
}
//Debouncing start from here
let address = document.querySelector("#address");
let lat;
let lon;
address.addEventListener("input",function(){
    debounce(main,800);
})
let container = document.querySelector("#locations");
async function main() {
    let search = document.querySelector("#address").value;
    let data = await getData(search);
    if(data.length>1){
        data.sort((a,b)=>a.display_name.length-b.display_name.length);
        // console.log(data);
        append(data);
    }
  }
async function main2(query) {
  let search=query;
    let data = await getData(search);
    if(data.length>1){
        data.sort((a,b)=>a.display_name.length-b.display_name.length);
        // console.log(data);
        append2(data);
    }
  }
  async function getData(search) {
    if(search!=""){
        const url = `https://api.locationiq.com/v1/autocomplete?key=pk.b1c67b661f02319173b2075c61d403d3&q=${search}`;
        let res = await fetch(url);
        let data = await res.json();
        return data;
    }
    container.style.top="293px";
    container.innerHTML=null;
    return "";
  
  }

  let append = (data) => {
    container.innerHTML=null;
    container.style.top="302px"
    // container.innerHTML = null;
    for (let el = 0; el < 5; el++) {
      let div = document.createElement("div");
      div.onclick=()=>{
        address.value=data[el].display_name;
        lat = data[el].lat;
        lon=data[el].lon;
      }
      div.append(data[el].display_name);
      container.append(div);
    }
    let arr=[];
    let dollar = 3;
    for(let el = 3;el<10;el++){
      
        if(el%2==0){
            dollar = dollar + 1;
        };
            if(el==5||el==8){
                let obj = {
                    price:dollar,
                    address1:data[el].display_place,
                    address2:data[el].display_name,
                    img:'https://storage.googleapis.com/airgarage/1_1610151842.png',
                };
                arr.push(obj)
                continue;
                
            }
            if(el==4 || el==7){
                let obj = {
                    price:dollar,
                    address1:data[el].display_place,
                    address2:data[el].display_name,
                    img:'https://storage.googleapis.com/airgarage/1_1636219936_6706_.png',
      
                };
                arr.push(obj)
                continue;
            }
            let obj ={
                price:+dollar,
                address1:data[el].display_place,
                address2:data[el].display_name,
                img:'https://parking.airgarage.com/static/media/share.ab0a9184.png',
            };
            arr.push(obj);
    };
    console.log(arr);
    localStorage.setItem("parking",JSON.stringify(arr));
  };
  let append2 = (data) => {
    let arr=[];
    let dollar = 3;
    for(let el = 3;el<10;el++){
      
        if(el%2==0){
            dollar = dollar + 1;
        };
            if(el==5||el==8){
                let obj = {
                    price:dollar,
                    address1:data[el].display_place,
                    address2:data[el].display_name,
                    img:'https://storage.googleapis.com/airgarage/1_1610151842.png',
                };
                arr.push(obj)
                continue;
                
            }
            if(el==4 || el==7){
                let obj = {
                    price:dollar,
                    address1:data[el].display_place,
                    address2:data[el].display_name,
                    img:'https://storage.googleapis.com/airgarage/1_1636219936_6706_.png',
      
                };
                arr.push(obj)
                continue;
            }
            let obj ={
                price:+dollar,
                address1:data[el].display_place,
                address2:data[el].display_name,
                img:'https://parking.airgarage.com/static/media/share.ab0a9184.png',
            };
            arr.push(obj);
    };
    console.log(arr);
    localStorage.setItem("parking",JSON.stringify(arr));
  };

  let id;
  function debounce(func, delay) {
    clearTimeout(id);
    id = setTimeout(() => {
      func();
    }, delay);
  }
  //Redirect page
  document.querySelector('#button').onclick=()=>{
    if(address.value){
        console.log(lat,lon,charge);
        window.location.href = `../searched.html?lon=${lon}&lat=${lat}&rentalType=${charge}`
    }
}

let container2 = document.querySelectorAll("#container> div");
container2.forEach((el)=>{
    el.onclick=()=>{
      
      console.log(el.id);
      if(el.id=="Losangeles"){
        main2('Los Angeles')
      }else if(el.id=="Annarbor"){
        main2('Ann Arbor');
      }else{
        main2(el.id);
      }
      setTimeout(function(){
        window.location.href = `../searched.html?city=${el.id}`;

      },1000);
    }
})
