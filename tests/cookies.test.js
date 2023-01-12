


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


test('Score update on click event', () => {

    util.upDateScore(document.querySelector('#cookie'),5)
    expect(document.querySelector('#score').textContent).toBe("10");
    
});


