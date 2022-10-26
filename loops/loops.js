var i = 0;

while (i < 10) {
    console.log(i);
    i++
}

var i = 10;
do {
    i++
} while (i < 10);

console.log(i);


var res = '\n';

for (var i = 0; i < 5; i++) {

    for (var j = 0; j < 5; j++) {

    res += '*\t';

    }

    res += '\n';

}

console.log(res);


/*Write a program that will iterate from 0 to 10 and display squares of numbers.*/

for (var x=0; x <= 10; x++) {
    console.log(x * x);
}

/*1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.*/

var i = 0;

for (i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

/*2. Write a program to sum the multiples of 3 and 5 under 1000.*/


var suma = 0;
var i = 0;

for (i = 0; i < 1000; i++) {
    if (i % 3 === 0 && i % 5 ===0) {
        suma = suma + i;
    }
}

console.log(suma);


/*3. Write a program to compute the sum and product of an array of integers.*/

var a = [1, 2, 3, 4];
var suma = 0;
var proizvod = 1;
var i = 0;

for (i = 0; i < a.length; i++) {
    suma = suma + a[i];
    proizvod = proizvod * a[i];
}

console.log(suma);
console.log(proizvod);

/*4. Write a program which prints the elements of the following array as a single string. var x = [&#39;1&#39;, &#39;A&#39;, &#39;B&#39;, &quot;c&quot;, &quot;r&quot;, true, NaN, undefined];*/


var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
var i = 0;
var j = 0;

for (j = 0; j < 2; j++) {
    for (i= 0; i < x.length; i++) {
        console.log(x[i]);
    }
}







