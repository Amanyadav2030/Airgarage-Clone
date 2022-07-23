import {footer} from './afooter.js';

document.querySelector('#footer').innerHTML=footer();

let data = JSON.parse(localStorage.getItem("payment"));
document.querySelector("img").src = data.img;
document.querySelector("#price").innerText = data.price;
document.querySelector("img + h2 + h3").innerText = data.address;
let time = document.querySelector('#type');
let charge = "monthly";
let count=0;
time.addEventListener('click',function(){
    count++;
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
    // let bar = document.createElement('div');
    let indore = document.createElement("div");
    indore.innerText="Indore";
    indore.className="place";
    indore.onclick=()=>{
        document.querySelector("#change").innerText="Indore";
        box.innerHTML=null;
    }
    let Mumbai = document.createElement("div");
    Mumbai.innerText="Mumbai";
    Mumbai.className="place";
    let Delhi = document.createElement("div");
    Delhi.className="place";
    Delhi.innerText="Delhi";
    let bangalore = document.createElement("div");
    bangalore.className="place";
    bangalore.innerText="Bangalore";
    let Pune = document.createElement("div");
    Pune.innerText="Pune";
    Pune.className="place";
    let Hydrabad = document.createElement("div");
    Hydrabad.className="place";
    Hydrabad.innerText="Hydrabad";
    // bar.append()
    box.append(indore,Mumbai,Delhi,bangalore,Pune,Hydrabad);
    return box;
}
document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    alert("We are booked your parking please check email");
        window.location.href="index.html";
})