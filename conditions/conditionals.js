

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

var C = 60;

var C_to_F = (9*C/5) +32;

console.log(C_to_F);


/* Task 7. Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11 Sample Input: 32
Output : 2 Output : 38 */

var l1 = 11;
var l2 = 32;
var l3;

if (l1 > 13) {
    l3 = (l1 - 13)*2;
} else {
    l3 = 13 - l1;
}

console.log(l3);

/*Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5 Sample Input: 8,8
Output : 17 Output : 48 */

var t1 = 12;
var t2 = 5;
var t3;

if (t1 === t2) {
    t3 = 3 * (t1 +t2);
} else {
    t3 = t1 + t2;
}
 console.log(t3);

/*Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10

Output : - Output : true Output : true*/

var r1 = 6;
var r2 = 50;
var r3;

if (r1 === 50 || r2 === 50 || r1 + r2 === 50) {
    console.log(true);
}



/*Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13 Sample Input: 34 Sample Input: 256
Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400*/



var o1 = 34;

if (o1 > 20 && o1 < 100) {
    console.log("Od 20 do 100");
} else if (o1 > 100 && o1 < 400) {
    console.log("od 100 do 400");
}


// Sa predavanja

/*Write a program that compares
two numbers and display the
larger. Result should be
displayed in the console. */ 

var v1 = 2;
var v2 = 15;

if (v1 > v2) {
    console.log(v1);
} else {
    console.log(v2);
}

/*Write a program to check if the
number is divisible by 2. If it
is, print even, if not, print
odd.

Sample numbers: 3, 4, 9 (check one at the time)

Output: odd, even, odd */

var f1 = 17;

if (f1 % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

/* Write a program to check if the
number is divisible by 3 and 5.
If it is, print that number.

Sample numbers: 15, 12 (check one at the time)

Output: 15 */

var c4 = 30;

if (c4 % 3 === 0 && c4 % 5 === 0) {
    console.log(c4)
} 


















