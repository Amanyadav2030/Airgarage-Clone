import {footer} from './afooter.js';

document.querySelector('#footer').innerHTML=footer();
let Url = new URL(window.location);
let params = new URLSearchParams(Url.search);
let time = params.get("rentalType");
let lon = params.get("lon")
let lat = params.get("lat");
let city2 =params.get("city");
if(city2!=null||city2!=undefined){
    document.querySelector("#city").innerText=city2;
    displayMap(city2);
}
let city;
let check = window.location.href;

console.log(check!==`http://127.0.0.1:5500/searched.html?city=${city2}`)
if(check!==`http://127.0.0.1:5500/searched.html?city=${city2}`){
    let url = ` https://us1.locationiq.com/v1/reverse?key=pk.b1c67b661f02319173b2075c61d403d3&lat=${lat}&lon=${lon}&format=json`
    fetch(url).then((res)=>{
        return res.json();
    }).then((res)=>{
        console.log(res);
        if(res.address.state_district!=undefined){
            let str = res.address.state_district;
            str = str.split(" ");
            city = str[0];
            console.log(city);
            displayMap(city);
            document.querySelector("#city").innerText=city;
        }else{
            let str = res.address.city_district;
            str = str.split(" ");
            city = str[0];
            console.log(city);
            displayMap(city)
            document.querySelector("#city").innerText=city;
        };
    })
}
function displayMap(city){
        
    var url = `https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    document.querySelector("iframe").src=url;
}
//Append function
let places = document.querySelector("#places");
function append(data){
    console.log(data);
    data.forEach((el)=>{
        let place = document.createElement("div");
        place.className="place";
        let img = document.createElement("img");
        img.src =el.img;
        let box = document.createElement("div");
        box.id="box";
        let good = document.createElement("div");
        good.id="good";
        let p1 = document.createElement("p");
        p1.innerText="GOOD PRICE";
        let p2 = document.createElement("p");
        let i = document.createElement("i");
        i.setAttribute("class","fa-solid fa-star")
        p2.append(i,"4.5");
        good.append(p1,p2);
        let h2  = document.createElement('h2');
        h2.id = "address1";
        h2.innerText=el.address1;
        let h3  = document.createElement('h3');
        h3.id = "address2";
        h3.innerText=el.address2;
        box.append(good,h2,h3);    
        let price=  document.createElement("div");
        price.id="price"
        let h2_2  = document.createElement('h2');
        let paymentPrice;
        if(time=="monthly"){
            if(+el.price%2==0){
                h2_2.innerText=`$100`;
                paymentPrice=`$100 per month`;
            }else{
                h2_2.innerText=`$300`;
                paymentPrice=`$300 per month`;
            }
        }else{
            h2_2.innerText=`$${el.price}`;
            paymentPrice=`$${el.price} per hour`;
        }
        
        h2_2.id="dollar";
        let rentalType=  document.createElement("div");
        rentalType.id="rentalType";
        rentalType.innerText=time;
        price.append(h2_2,rentalType);
        place.onclick=function(){
           let obj={
                img:el.img,
                price:paymentPrice,
                address:el.address1,
            }
            localStorage.setItem("payment",JSON.stringify(obj));
            window.location.href="payment.html";
        }
        place.append(img,box,price);
        places.append(place);
        document.querySelector("#parking").append(places);
    })

}
let data=JSON.parse(localStorage.getItem("parking"));
append(data);

