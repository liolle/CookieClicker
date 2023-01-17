
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

    switch (bonus) {
        case 'autoclicker':
            let target = bonus_map[bonus]['price'] * bonus_map[bonus]['price_multiplier']

            // Needs upgrade may be ?

            let new_price = 0

            while (new_price<target) {
                new_price += 5
            }

            bonus_map[bonus]['price'] = new_price
            
            break;
    
        default:
            break;
    }

}



/**
 * 
 * @param {'autoclicker'} bonus 
 * @return {boolean}
 */
 const buy_bonus = (bonus,bonus_map)=>{
    let scrore = getScore()
    
    switch (bonus) {
        case 'autoclicker':
            if(bonus_map['autoclicker']['price']>scrore){
                // TODO display a message showing that the player can't buy the bonus
                console.log(`Can't buy bonus`)
                return false
            } 

            substractScore(bonus_map[bonus]['price'])
            increaseBonusCost(bonus,bonus_map)
            
            break;
    
        default:
            break;
    }

    return true
    
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
 * @returns 
 */
 const increment = (time,frequency,resolve)=>{
    
    if ( time <= 0){
        resolve('done')
        return
    }
    addScrore(1)
    
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
