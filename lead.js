let date = new Date();
let start = date.getDate();
for(let i=start;i<=31;i++){
    days = document.getElementById(`a${i}`);
    days.class = "circle";
}
