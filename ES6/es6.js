/* 1. Write a function that capitalizes the first letter of each string argument it receives.
Function arguments: [&#39;hello&#39;, &#39;there&#39;, &#39;ES&#39;, 6]
Output: [&#39;Hello&#39;, &#39;There&#39;, &#39;ES&#39;] */

const arr = ["hello", "there", "ES", 6];
const cap = arr.filter(el => typeof el === "string").map(el => el[0].toUpperCase() + el.slice(1));
console.log(cap);


/* 2. Write a function that calculates sale tax that should be paid for the product of the given price.
Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
Input: [{ name: “Banana”, price: 120 }, {name: “Orange”, price: 100}]
Output: [{ name: “Banana”, price: 144 }, { name: “Orange”, price: 120 }] // product full price
Output2: [ 24, 20 ] // tax only */


const products = [
    {name: "Banana", price: 120},
    {name: "Orange", price: 100}
]

let taxRate = 20;

const productsNewPrice = products.map(el => {
    return {
        name: el.name,
        price: el.price + (el.price * taxRate / 100)
    };
});

const taxOnly = products.map(el => el.price * taxRate / 100);

console.log(taxOnly)

/*3. Write a function that increases each element of the given array by the given value. If the value is
omitted, increase each element of the array by 1.
Input: [4, 6, 11, -9, 2.1], 2
Output: [6, 8, 13, -7, 4.1] */


const arr3 = [4, 6, 11, -9, 2.1];

const newArr3 = arr3.map(el => el + 2);

console.log(newArr3);

/*4. Write a function that filters all even elements of the array.
Input: [6, 11, 9, 0, 3]
Output: [6, 0] */


const arr4 = [6, 11, 9, 0, 3];

const arr4Filtered = arr4.filter(el => el % 2 === 0);

console.log(arr4Filtered);


/*5. Write a function that filters all the strings from the given array that contain substring JS or js.
Input: [&#39;compiler&#39;, &#39;transpiler&#39;, &#39;babel.js&#39;, &#39;JS standard&#39;, &#39;linter&#39;]
Output: [&#39;babel.js, &#39;JS standard&#39;] */


const arr5 = ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'];

const arr5Filtered = arr5.filter(el => el.toUpperCase().includes("JS"));

console.log(arr5Filtered);


/*6. Write a function that filters all integer numbers from the given array.
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
Output: [7, 8] */


const arr6 = [1.6, 11.34, 9.23, 7, 3.11, 8];

const arr6Filtered = arr6.filter(el => Number.isInteger(el));

console.log(arr6Filtered);


/*7. Write a function that filters all integer arguments that contain digit 5.
Function arguments: 23, 11.5, 9, &#39;abc&#39;, 45, 28, 553
Output: [45, 553] */

const arr7 = [23, 11.5, 9, "abc", 45, 28, 553];

const arr7Filtered = arr7.filter(el => `${el}`.includes(5) && !`${el}`.includes(".5"));

console.log(arr7Filtered);

/*8. Write a function that returns indexes of the elements greater than 10.
Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
Output: [1, 2, 5] */



const arr8 = [1.6, 11.34, 29.23, 7, 3.11, 18];

const greatherEl = arr8.filter(el => el > 10);

console.log(greatherEl);

const greatherElIndex = arr8 => {
    const res = [];
    arr8.forEach((el, index) => {
        if(el > 10) {
            res.push(index);
        };
    });
    return res;
};

console.log(greatherElIndex(arr8));



/*9.
a. Create an array of persons. A person should be an object with name and age properties.
Experiment with enhanced object literals.
b. Write a function that prints out the names of persons older than 25.
c. Write a function that check if there is a person older than 40.
d. Write a function that checks if all persons are older than 20. */


const persons = [
    {name: "Miljana", age: 29},
    {name: "Nevena", age: 27},
    {name: "Milica", age: 18}
];

function olderThen25(){
    persons.forEach(el => {
        if (el.age > 25) {
            console.log(el.name);
        };
    });
};


olderThen25(persons);


function olderThen40() {
    console.log(persons.some(el => el.age > 40));
}

olderThen40(persons);

function olderThen20(){
    console.log(persons.every(el => el.age > 20));
};

olderThen20(persons);


/*10. Write a function that checks if the given array is an array of positive integer values.
Input: [3, 11, 9, 5, 6]
Output: yes
Input: [3, -12, 4, 11]
Output: no */


const arr101 = [3, 11, 9, 5, 6];
const arr102 = [3, -12, 4, 11];

// const res1 = arr101.every(el => {
//     let result = "";
//     if(el > 0) {
//         result = "yes"
//     } else {
//         result = "no"
//     }
//     console.log(result);
// });

// console.log(res1);

function check(arr){
    if (arr.every(el => el > 0)) {
        return "yes";
    } else return "no";
};


console.log(check(arr101));
console.log(check(arr102));



/*11. Write a function that calculates the product of the elements of the array.
Input: [2, 8, 3]
Output: 48*/

//prvi nacin

const arr11 = [2, 8, 3];

function productOfTheElements(arr) {
    var product = 1;
    for (let i = 0; i < arr.length; i++) {
        product = product * arr[i]
    }
    return product;
}


console.log(productOfTheElements(arr11));

//ES6


const product2 = arr11.reduce((acumulator, arr11El) => acumulator * arr11El);

console.log(product2);



/*12. Write a function that calculates the maximum of the given array.
Input: [2, 7, 3, 8, 5.4]
Output: 8 */


//prvi nacin

const arr12 = [2, 7, 3, 8, 5.4];

function findMaxEl(arr) {
    let maxEl;
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i+1]) {
            maxEl = arr[i];
        } else {
            maxEl = arr[i+1];
        }
    }
    return maxEl;
}

console.log(findMaxEl(arr12));

//ES6

const max = arr => Math.max(...arr);
console.log(max([2, 7, 3, 8, 5.4]));

