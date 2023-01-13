var num = 0;
var cookie = document.getElementById("cookie");
function cookieClick() { 
    num += 1;

    var numbers = document.getElementById("numbers");
    numbers.innerHTML = num;      
}

document.addEventListener("click", (e) => {
var cookieFall = document.createElement("span");
cookieFall.classList.add("cookieFall");

cookieFall.style.left = e.offsetX + "px";
cookieFall.style.top = e.offsetY + "px";

var size = Math.random() * (100 -20 +1) +20;

cookieFall.style.width = size + "px";
cookieFall.style.height = size + "px";
document.body.appendChild(cookieFall);
setTimeout(() => {
cookieFall.remove();
}, 1000);
});