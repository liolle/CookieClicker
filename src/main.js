import './style.css'

let bnt_states = [false,false,false,false,false,false]

const bonus_map = {
    autoclicker: {price:10,duration:15,frequency:5,price_multiplier:1.5},
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
const increaseBonusCost = (bonus)=>{

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
const buy = (bonus)=>{
    let scrore = getScore()

    switch (bonus) {
        case 'autoclicker':
            if(bonus_map['autoclicker']['price']>scrore){
                // TODO display a message showing that the player can't buy the bonus
                console.log(`Can't buy bonus`)
                return false
            } 

            substractScore(bonus_map[bonus]['price'])
            increaseBonusCost(bonus)
            
            break;
    
        default:
            break;
    }

    return true
    
}




function cookieClick() { 
    let num = getScore()
    num += 1;

    var numbers = document.getElementById("numbers");
    numbers.innerHTML = num;      
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


/*

--------------------------------------------------------------------------------
                                Listeners
--------------------------------------------------------------------------------
*/

const score_container = document.querySelector("#numbers")
const score_container2 = document.getElementById("numbers")


document.querySelector('#btn1').addEventListener('click', ()=>{
    
    if(bnt_states[0] || !buy('autoclicker')) return

    bnt_states[0] = true
    
    autoClick(bonus_map['autoclicker']['duration'],bonus_map['autoclicker']['frequency'])
    .then(()=>{
        bnt_states[0] = false
    })
    
    
})

document.getElementById("cookie").addEventListener('click',()=>{
    cookieClick()
})
