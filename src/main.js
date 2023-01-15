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
let boost=1;
const titre=document.getElementById('titre');

 // ===== Functions =====
 function readMultiplicator(){
  return Number(multiplicator.value);       // Lire la valeur dans l'input multiplicateur
 }

function buy(price, bonus, image,message){
    counter.stepDown(price);                // Retirer 10 au score
    bonus.disabled=true;                    // Désactiver le boutton
    titre.textContent=message;
    image.style.filter='grayscale(1)';      // Image grisée
}

// ===== Event Listeners =====
cookie.addEventListener('click', () => {
    counter.stepUp(readMultiplicator() * boost);    // Incrémenter le score de la valeur du multiplicateur
});

bonusDouble.addEventListener('click', () => {
    if(counter.value>=10){                  // Si le score est supérieur à 10
        buy(10, bonusDouble, bonusDoubleImg,'bonus double');
        multiplicator.stepUp(1);            // Augmenter le multiplicateur
    }
});

bonusTriple.addEventListener('click', () => {
    if(counter.value>=30){
        buy(30, bonusTriple, bonusTripleImg,'bonus triple');
        multiplicator.stepUp(3)
    }
});

bonusAutoclick.addEventListener('click', () => {
    if(counter.value>=50){
        buy(50, bonusAutoclick, bonusAutoImg,'super boost');
        setInterval(() => cookie.click(), 1000); // Click toute les 1 secondes
    }  
});

bonusBoost.addEventListener('click',()=>{
        if(counter.value>=25){
            buy(25,bonusBoost,bonusBoostImg,'boost 2');
            boost=2;
            setTimeout(()=>boost=1, 30000);


        }
});