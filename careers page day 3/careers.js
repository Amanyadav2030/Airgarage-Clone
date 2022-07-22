import navbar from "../components/navbar.js";



document.getElementById("navbar").innerHTML=navbar()

let count=0;


let myData =()=>{

     let container= document.querySelector(".kaka")
    let arrow=document.getElementById("arrow")
    if(count%2 ===0)
    {
       
        console.log("hello")
       let div= document.createElement("div")
        div.innerText=`We'll start by reviewing your resume. We love unique backgrounds so don't count yourself out if your experience doesn't perfectly match the job description - use the application to highlight why you're the right person for the job!

        Include anything that you think showcases your skills - LinkedIn, GitHub, portfolio, websites, etc.`
         container.append(div)
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
        div.innerText=`We'll work with you to schedule a meeting - over coffee if you're in SF or a phone call if you're remote.

        This is your chance to tell us what you're passionate about, your accomplishments, and what kind of challenges you're looking for.
        
        Depending on the role, there may be more than one chat scheduled.
        
        Tip: feel free to dress casually for the interview - we do in the office!`
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
        div.innerText=`We've designed role-specific, realistic challenges to better understand how you work, and for you to sample what the job looks like.

        Depending on the position you're applying for these can be sales related, drafting emails, writing code, design samples, etc.`
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
        div.innerText=`Sit down (or Zoom meet) with several members of the team you'd be working with for a 30-60 minute collaborative discussion.

        Often, these meetings will start off with a 10 minute presentation about an assigned topic relevant to your job, the rest of the time is a two way conversation about how you work and what your goals are. Bring lots of questions - you're interviewing us as well!`
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
        div.innerText=`We like to hear from people who've worked with you in your current role, or past positions - ideally a previous supervisor.

        Once we're confident that we have a fit, we move fast to send out an official offer letter!`
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
        div.innerText=`We like to hear from people who've worked with you in your current role, or past positions - ideally a previous supervisor.

        Once we're confident that we have a fit, we move fast to send out an official offer letter!`
         container2.append(div)
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


let mydata6 =()=>{

     let container2= document.querySelector(".kaka6")
    let arrow=document.getElementById("arrow")
    if(count6%2 ===0)
    {
       
        console.log("hello")
       let div= document.createElement("div")
        div.innerText=`During your first week, your managers will fly out to you and you'll spend the first days meeting the entire team and learning about AirGarage`
         container2.append(div)
        count6++
    }
    else {
       container2.innerHTML=null
        count6++
    }
}
document.querySelector("#myid6").addEventListener("click",mydata6)