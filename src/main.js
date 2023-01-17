import {cookieClick, randomRange, getFraction, autoClick,getScore, substractScore, addScrore, buy_bonus } from './lib';

// ===== HTML =====
const cookie = document.getElementById('cookie');
const counter = document.getElementById('counter');
const multiplicator = document.getElementById('multiplicator');
const bonusDouble = document.getElementById('bonus-double');
const bonusTriple = document.getElementById('bonus-triple');
const bonusAutoclick = document.getElementById('bonus-autoclick');
const bonusDoubleImg = document.getElementById('bonus-double-img');
const bonusTripleImg = document.getElementById('bonus-triple-img');
const bonusAutoImg = document.getElementById('bonus-auto-img');
const bonusBoost = document.getElementById('bonus-boost');
const bonusBoostImg = document.getElementById('bonus-boost-img');
const spentMoney= document.getElementById('spent');
const buttonRest = document.getElementById('rest');
let boost = 1;
const zero = document.getElementById('zero');
const titre = document.getElementById('titre');

 // ===== Functions =====
 
let bnt_states = [false,false,false,false,false,false]

const bonus_map = {
    autoclicker: {price:10,duration:15,frequency:5,price_multiplier:1.5},
}

function readMultiplicator(){
    return Number(multiplicator.value);       // Lire la valeur dans l'input multiplicateur
   }
  
  function buy(price, bonus, image,message,spent){
      counter.stepDown(price);
      spentMoney.stepUp(price);                // Retirer 10 au score
      bonus.disabled=false;                    // Désactiver le boutton
      titre.textContent=message;
      image.style.filter='hue-rotate(90deg)';      // Image grisée
  }
  
  function buy1(price, bonus, image,message,spent){
      counter.stepDown(price);
      spentMoney.stepUp(price);                // Retirer 10 au score
      bonus.disabled=false;                    // Désactiver le boutton
      titre.textContent=message;
      image.style.filter='contrast(200%)';      // Image grisée
  }
  
  function buy2(price, bonus, image,message,spent){
      counter.stepDown(price);
      spentMoney.stepUp(price);                // Retirer 10 au score
      bonus.disabled=false;                    // Désactiver le boutton
      titre.textContent=message;
      image.style.filter='opacity(25%)';      // Image grisée
  }
  
  function buy3(price, bonus, image,message,spent){
      counter.stepDown(price);
      spentMoney.stepUp(price);                // Retirer 10 au score
      bonus.disabled=true;                    // Désactiver le boutton
      titre.textContent=message;
      image.style.filter='grayscale(1)';      // Image grisée
  }



/*

--------------------------------------------------------------------------------
                                Listeners
--------------------------------------------------------------------------------
*/

const score_container = document.querySelector("#numbers")
const score_container2 = document.getElementById("numbers")


document.querySelector('#btn1').addEventListener('click', ()=>{
    
    if(bnt_states[0] || !buy_bonus('autoclicker',bonus_map)) return

    bnt_states[0] = true
    
    autoClick(bonus_map['autoclicker']['duration'],bonus_map['autoclicker']['frequency'])
    .then(()=>{
        bnt_states[0] = false
    })
    
    
})

document.getElementById("cookie").addEventListener('click',()=>{
    cookieClick()
})

document.getElementById("cookie").addEventListener("click", (e) => {
    var cookieFall = document.createElement("span");
    cookieFall.classList.add("cookieFall");

    //Adding a bite mor randomness 
    let w = window.innerWidth 
    let h = window.innerHeight 

    let offsetX = getFraction(w)
    let offsetY = getFraction(h,5)
    
    // cookieFall.style.left = e.offsetX + "px";
    // cookieFall.style.top = e.offsetY + "px";
    let size = Math.random() * (100 -20 +1) +20;

    cookieFall.style.left = randomRange(offsetX,w-offsetX-size) + "px";
    cookieFall.style.top = randomRange(offsetY,Math.ceil(h/4)) + "px";

    
    
    cookieFall.style.width = size + "px";
    cookieFall.style.height = size + "px";
    document.body.appendChild(cookieFall);
    setTimeout(() => {
    cookieFall.remove();
    }, 2000);
});



cookie.addEventListener('click', () => {
    counter.stepUp(readMultiplicator() * boost);    // Incrémenter le score de la valeur du multiplicateur
});

bonusDouble.addEventListener('click', () => {
    if(counter.value>=10){                  // Si le score est supérieur à 10
        buy(10, bonusDouble, bonusDoubleImg,'Well done you doubled your score',10);
        multiplicator.stepUp(1);            // Augmenter le multiplicateur
    }
});
    

bonusTriple.addEventListener('click', () => {
    if(counter.value>=30){
        buy1(30, bonusTriple, bonusTripleImg,'great you have now tripled the score',30);
        multiplicator.stepUp(3)
    }
});



bonusBoost.addEventListener('click',()=>{
        if(counter.value>=140){
            buy2(140,bonusBoost,bonusBoostImg,'beautiful you have 30 seconds click a maximum to increase your cookies',140);
            boost=2;
            setTimeout(()=>boost=1, 30000);


        }
        
});
bonusAutoclick.addEventListener('click', () => {
    if(counter.value>=670){
        buy3(670, bonusAutoclick, bonusAutoImg,'you are a champion you can rest I continue',670);
        setInterval(() => cookie.click(), 1000); // Click toute les 1 secondes
    }  
});

buttonRest.addEventListener('click',()=>{
    counter.value=0;
    spentMoney.value=0;
    multiplicator.value=1;

    
})