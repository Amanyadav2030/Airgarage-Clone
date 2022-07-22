function verify(){
    let user = document.getElementById("in1").value;
    var minm = 10000;
    var maxm = 99999;
    let a  = Math.floor(Math
    .random() * (maxm - minm + 1)) + minm;
    // console.log(a);
    if(user.length>0){
    alert(a);  
    localStorage.setItem('user',user);
    localStorage.setItem('key', a);
    window.location.href="verify.html"
    }else{
        alert("Please enter valid details");
    }
}


// function checkemail(str){
//     let count = 0 ;
//     for(let i=0 ; i<str.length ; i++){
//         if(str[i]=="@"){
//             count++;
//         }
//     }
//     if(count == 1){
//         return true;
//     }else{
//         return false;
//     }
// }