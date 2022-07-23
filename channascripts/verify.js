var user = localStorage.getItem("user");
var key = localStorage.getItem("key");
let h1 = document.getElementById("h1");
h1.innerText = `Enter the verification code we emailed to ${user}`;



function sub(){
    var pin = document.getElementById("pin").value;
    if(pin == key ){
        alert("Log in Successfull");
        window.location.href="../index.html";
    }else{
        alert("please check the pin ");
    }
    console.log(key);
    console.log(pin);
}