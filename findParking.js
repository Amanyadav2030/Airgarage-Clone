import {footer} from './afooter.js';

document.querySelector('#footer').innerHTML=footer();
let type = document.querySelector('#type');
let count=0;
type.addEventListener('click',function(){
    count++;
    console.log(count);
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
         change = document.querySelector('#type div');
        change.innerText="Monthly";
        change.id="monthly"
    }
    
    let hourly = document.createElement('div');
    hourly.id="hourly";
    hourly.onclick=()=>{
         change = document.querySelector('#type div');
        change.innerText="Hourly";
        change.id="hourly"
    }
    hourly.innerText = "Hourly"; 
    let airport= document.createElement('div');
    airport.innerText = "Airport";
    airport.id="airport";
    airport.onclick=()=>{
         change = document.querySelector('#type div');
        change.innerText="Airport";
        change.id="airport"
    }
    bar.append(hourly,monthly,airport);
    box.append(bar);
    return box;
}
