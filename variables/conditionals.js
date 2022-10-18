

// Task 1. Write a conditional statement to find the sign of product of three numbers. Display the
// result in the console with the specified sign.
// Sample numbers: 3, -7, 2 Output: The sign is -

var a = 3;
var b = -7;
var c = 2;


if ((a < 0 && b < 0 && c < 0) || (a < 0) || (b < 0) || (c < 0)) {
    console.log("The sign of product is -")
} else {
    console.log("The sign of product is +")
}

// Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
// Sample numbers: -5, -2, -6, 0, -1

var b1 = -5;
var b2 = -2;
var b3 = -6;
var b4 = 0;
var b5 = -1;


if (b1 > b2 && b1 > b2 && b1 > b3 && b1 > b4 ) {
    console.log(b1);
} else if (b2 > b1 && b2 > b3 && b2 > b4 && b2 > b5) {
    console.log(b2);
} else if (b3 > b1 && b3 > b2 && b3 > b4 && b3 > b5) {
    console.log(b3);
} else if (b4 > b1 && b4 > b3 && b4 > b2 && b4 > b5) {
    console.log(b4);
} else if (b5 > b1 && b5 > b3 && b5 > b4 && b5 > b2) {
    console.log(b5);
}


//Task 3. Write a conditional statement to print three numbers as sorted number list.
//Sample numbers : 0, -1, 4 Output : 4, 0, -1

var n1 = 0;
var n2 = -1;
var n3 = 4;

if (n1 > n2 && n1 > n3) {
    if (n2 > n3){
        console.log(n1, n2, n3);
    } else {
        console.log(n1, n3, n2);
    }

} else if (n2 > n1 && n2 > n3) {
    if (n1 > n3) {
        console.log(n2, n1, n3);
    } else {
        console.log(n2, n3, n1);
    }   
} else if (n3 > n1 && n3 > n2) {
    if (n1 > n2) {
        console.log(n3, n1, n2);
    } else {
        console.log(n3, n2, n1);
    }
}

/* Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is
divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10 Sample input: 7
Output: 10 / 2 = 5 Output: X */

var k1 = 10;
var k2 = 7;

if (typeof k1 === "number") {
    if (k1 % 2 === 0) {
        var k3 = k1 / 2;
        console.log("10 / 2 = " + k3);
    }
} else if (typeof k2 === "number") {
        if (k2 % 2 === 0) {
            var k3 = k2 / 2;
            console.log("10 / 2 = " + k3);
        } else {
            console.log("X");
        }
    }

/* Task 5. Write a program that compares two numbers and displays the larger. Display the result in
the console. */

var p1;
var p2;

if (p1 > p2) {
    console.log(p1);
} else {
    console.log(p2);
}


/* Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 °F */
























