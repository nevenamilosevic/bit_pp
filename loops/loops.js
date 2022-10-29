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
    if (i % 3 === 0 && i % 5 === 0) {
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
var result = "";


for (i = 0; i < x.length; i++) {
    result += " " + x[i];
  }

  console.log(result);


/* 5. Write a program that prints the elements of the following array.
var a = [

[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27]
]; */

var a = [[1, 2, 1, 24], [8, 11, 9, 4],[7, 0, 7, 27]];

console.log(a[0], a[1], a[2]);

/* 6. Write a program that outputs the sum of squares of the first 20 numbers. */

var i = 0;
var sum = 0;

for (i=0; i <= 20; i++) {
    sum = sum + i*i;
}

console.log(sum);

/* 7. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.

David 80
Marko 77
Dany 88
John 95
Thomas 68
The grades are computed as follows :

&lt; 60% F
&lt; 70% D
&lt; 80% C

&lt; 90% B
&lt; 100% A */

var a = [80, 77, 88, 95, 68]
var grade = "";
var i = 0;

for (i=0; i<5;) {
    if (a[i] < 60) {
        grade = "F";
        console.log(grade)
    } else if (a[i] > 60 && a[i] < 70) {
        grade = "D";
        console.log(grade);
    } else if (a[i] > 70 && a[i] < 80) {
        grade = "C";
        console.log(grade);
    } else if (a[i] > 80 && a[i] < 90) {
        grade = "B";
        console.log(grade);
    } else if (a[i] > 90 && a[i] < 100) {
        grade = "A";
        console.log(grade);
    }
    i++
}


/*loops2*/


/*1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no */


var e = 5;
var a = [5, -4.2, 3, 7];
var i = 0;

for (i=0; i < a.length; i++) {
    if (e === a[i]) {
        console.log("Yes");
        break;
    } else {
        console.log("No");
        break;
    }
}

/*2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] */

var x = [-3, 11, 5, 3.4, -8];
var i = 0;
var result = "";

for (i=0; i<x.length; i++) {
    if (x[i] > 0) {
        x[i] = x[i] * 2;
    }
    result += " " + x[i];
}

console.log("[" + result + "]");


/*3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */

var a = [4, 2, 2, -1, 6];
var i = 0;

for (i=0; i < (a.length - 2);) {
    if (a[i] < a[i+1]) {
        i += 1;
    } else {
        a[i] = a[i+1];
        i++
    }
}

console.log(a[i], i);


/*4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */


var arr = [4,2,2,-1,6];
var min = arr[0];
var min2 = arr[0];
for(count=0; count<arr.length;count++){
    if(arr[count]<min){
        min = arr[count];

    }
}

for(count=0; count<arr.length;count++){
    if(arr[count]!==min && arr[count]<min2){
        mini2 = arr[count]
        console.log('secound smallest number',mini2);
    }
}



/*5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */


var sum = 0;
var i = 0;
var a = [3, 11, -5, -3, 2];

for (i=0; i<a.length; i++) {
    if (a[i]>0) {
        sum = sum + a[i];
    }
}

console.log(sum);


/*6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric. Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.*/

var a = [2, 4, -2, 7, -2, 4, 2];
var i = 0;
var b = [3, 4, 12, 8];
var j = 0;

for (i=0; i<(a.length / 2 + 1); i++) {
    if (a[i] === a[a.length - 1]) {
        console.log("The array is symmetric.");
        break;
    } else {
        console.log("The array is not symmetric.");
        break;
    }
}


for (j=0; j<(a.length / 2); j++) {
    if (b[j] === b[b.length - 1]) {
        console.log("The array is symmetric.");
        break;
    } else {
        console.log("The array is not symmetric.");
        break;
    }
}


/*7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9] */


var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];
var i = 0;
var j = 0;

for (i=0; i< (a.length); i++) {
    
        c[2*i] = a[i];
        c[2*i+1] = b[i];
        
}

console.log(c);

/* for (i=0; i < a.length; i++) {
    c[c.length] = a[i];
    c[c.length] = b[i];
} */



/*8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]*/

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];
var i = 0;

for (i=0; i < (a.length); i++) {
    c[c.length] = a[i];
}
for (var j=0; j < (b.length); j++) {
    c[c.length] = b[j];
}

console.log(c);



/*9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]

Output array: [4, 6, 8]*/


var e = 2;
var a = [4, 6, 2, 8, 2, 2];
var i = 0;

for (i=0; i < a.length; i++) {
    if (a[i] === e) {
        delete a[i];
    }
}
console.log(a);


/*10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/


var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];
var i = 0;
var j = 0;
var resultArray = [];

/*
for (i=0; i < a.length; i++) {
    if (p > a.length) {
        console.log("Error.");
    } else {
        a.length = a.length + 1;
        a[a.length - 1] = a[a.length - 2];
        a[a.length - 2] = a[a.length - 3];
        a[a.length - 3] = a[a.length - 4];
        a[p] = e;
        break;
    }
}

console.log(a);

*/

for (i=0; i < a.length + 1; i++) {
    if (p > a.length) {
        console.log("Error.");
    } else {
        if (i < p) {
            resultArray[i] = a[i];
        } else if (i === p) {
            resultArray[i] = e;
        } else {
            resultArray[i] = a[i-1];
        }
    }

}

console.log(resultArray);