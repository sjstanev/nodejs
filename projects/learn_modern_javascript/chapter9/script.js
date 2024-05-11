/********************************************************************************
* filter method
*
* The filter() method of Array instances creates a shallow copy of a portion of a given array, 
* filtered down to just the elements from the given array that pass the test implemented by the provided function.
*
/********************************************************************************/
const Users = [
    {name:'Shaun', premium: true},
    {name:'Yang', premium: false},
    {name:'Chin-Me', premium: true},
    {name:'Li', premium: false},
]

// const premiumUsers = Users.filter(user => {
//     return user.premium
// })

// short version
const premiumUsers = Users.filter( user => user.premium)

console.log('*********** filter method *********');
console.log(Users);
console.log(premiumUsers);
console.log('**************************************');




/********************************************************************************
* map method
*
* The map() method of Array instances creates a new array populated with the results 
* of calling a provided function on every element in the calling array. 
*
/********************************************************************************/
const prices = [20, 10, 30, 25, 15, 40, 80, 5]

const salePrices = prices.map((price) => price / 2);

const products = [
    {name:'gold star', price: 20},
    {name: 'mashrun', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana', price: 10},
    {name: 'red shells', price: 50},
]

const salesProducts = products.map((product) => {
    if (product.price > 30){
        return {name : product.name, price: product.price / 2}
    } else {
        return product
    }
})


console.log('*********** map method *********');
console.log(prices);
console.log(salePrices);

console.log(' Other map method example' ) 

console.log(products);
console.log(salesProducts);
console.log('**************************************');



/********************************************************************************
* reduce method
*
* The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, 
* in order, passing in the return value from the calculation on the preceding element. 
* The final result of running the reducer across all elements of the array is a single value.
* 
* 
* reduce(callbackFn)
* reduce(callbackFn, initialValue)
*
*
/********************************************************************************/

const scores = [20, 10, 30, 25, 15, 40, 80, 5];
const initialValue = 0;

const result = scores.reduce((accumulator, currentValue) => {
    if (currentValue > 30){
        accumulator ++;
    }
    return accumulator
}, initialValue);

const scoresMario = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 25},
    {player: 'crystal', score: 60},
]

const totalMario = scoresMario.reduce((acc, curr) => {
    if(curr.player == 'mario'){
        acc += curr.score
    }
    return acc
},0)

console.log('*********** reduce method *********');
console.log(scores);
console.log(result);

console.log(' Other reduce method example' ) 

console.log(scoresMario);
console.log(totalMario);
console.log('**************************************');

/********************************************************************************
* find method
*
* The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. 
* If no values satisfy the testing function, undefined is returned. 
*
/********************************************************************************/

// scores = [20, 10, 30, 25, 15, 40, 80, 5];

const findScore = scores.find(item => item > 30)

console.log('*********** find method *********');
console.log(scores);
console.log(findScore);
console.log('**************************************');

/********************************************************************************
* Sort method
*
* The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. 
* The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
*
/********************************************************************************/

//example 1 - sorting strings
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi']
//this method is destructive

console.log('*********** sort string method *********');
console.log(names);
console.log(`${names.sort()} this method is destructive`);
console.log('**************************************');


//example 2 - sorting numbers
// scores = [20, 10, 30, 25, 15, 40, 80, 5];

console.log('*********** sort name method *********');
console.log(scores);
console.log(`${scores.sort()} - before using the "compare functions"`);
console.log(`${scores.sort((a, b) => a-b )}`);
console.log('**************************************');


//example 3 - sorting objects
const players = [
    {player: 'mario', score: 20},
    {player: 'shaun', score: 10},
    {player: 'chun-li', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'luigi', score: 70},
]

console.log('*********** sort object method *********');
console.log(`[
    {player: 'mario', score: 20},
    {player: 'shaun', score: 10},
    {player: 'chun-li', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'luigi', score: 70},
]`);

// players.sort((a, b) => {
//     if ( a.score > b.score ) {
//         return -1
//     } else if (b.score > a.score){
//         return 1
//     }else {
//         return 0 // no reordaring is needed
//     }
// })

players.sort((a, b) => b.score - a.score) // this is the same as upper rows

console.log(players);
console.log('**************************************');

/********************************************************************************
*
* chaining method
*
/********************************************************************************/

console.log(`products = [
    {name:'gold star', price: 20},
    {name: 'mashrun', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana', price: 10},
    {name: 'red shells', price: 50},
]`); 

// const filterd = products.filter(product => product.price > 20)
// const promos = filterd.map(product => {
//     return `the ${product.name} is ${product.price / 2} pounds`;
// })

const promos = products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`)

console.log(promos);