"use strict"
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateAutoClicker = exports.upDateScore = void 0;
/**
 * 
 * @param {HTMLElement} cokkie 
 * @param {number} point 
 * 
 * Increase the score 
 * (DOM element id='score') by the amount of point
 * 
 */
const upDateScore = (cokkie,point)=>{
    //TODO

}
exports.upDateScore = upDateScore;

/**
 * 
 * @param {number} duration 
 * @param {number} frequency 
 * 
 * Update de score every sec/frequence 
 * (DOM element id='score')
 * 
 */
const activateAutoClicker = async (duration,frequency)=>{
    //TODO

    const recurClick = async (time) =>{
        if(time <= 0){
            return new Promise((resolve, reject) => {
                resolve('done')
            })
        }

        let score =  document.querySelector('#score')
        let sc = parseInt(score) 

        document.querySelector('#score').textContent = isNaN(sc)? 0: `${sc+1}`

        
        setTimeout(()=>{
            recurClick(time-1)

        },Math.ceil(1000/frequency))


    }

    return recurClick(duration * frequency)

}
exports.activateAutoClicker = activateAutoClicker;

