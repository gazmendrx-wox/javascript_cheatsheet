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

/**
 * Arrays 
 */
const name = 'emri im';
const array = ['emri1', 'emri2', 'emri3', 'emri4'];
// You can access arrays directly by using index key, example array[0], array[1] etc;
//console.log(array[1]); 

/**
 * Array methods -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * join();
 * slice();
 * indexOf();
 * push();
 * pop();
 * splice();
 * length;
 */
array.push('emri5'); //added a new value to array

/**
 * Conditionals
 * 
 * > - greater than
 * >= - greater or equals to
 * < - less than
 * <= - less than or equals to
 * == - equals to (no type check)
 * === - equals to strict check
 * !== - not equals to
 * 
 * output of this is boolean value, true or false;
 */
//console.log(5 > 6);
//console.log(5 >= 4);
//console.log(5 < 6);
//console.log(5 <= 6);
//console.log(5 == 6);
//console.log(5 == '5');
//console.log(5 === 5);
//console.log(5 !== 6);

//filter and return an array that matches the condition/conditionals example item === 'test';
/**
 * array - our array/value;
 * .filter - method, ( (itemOfArray) => condition )
 * 
 * ** behind the scenes functionality **
 * array.filter( (array[0]) => array[0] !== 'emri3' ) //true 
 * array.filter( (array[1]) => array[1] !== 'emri3' ) //true
 * array.filter( (array[2]) => array[2] !== 'emri3' ) //false
 * array.filter( (array[3]) => array[3] !== 'emri3' ) //true
 * array.filter( (array[4]) => array[4] !== 'emri3' ) //true
 * 
 * array = [array[0], array[1], array[3], array[4]];
 * return array;
 */
//console.log(array.filter((item) => item !== 'emri2'));

//map an array; Map is used to transform arrays;
/**
 * array - our array/value;
 * .map - method, ( (itemOfArray) => callback/function )
 * 
 * ** behind the scenes functionality **
 * array.map( (array[0]) => { return array[0] + 'hello' } )
 * array.map( (array[1]) => { return array[1] + 'hello' } )
 * array.map( (array[2]) => { return array[2] + 'hello' } )
 * array.map( (array[3]) => { return array[3] + 'hello' } )
 * array.map( (array[4]) => { return array[4] + 'hello' } )
 * 
 * array = [array[0], array[1], array[2], array[3], array[4]];
 * return array;
 */

//vec volksvagen edhe volvo; 
//const arrayOfGolfAndVolvo = array.filter((item) => item == 'golf' || item == 'volvo');
//const redCars = arrayOfGolfAndVolvo.filter((item) => item.color == 'red);
//const yellowCars = arrayOfGoldAndVolvo.filter((item) => item.color == 'yellow');

const manipulatedArray = array.map((item) => {
    if(item == 'emri1') {
        return item + 'notHello'
    }

    return item + 'hello'
});

//console.log(manipulatedArray);

/**
 * Objects - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects
 * 
 * Objects can contain information, and functions a.k.a methods;
 * 
 * example: 
 * 
 * const human = {
 *  name: 'gazmend',
 *  age: '30',
 *  greet: function() {
 *      return 'Hello from' + this.name // Hello from Gazmend
 *  }
 * }
 * 
 * const developer = {
 *  name: 'Gazmend'
 * }
 * 
 * variables, example: const developer = 'Gazmend', 
 * sa vjet pervoj i ka gazmendi??
 * a ka ble patika a jo??
 * 
 * const buyer = {
 *  name: 'Gazmend',
 *  aKaBlePatikaAJo: false,
 *  patikatEReja: []
 * }
 * 
 * buyer.aKaBlePatikaAJo // false;
 * 
 * Add button -> buyer.patikatEReja.push({id: 1, name: 'Air Max', price: 250})
 * buyer.aKaBlePatikaAjo = true
 * 
 * buyer = {
 *  name: 'Gazmend',
 *  aKaBlePatikaAJo: true,
 *  patikatEReja: [{id: 1, name: 'Air Max', price: 250}]
 * }
 */

// 1 shopping cart; 
//shopping cart has items (array), 
//items have name and price, 
//shopping cart can add and remove items from cart;
const item = {
    id: 1,
    name: 'Air Max',
    price: 250
}

//nese ky button eshte per me shtu add to cart = 1 item
// buttonAddToCart.addEventListener('click', function() {
//     const name = document.getElementById('item-1').dataset.name;
//     const price = document.getElementById('item-1').dataset.price;
//     const item = {
//         name: name,
//         price: price
//     }

//     items.push(item);
// });
const items = [item];
const shoppingCart = {
    items: [], //array of items; 
    addToCart: function(item) {
        this.items.push(item);
    },
    removeFromCart: function(itemId) {
        this.items = this.items.filter((item) => item.id !== itemId)
    }
};

console.log(shoppingCart.items);


buttonAddToCart.addEventListener('click', function() {
    const name = document.getElementById('item-1').dataset.name;
    const price = document.getElementById('item-1').dataset.price;
    const item = {
        id: 1,
        name: name,
        price: price
    }

    shoppingCart.addToCart(item);
});

console.log(shoppingCart.items);

//me kriju nje object

//me shtu ne array


//creating elements;

//casja ne problem

/**
 * next session;
 */
//eventListeners

//Math object

//arrow functions