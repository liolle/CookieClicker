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
let boost=1;
const click=0;
const titre=document.getElementById('titre');

 // ===== Functions =====
 

 function readMultiplicator(){
  return Number(multiplicator.value);       // Lire la valeur dans l'input multiplicateur
 }

function buy(price, bonus, image,message,spent){
    counter.stepDown(price);
    spentMoney.stepUp(price);                // Retirer 10 au score
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
        buy(10, bonusDouble, bonusDoubleImg,'Well done you doubled your score',10);
        multiplicator.stepUp(1);            // Augmenter le multiplicateur
    }
});

bonusTriple.addEventListener('click', () => {
    if(counter.value>=30){
        buy(30, bonusTriple, bonusTripleImg,'great you have now tripled the score',30);
        multiplicator.stepUp(3)
    }
});



bonusBoost.addEventListener('click',()=>{
        if(counter.value>=140){
            buy(140,bonusBoost,bonusBoostImg,'beautiful you have 30 seconds click a maximum to increase your cookies',140);
            boost=2;
            setTimeout(()=>boost=1, 30000);


        }
       
});
bonusAutoclick.addEventListener('click', () => {
    if(counter.value>=670){
        buy(670, bonusAutoclick, bonusAutoImg,'you are a champion you can rest I continue',670);
        setInterval(() => cookie.click(), 1000); // Click toute les 1 secondes
    }  
});

buttonRest.addEventListener('click',()=>{
   counter.value=0;
   spentMoney.value=0;
   multiplicator.value=1;
});
    
// <<<<<<< HEAD
// });
// =======
// }


// /**
//  * 
//  * @param {number} amount 
//  * 
//  */
// const addScrore = (amount)=>{

//     if (amount < 0) return

//     document.querySelector("#numbers").textContent = `${getScore()+amount}`
    
// }

// /**
//  * 
//  * @param {'autoclicker'} bonus 
//  */
// const increaseBonusCost = (bonus)=>{

//     switch (bonus) {
//         case 'autoclicker':
//             let target = bonus_map[bonus]['price'] * bonus_map[bonus]['price_multiplier']

//             // Needs upgrade may be ?

//             let new_price = 0

//             while (new_price<target) {
//                 new_price += 5
//             }

//             bonus_map[bonus]['price'] = new_price
            
//             break;
    
//         default:
//             break;
//     }

// }


// /**
//  * 
//  * @param {'autoclicker'} bonus 
//  * @return {boolean}
//  */
// const buy = (bonus)=>{
//     let scrore = getScore()

//     switch (bonus) {
//         case 'autoclicker':
//             if(bonus_map['autoclicker']['price']>scrore){
//                 // TODO display a message showing that the player can't buy the bonus
//                 console.log(`Can't buy bonus`)
//                 return false
//             } 

//             substractScore(bonus_map[bonus]['price'])
//             increaseBonusCost(bonus)
            
//             break;
    
//         default:
//             break;
//     }

//     return true
    
// }




// function cookieClick() { 
//     let num = getScore()
//     num += 1;

//     var numbers = document.getElementById("numbers");
//     numbers.innerHTML = num;      
// }



// const randomRange = (low,high)=>{
//     return Math.floor(Math.random()*high) + low
// }

// /**
//  * 
//  * @param {number} number 
//  * @param {number} fraction
//  * @returns {number}
//  */
// const getFraction = (number,fraction = 10)=>{
//     if (fraction<1) return Math.ceil(number * 10/100)

//     return Math.ceil(number * fraction/100)
// }



// // auto click 

// /**
//  * 
//  * @param {number} time 
//  * @param {number} frequency 
//  * @param {Function} resolve 
//  * @returns 
//  */
// const increment = (time,frequency,resolve)=>{
    
//     if ( time <= 0){
//         resolve('done')
//         return
//     }


    
//     addScrore(1)
    
//     setTimeout(()=>{
//         increment(time -1,frequency,resolve)
//     }, Math.floor(1000/frequency))
    
// }

// /**
//  * 
//  * @param {number} durantion 
//  * @param {number} frequency 
//  * @returns {Promise}
// */
// const autoClick = async (durantion,frequency)=>{
//     return new Promise((resolve, reject) => {
//         increment(durantion*frequency,frequency,resolve)
//     })
// }


// /*

// --------------------------------------------------------------------------------
//                                 Listeners
// --------------------------------------------------------------------------------
// */

// const score_container = document.querySelector("#numbers")
// const score_container2 = document.getElementById("numbers")


// document.querySelector('#btn1').addEventListener('click', ()=>{
    
//     if(bnt_states[0] || !buy('autoclicker')) return

//     bnt_states[0] = true
    
//     autoClick(bonus_map['autoclicker']['duration'],bonus_map['autoclicker']['frequency'])
//     .then(()=>{
//         bnt_states[0] = false
//     })
    
    
// })

// document.getElementById("cookie").addEventListener('click',()=>{
//     cookieClick()
// })

// document.getElementById("cookie").addEventListener("click", (e) => {
//     var cookieFall = document.createElement("span");
//     cookieFall.classList.add("cookieFall");

//     //Adding a bite mor randomness 
//     let w = window.innerWidth 
//     let h = window.innerHeight 

//     let offsetX = getFraction(w)
//     let offsetY = getFraction(h,5)
    
//     // cookieFall.style.left = e.offsetX + "px";
//     // cookieFall.style.top = e.offsetY + "px";
//     let size = Math.random() * (100 -20 +1) +20;

//     cookieFall.style.left = randomRange(offsetX,w-offsetX-size) + "px";
//     cookieFall.style.top = randomRange(offsetY,Math.ceil(h/4)) + "px";

    
    
//     cookieFall.style.width = size + "px";
//     cookieFall.style.height = size + "px";
//     document.body.appendChild(cookieFall);
//     setTimeout(() => {
//     cookieFall.remove();
//     }, 2000);
// });
// >>>>>>> main
