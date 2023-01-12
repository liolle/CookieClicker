


// jest.mock('../src/main.js');

// import { upDateScore } from "../src/util";

const util = require('../src/util')
const { JSDOM } = require('jsdom');

const dom = new JSDOM(
    
    `
    <!doctype html>
    <html>
        <body>
            <button type id="cookie">
                Click Me
            </button>

            <div id="score">
                5
            </div>
        </body>
    </html>
    `
    );
    global.document = dom.window.document;
    global.window = dom.window;
    global.navigator = dom.window.navigator;


// test('Score update on click event', () => {

//     util.upDateScore(document.querySelector('#cookie'),5)
//     expect(document.querySelector('#score').textContent).toBe("10");
    
// });


/**
 * 
 * @returns {number}
 */
const getScore = ()=>{

    let score = document.querySelector('#score').textContent
    return isNaN(score)? 0 : score
}

/**
 * 
 * @param {HTMLElement} element 
 */
const addEventTextcontentChange = (element)=>{



}

class TextListener{
    /**
     * 
     * @param {HTMLElement} element 
     * @param {Function} callback 
     */
    constructor(element, callback){
        this.element = element
        this.current = element.textContent
        this.callback = callback
        this.listern = true
    }

    get start(){

        if(!this.listern){
            return
        }

        if (this.current != this.element.textContent){
            this.callback()
            this.current = this.element.textContent
        }

        setTimeout(()=>{
            this.start()
        },50)
    }


    get stop(){

        this.listern = false
    }

}


/**
 * 
 * @param {number} frequence 
 * @param {number} time 
 * 
 * @returns 
 */
const testAutoClick = async (frequency, time)=>{
    let count = 0
    
    let listern = new TextListener()

    document.querySelector('#score')
    
    let res = await util.activateAutoClicker(frequency*time, frequency)

    return count 

}


test('Auto clicker', async () => {
    
    expect(await testAutoClick(2,2)) .toBe(true)
    
});