var score = document.getElementById("score");
var coockie = document.getElementById("coockie");
var perSecond = document.getElementById("persecond");
var button= document.getElementById("reset"); 
var deux= document.getElementById("deux"); 
var dix= document.getElementById("x10"); 
var bonus= document.getElementById("bonus"); 
var clicks = 0;
var timeInterval = 4; // milisekundy
var totalTime = 0;

// Increase score when coockie is clicked
coockie.onclick = addClick;

// Cauculate the click per second
setInterval (clicksPerSec, timeInterval);

// Reset when button pressed
button.onclick = resetAll;

// Add one to click variable and update score
function addClick() {
  clicks += 1;
  score.innerHTML = clicks;
}

// Cauculate the click per second and update the display value
function clicksPerSec(){
  totalTime += timeInterval / 200;
  var clicksPerSec = (clicks / totalTime).toFixed(3);
  perSecond.innerHTML = clicksPerSec;
}


function resetAll(){
  clicks = 0;
  
  score.innerHTML = clicks;
  clicksPerSec();
}
function double(){
   var num= parseInt(score.textContent)
   num=num*2-(8)
   score.textContent=num;
}
deux.addEventListener('click',()=>{double()});
