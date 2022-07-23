import {footer} from './afooter.js';

document.querySelector('#footer').innerHTML=footer();

let data = JSON.parse(localStorage.getItem("payment"));
document.querySelector("img").src = data.img;
document.querySelector("#price").innerText = data.price;
document.querySelector("img + h2 + h3").innerText = data.address;

