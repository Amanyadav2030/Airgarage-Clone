let date = new Date();
 let container = document.querySelector("#container");
 let container1 = document.querySelector("#days");
console.log(date);
let Time = date.getHours();
let result;
if(Time>12){
    Time = Time - 12;
   result = Time + ":"+date.getMinutes()+"pm";
}else{
   result = Time + ":"+date.getMinutes()+"am";
}
let start = date.getDate();
for(let i=start;i<=31;i++){
    if(i==24 || i==31)continue;
    if(i==start){
        document.getElementById(`a${i}`).setAttribute("class","dote Circle");
        continue;
    } 
     document.getElementById(`a${i}`).setAttribute("class","Circle");
}
let earth=document.createElement('div');
let I= document.createElement('i');
I.setAttribute("class","fa-solid fa-earth-americas")
earth.append(I,`Indian Standard Time (${result})`);
container1.append(earth);
document.querySelectorAll(".Circle").forEach((el)=>{
    el.addEventListener('click',(e)=>{
        // selectTime(e.target.innerText)
        if(e.target.innerText==21  || e.target.innerText==28){
            selectTime(e.target.innerText,"Thursday");
        }else if(e.target.innerText==23  || e.target.innerText==30){
            selectTime(e.target.innerText,"Saturday");
        }else if(e.target.innerText==22  || e.target.innerText==29){
            selectTime(e.target.innerText,"Friday");
            
        }else if(e.target.innerText==25){
            selectTime(e.target.innerText,"Monday");
        }else if(e.target.innerText==26){
            selectTime(e.target.innerText,"Tuesday");
        }else if(e.target.innerText==27){
            selectTime(e.target.innerText,"Wednesday");
        }
    })
})
function selectTime(Date,Day){
   
    container.innerHTML=null;
    let datediv = document.createElement("div");
    datediv.id="datediv";
    let  day = document.createElement('h4');
    day.innerText=Day;
    day.id="day";
    let proper = document.createElement('p');
    proper.innerText = `July ${Date}, 2022`;
    proper.id="date";
    let Earth = document.createElement('div');
    // <i class="fa-solid fa-earth-americas"></i>
    let i = document.createElement('i');
     i.setAttribute("class","fa-solid fa-earth-americas")
    let i2= document.createElement('i');
    i2.id="left";
    i2.setAttribute("class","fa-solid fa-arrow-left");
    Earth.append(i,`Indian Standard Time (${result})`);
    datediv.append(day,proper,Earth,i2);
    let selecttime = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerText = "Select a Time";
    let p = document.createElement('p');
    p.innerText = "Duration: 20 min";
    p.class="p"
    let time = document.createElement('div');
    let t12_30 = document.createElement('div');
    t12_30.id="t12_30";
    t12_30.innerText = "12:30am";
    let t1_30=document.createElement('div');
    t1_30.id="t1_30";
    t1_30.innerText = "1:30am";
    let t2_00 = document.createElement('div');
    t2_00.id="t2_00";
    t2_00.innerText = "2:00am";
    let t2_30=document.createElement('div');    
    t2_30.id="t2_30";
    t2_30.innerText = "2:30am";
    let t3_00 = document.createElement('div');
    t3_00.id="t3_00";
    t3_00.innerText = "3:00am";
    let t3_30 = document.createElement('div');
    t3_30.id="t3_30";
    t3_30.innerText = "3:30am";
    let t4_00 = document.createElement('div');
    t4_00.id="t4_00";
    t4_00.innerText = "4:00am";
    let t4_30 = document.createElement('div');
    t4_30.id="t4_30";
    t4_30.innerText = "4:30am";
    let t5_00 = document.createElement('div');
    t5_00.id="t5_00";
    t5_00.innerText = "5:00am";
    let t5_30 = document.createElement('div');
    t5_30.id="t5_30";
    t5_30.innerText = "5:30pm";
    let t6_00 = document.createElement('div');
    t6_00.id="t6_00";
    t6_00.innerText = "6:00pm";
    let t6_30 = document.createElement('div');
    t6_30.id="t6_30";   
    t6_30.innerText = "6:30pm";
    let t7_00 = document.createElement('div');
    t7_00.id="t7_00";
    t7_00.innerText = "7:00pm";
    let t8_00 = document.createElement('div');
    t8_00.id="t8_00";
    t8_00.innerText = "8:00pm";
    let t9_00 = document.createElement('div');
    t9_00.id="t9_00";
    t9_00.innerText = "9:00pm";
    let t10_00 = document.createElement('div');
    t10_00.id="t10_00";
    t10_00.innerText = "10:00pm";
    let t11_00 = document.createElement('div');
    t11_00.id="t11_00"; 
    t11_00.innerText = "11:00pm";


     container.style.overflow ="auto";
    time.id="time";
    time.append(t12_30,t1_30,t2_00,t2_30,t3_00,t3_30,t4_00,t4_30,t5_00,t5_30,t6_00,t6_30,t7_00,t8_00,t9_00,t10_00,t11_00)
    container.append(datediv,h2,p,time);   
    document.querySelector('#left').addEventListener('click', function() {
        document.location.reload()
    })
}
