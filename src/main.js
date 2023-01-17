
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
const buttonRest = document.getElementById('reset');
let boost = 1;
const zero = document.getElementById('zero');
const titre = document.getElementById('titre');

// ===== Functions =====
 
let bnt_states = [false,false,false,false,false,false]

const bonus_map = {
    autoclicker: {price:10,base_price:10,duration:10,frequency:10,price_multiplier:1.1},
    double: {price:10,base_price:10,duration:0,price_multiplier:10},
    boost_200: {price:10,base_price:10,duration:20,price_multiplier:1.15}
}

let boost_per = 1
let base_click = 1
let pt_mul = boost_per * base_click

let logs_coms = 0

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


  const reset = ()=>{
      document.getElementById("numbers").textContent = '0'
      pt_mul = 1
      
      bonus_map.autoclicker.price = bonus_map.autoclicker.base_price
      bonus_map.double.price = bonus_map.double.base_price
      bonus_map.boost_200.price = bonus_map.boost_200.base_price
      
      boost_per = 1
      base_click = 1
  
      cleanNode(document.querySelector('#logs'))
  }
  
  
  const getScore = ()=>{
      let num = parseInt(document.querySelector("#numbers").textContent,10)
  
      if (isNaN(num)){
         
          return 0
      }
  
      return num
  }
  
  /**
   * 
   * @param {number} amount 
   * 
   */
   const substractScore = (amount)=>{
  
      if (amount < 0) return
      
      let scrore = getScore()
      let res = scrore-amount < 0? 0 : scrore-amount
  
      document.querySelector("#numbers").textContent = `${res}`
      
  }
  
  
  /**
   * 
   * @param {number} amount 
   * 
   */
   const addScrore = (amount)=>{
  
      if (amount < 0) return
      
      document.querySelector("#numbers").textContent = `${getScore()+amount}`
      
  }
  
  /**
   * 
   * @param {'autoclicker'} bonus 
   */
   const increaseBonusCost = (bonus,bonus_map)=>{
       
       let target = bonus_map[bonus]['price'] * bonus_map[bonus]['price_multiplier']

       // Needs upgrade may be ?

       let new_price = 0

       while (new_price<target) {
           new_price += 5
       }

       bonus_map[bonus]['price'] = new_price
  
  }
  
  
  /**
   * 
   * @param {string} msg 
   * @returns {HTMLElement}
   */
  const LOG_TEX_TYPE1= (msg)=>{
      let elem = document.createElement('p')
      elem.style = `
      margin-top: 5px; display: flex; justify-content: center; 
      font-size: 15px; flex-direction: column; font-weight: bold; 
      border-left: 2px solid black;
      padding-left: 3px; border-radius: 4px 0 0 4px;
      `

      elem.textContent = msg 
      return elem
  }
  
  
  /**
   * 
   * @param {HTMLElement} parent  
   * @param {string} message 
  */
  
  export const attachOutput = (msg,parent = document.querySelector('#logs')) =>{
  
      if (logs_coms >5 && parent.firstChild){
        console.log(parent)
          parent.removeChild(parent.firstChild)
          logs_coms = logs_coms -1 > 0 ?logs_coms -1:0
      }
      let node =LOG_TEX_TYPE1(msg)
       
      parent.appendChild(node)
      removeNodeAsync(5000,node,parent)
      logs_coms ++
  }

  /**
   * 
   * @param {number} delay 
   * @param {HTMLElement} node 
   * @param {HTMLElement} parent 
  */
  const removeNodeAsync = (delay,node,parent )=>{

    setTimeout(() => {
        if (!parent || !node) return
        parent.removeChild(node)
        logs_coms = logs_coms -1 > 0 ?logs_coms -1:0
    }, delay);

  }
  
  
  
  /**
   * 
   * @param {'autoclicker'|'double'|'boost_200'} bonus 
   * @param {} bonus_map
   * @return {boolean}
   */
   const buy_bonus = (bonus,bonus_map)=>{
      let scrore = getScore()
      
      switch (bonus) {
            case 'autoclicker':
                if(bonus_map['autoclicker']['price']>scrore){
                    // TODO display a message showing that the player can't buy the bonus
                    attachOutput(`Cant buy ${bonus} it cost ${bonus_map[bonus]['price']}`)
                    return false
                } 
                substractScore(bonus_map[bonus]['price'])
                increaseBonusCost(bonus,bonus_map)
                attachOutput(`U have bought ${bonus}`)
                break
              
            case "double":
                if(bonus_map['double']['price']>scrore){
                    // TODO display a message showing that the player can't buy the bonus
                    attachOutput(`Cant buy ${bonus} it cost ${bonus_map[bonus]['price']}`)
                    return false
                } 
                substractScore(bonus_map[bonus]['price'])
                increaseBonusCost(bonus,bonus_map)
                attachOutput(`U have bought ${bonus}`)
                break;

            case "boost_200":
                if(bonus_map['boost_200']['price']>scrore){
                    // TODO display a message showing that the player can't buy the bonus
                    attachOutput(`Cant buy +200% it cost ${bonus_map[bonus]['price']}`)
                    return false
                } 
                substractScore(bonus_map[bonus]['price'])
                increaseBonusCost(bonus,bonus_map)
                attachOutput(`U have bought ${bonus}`)
                break;
      
          default:
              break;
      }
  
      return true
      
  }
  
  const cleanNode = (node)=>{
      while (node.firstChild){
          node.removeChild(node.firstChild)
      }
  }
  
  
   function cookieClick(mul) { 
      let num = getScore()
      num += mul;
  
      var numbers = document.getElementById("numbers");
      numbers.innerHTML = num;      
  }
  
  
  
   const randomRange = (low,high)=>{
      return Math.floor(Math.random()*high) + low
  }
  
  /**
   * 
   * @param {number} number 
   * @param {number} fraction
   * @returns {number}
   */
   const getFraction = (number,fraction = 10)=>{
      if (fraction<1) return Math.ceil(number * 10/100)
  
      return Math.ceil(number * fraction/100)
  }
  
  
  
  // auto click 
  
  /**
   * 
   * @param {number} time 
   * @param {number} frequency 
   * @param {Function} resolve 
   *
   * @returns 
   */
   const increment = (time,frequency,resolve)=>{
      
       if ( time <= 0){
           resolve('done')
           return
        }

        addScrore(pt_mul)
        popCookies()
        
        setTimeout(()=>{
            increment(time -1,frequency,resolve)
        }, Math.floor(1000/frequency))
        
    }

    /**
     * 
     * @param {number} durantion 
     * @param {number} frequency 
     * @returns {Promise}
    */
     const autoClick = async (durantion,frequency)=>{
        return new Promise((resolve, reject) => {
            increment(durantion*frequency,frequency,resolve)
        })
    }
    
    
    const boost_200 = ()=>{
        boost_per += 3
        recomputeClik()
        setTimeout(() => {
            boost_per -= 3
            bnt_states[2] = false
            attachOutput('+200% Stoped')
            recomputeClik()
        }, bonus_map.boost_200.duration * 1000);
    }

    const double = ()=>{
        base_click *= 2
        recomputeClik()
    }

    const recomputeClik = ()=>{
        pt_mul = base_click * boost_per
    }


    const popCookies = ()=>{
        let cookieFall = document.createElement("span");
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
    }


  /*
  
  --------------------------------------------------------------------------------
  Listeners
  --------------------------------------------------------------------------------
  */
 

document.querySelector('#btn1').addEventListener('click', ()=>{
    
    if(bnt_states[0] || !buy_bonus('autoclicker',bonus_map)) return

    bnt_states[0] = true
    
    autoClick(bonus_map['autoclicker']['duration'],bonus_map['autoclicker']['frequency'])
    .then(()=>{
        attachOutput('autoclicker Stoped')
        bnt_states[0] = false
    })
    
    
})

cookie.addEventListener('click',()=>{
    cookieClick(pt_mul)
})

cookie.addEventListener("click", (e) => {
    popCookies()
});


bonusDouble.addEventListener('click', () => {
    if(!buy_bonus('double',bonus_map)) return
    double()
});

buttonRest.addEventListener('click',()=>{

    if (!confirm("Are sure you want to reset ?")) return 
    reset()
})

bonusTriple.addEventListener('click',()=>{
    if(bnt_states[2] || !buy_bonus("boost_200",bonus_map)) return

    bnt_states[2] = true
    boost_200()
    
})



/*
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
*/
