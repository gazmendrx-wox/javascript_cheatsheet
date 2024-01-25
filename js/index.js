/**
 * This document serves as a cheatsheet for JavaScript
 * to demonstrate most used functions and concepts in JavaScript;
 * Please open index.html in your chrome, with your Developer tools open
 * (inspect);
 */

/**
 * Variables - a place in memory that we save information; 
 */

var iAmAGlobalVar = 'this is something global';
const iAmAConstVar = 'this is a constant, does not change';
let iAmAModernVar = 'this is a modern variable';

// console.log({
//     iAmAGlobalVar,
//     iAmAConstVar,
//     iAmAModernVar
// })

/**
 * Target DOM elements - DOM elements in our case are HTML divs, inputs, any other
 * tag rendered in the index.html;
 * 
 * In order to target elements, we can use 
 * querySelector finds the first element in DOM; -> https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 * querySelectorAll finds all elements via that query in DOM; -> https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 * getElementById finds the target element via id -> https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
 */

const elementWithQuerySelector = document.querySelector('.p-class').innerHTML;
//console.log(elementWithQuerySelector);

const elementsWithQuerySelectorAll = document.querySelectorAll('.p-class');
//console.log(elementsWithQuerySelectorAll);

const elementById = document.getElementById('target-by-id').innerHTML;
//console.log(elementById);

/**
 * innerHTML -> returns the innerHTML between the tags, <p>example</p>, .innerHTML returns example 
 * value for inputs -> returns the value of an input, example <input value='123' /> returns 123 
 * dataset for all tags -> returns value of certain data attribute, example <p data-target='1'>Hello</p>, .dataset.target returns 1
 * -> <input data-my-input='123' /> .dataset.myInput returns 123; 
 */
const valueWithElementById = document.getElementById('text-input').value;
//console.log(valueWithElementById);

const valueWithQuerySelector = document.querySelector('#text-input-2').value;
//console.log(valueWithQuerySelector);

const dataFromPElement = document.getElementById('p-element-with-data').dataset.currentItem;
//console.log(dataFromPElement);

const dataFromInputElement = document.getElementById('input-element-with-data').dataset.age;
//console.log(dataFromInputElement);

const dataFromDivBlock = document.getElementById('div-element-with-data').dataset.block;

/**
 * For loop is used for iterating a List; -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
 */
for(let currentElement = 0; currentElement < 2; currentElement++) {
    //console.log(elementsWithQuerySelectorAll[currentElement].innerHTML);
}

/**
 * Event Listeners - addEventListener https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * list of events https://www.w3schools.com/jsref/dom_obj_event.asp
 */
const btnShowMessage = document.getElementById('show-message-btn');
btnShowMessage.addEventListener("click", function() {
    document.getElementById('hidden-message').style.display = 'block';
})

const btnHideMessage = document.getElementById('hide-message-btn');
btnHideMessage.addEventListener("click", function(){
    document.getElementById('hidden-message').style.display = 'none';
})
