import { navbar,footer } from "./components/navbar.js";



document.getElementById("navbar").innerHTML=navbar()

document.getElementById("kfooter").innerHTML=footer()


/////////////////////////

let count=0;


let myData =()=>{

     let container= document.querySelector(".kaka")
    let arrow=document.getElementById("arrow")
    if(count%2 ===0)
    {
       
        console.log("hello")
       let div= document.createElement("div")
        div.innerText=`AirGarage helps parking lot and garage owners manage, sell, and enforce parking.`

        let btn= document.createElement("button")
        btn.setAttribute("id","BTN")
        btn.innerText="GET A DEMO"
         container.append(div,btn)
        count++
    }
    else {
       container.innerHTML=null
        count++
    }
}
document.querySelector("#myid").addEventListener("click",myData)

////////////////////////////

let count1=0;

let myData1 =()=>{

     let container1= document.querySelector(".kaka1")
    let arrow=document.getElementById("arrow")
    if(count1%2 ===0)
    {
       
        console.log("hello")
       let div= document.createElement("div")
        div.innerText=`AirGarage uses license plate scanning cameras to detect violators.
        ‍
        We automatically detect if people have registered as a visitor or paid to park, and then we deploy someone from our nationwide network of enforcers to immobilize vehicles that did not pay to park or register.`
         container1.append(div)
        count1++
    }
    else {
       container1.innerHTML=null
        count1++
    }
}
document.querySelector("#myid1").addEventListener("click",myData1)

////////////////////////////////////////

let count2=0;


let mydata2 =()=>{

     let container2= document.querySelector(".kaka2")
    let arrow=document.getElementById("arrow")
    if(count2%2 ===0)
    {
       
        console.log("hello")
       let div= document.createElement("div")
        div.innerText=`Visitors simply tap their license plate on an iPad device or text in a validation code to register for free parking. You can set the validation period to anything from 30 minutes to several days.`
         container2.append(div)
        count2++
    }
    else {
       container2.innerHTML=null
        count2++
    }
}
document.querySelector("#myid2").addEventListener("click",mydata2)

///////////////////////

let count3=0;


let mydata3 =()=>{

     let container2= document.querySelector(".kaka3")
    let arrow=document.getElementById("arrow")
    if(count3%2 ===0)
    {
       
        console.log("hello")
       let div= document.createElement("div")
        div.innerText=`AirGarage makes money through a revenue share, meaning we only make money when you do. We do a 70/30 split in your favor.`
         container2.append(div)
        count3++
    }
    else {
       container2.innerHTML=null
        count3++
    }
}
document.querySelector("#myid3").addEventListener("click",mydata3)

///////////////////////

let count4=0;


let mydata4 =()=>{

     let container2= document.querySelector(".kaka4")
    let arrow=document.getElementById("arrow")
    if(count4%2 ===0)
    {
       
        console.log("hello")
       let div= document.createElement("div")
        div.innerText=`AirGarage operates in the United States and Canada. We are present in over 30 U.S. states, and are rapidly expanding to more.`
         container2.append(div)
        count4++
    }
    else {
       container2.innerHTML=null
        count4++
    }
}
document.querySelector("#myid4").addEventListener("click",mydata4)

///////////////////////

let count5=0;


let mydata5 =()=>{

     let container2= document.querySelector(".kaka5")
    let arrow=document.getElementById("arrow")
    if(count5%2 ===0)
    {
       
        console.log("hello")
       let div= document.createElement("div")
        div.innerText=`AirGarage offers free install and setup, and is the most technologically advanced parking operator. Our revenue share model aligns all of our incentives to increase your revenue through online listing distribution and advertising.

        Learn how we can work with you today`

        let btn= document.createElement("button")
        btn.setAttribute("id","BTN2")
        btn.innerText="Get a demo"
        
         container2.append(div,btn)
        count5++
    }
    else {
       container2.innerHTML=null
        count5++
    }
}
document.querySelector("#myid5").addEventListener("click",mydata5)


///////////////////////

let count6=0;


// let mydata6 =()=>{

//      let container2= document.querySelector(".kaka6")
//     let arrow=document.getElementById("arrow")
//     if(count6%2 ===0)
//     {
       
//         console.log("hello")
//        let div= document.createElement("div")
//         div.innerText=`During your first week, your managers will fly out to you and you'll spend the first days meeting the entire team and learning about AirGarage`
//          container2.append(div)
//         count6++
//     }
//     else {
//        container2.innerHTML=null
//         count6++
//     }
// }
// document.querySelector("#myid6").addEventListener("click",mydata6)