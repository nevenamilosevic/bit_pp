/* Write a program that calculates the maximum of two given numbers. */

function getMax (a, b) {
    if (!isFinite(a) || !isFinite(b)) return "Invalid input";
    if (a > b) return a;
    if (b > a) return b;
    return "Numbers are equal";
}

// console.log(getMax(2,3));

var result = getMax(5, 8);
console.log(result);


/*2. Write a program that checks if a given number is odd. */

function check (a) {
    if (a % 2 === 0) {
        return "Number is even."
    } else {
        return "Number is odd."
    }
}

var result = check(5);
console.log(result);


/*3. Write a program that checks if a given number is a three digit long number. */


function longNumber (a) {
    if (a > 99 && a < 1000) {
        return "A given number is a three digit long."
    } else return "A given number is not a three digit long"
}

var result = longNumber(128);
console.log(result);


/*4. Write a program that calculates an arithmetic mean of four numbers. */


function arithmetic (a, b, c, d) {
    return ((a + b + c + d) / 2);
}

result = arithmetic(1, 2, 3, 4);
console.log(result);



/* 5. Write a program that draws a square of a given size. For example, if the size of
square is 5 the program should draw:
*****
* *
* *
* *
***** */
// var result = "*****\n*   *\n*   *\n*   *\n*****";
// console.log(result);




function drawSquare(a, b) {
    var result = "";

    for (var i = 0; i < a; i++) {
        for (var j = 0; j < b; j++) {
            if (i === 0 || i === a - 1 || j ===  0 || j === b - 1) {
                result += "*";
            } else {
            result += " ";
            }
        }
        if (i !== a - 1) result += "\n";
    }
    return result;
}


var r = drawSquare(10, 7);
console.log(r);


/*6. Write a program that draws a horizontal chart representing three given values.
For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * * 
*/



/* 7. Write a program that calculates a number of digits of a given number. */


function numberOfDigits (a) {
    if (a < 10) {
        return "One digit."
    } else if (a > 9 && a < 100) {
        return "Two digits."
    } else if (a > 99 && a < 1000) {
        return "Three digits."
    } else if (a > 999 && a < 10000) {
        return "Four digits."
    } else {
        return  "The number has more than 4 digits."
    }
}

result = numberOfDigits (8543);
console.log(result);




 /* 8. Write a program that calculates a number of appearances of a given number in a
given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3 */

var sum = 0;
var e = 7;
var a = [2, 4, 7, 8, 7, 7, 1];

function appearance (e) {
    for (var i = 0; i < a.length; i++) {
        if (e === a[i]) {
            sum += 1;
        }
    }
    return sum;
} 

result = appearance(e);
console.log(result);



/*9. Write a program that calculates the sum of odd elements of a given array. */

var sum = 0;
var a = [];

function sumOdd (a) {
    for (var i = 0; i < a.length; i++) {
        if ((a[i] % 2) !== 0) {
            sum = sum + a[i];
        }
    }
    return sum;
}

result = sumOdd(a = [1, 2, 3, 4, 5]);
console.log(result);


/* 10. Write a program that calculates the number of appearances of a letter a in a
given string. Modify the program so it calculates the number of both letters a and
A. */

var sum = 0;
var a = "";

function appearancesLetter (a){
    for (var i = 0; i < a.length; i++) {
        if (a[i] === "a" || a[i] === "A") {
            sum = sum + 1;
        }
    }
    return sum;
}

result = appearancesLetter ("Ananas");
console.log(result);



/* 11. Write a program that concatenates a given string given number of times. For
example, if “abc” and 4 are given values, the program prints out abcabcabcabc. */


var a = "";
var b = "";
var c = "";

function concatenate (a, b) {
    for (var i = 0; i < b; i++) {
        c = c + a; 
    }
    return c;
}

result = concatenate ("abc", 3);
console.log(result);



/*function2
1. Write a function to check whether the `input` is a string or not.
&quot;My random string&quot; -&gt; true
12 -&gt; false */


function isString (input) {
    if (typeof input === "string") {
        return "True.";
    } else return "False";
}

var result = isString ("ananas");
console.log(result);


/*2. Write a function to check whether a string is blank or not.
&quot;My random string&quot; -&gt; false
&quot; &quot; -&gt; true
12 -&gt; false
false -&gt; false */


function blankOrNot (input) {
    if (input.length < 1) {
        return "Blank";
    } else return "Not blank";
}

var result = blankOrNot ("ananas");
console.log(result);


/* 3. Write a function that concatenates a given string n times (default is 1).
&quot;Ha&quot; -&gt; &quot;Ha&quot;
&quot;Ha&quot;, 3 -&gt; &quot;HaHaHa&quot; */


var a = "";
var c = "";

function concatenate (a, input) {
    for (var i = 0; i < input; i++) {
        c = c + a; 
    }
    return c;
}

result = concatenate ("Ha", 3);
console.log(result);


/*4. Write a function to count the number of letter occurrences in a string.
&quot;My random string&quot;, &quot;n&quot; -&gt; 2 */

var sum = 0;
var a = "";

function appearance (a, e) {
    for (var i = 0; i < a.length; i++) {
        if (e === a[i]) {
            sum += 1;
        }
    }
    return sum;
} 

result = appearance("My random string.", "n");
console.log(result);


/*5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1. */


var a = "";
var b = "";

function firstOccurrence (a, b) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === b) {
            return (i + 1);
        } 
    }
    if (a[i] !== b) {
        return "-1";
    }
}

result = firstOccurrence ("banana", "n");
console.log(result);


/* 6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1. */


var a = "";
var b = "";

function firstOccurrence (a, b) {
    for (var i = 0; i < a.length; i++) {
        if (a[a.length - i] === b) {
            return (a.length - i + 1);
        } 
    }
    if (a[i] !== b) {
        return "-1";
    }
}

result = firstOccurrence ("baametmen", "m");
console.log(result);

/* 7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
&quot;My random string&quot; -&gt; [&quot;M&quot;, &quot;y&quot;, null, &quot;r&quot;, &quot;a&quot;]
&quot;Random&quot; -&gt; [&quot;R&quot;, &quot;a&quot;, &quot;n&quot;, &quot;d&quot;, &quot;o&quot;, &quot;m&quot;] */


var a = "";
var b = [];

function convert1 (a, b) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== " ") {
            b[b.length] = a[i];
        } else {
            b[b.length] = null;
        }
    }
    return b;
}


result = convert1 ("My random", []);
console.log(result);


/* 8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself. */

var sum = 0;

function prime (a) {
    for (var i = 1; i <= a; i++) {
        if ((a % i) === 0) {
            sum += 1;
        } 
    }
    if (sum === 2) {
        return "The number is prime."
    } else return "The number is not prime."
}

result = prime (17);
console.log(result);


/*9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
&quot;My random string&quot;, &quot;_&quot; -&gt; &quot;My_random_string&quot;
&quot;My random string&quot;, &quot;+&quot; -&gt; &quot;My+random+string&quot;
&quot;My random string&quot; -&gt; &quot;My-random-string&quot; */


var a = "";
var b = [];

function convert2 (a, b) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== " ") {
            b[b.length] = a[i];
        } else {
            b[b.length] = "+";
        }
    }
    return b;
}


result = convert2 ("My random", []);
console.log(result);


/* 10. Write a function to get the first n characters and add “...” at the end of newly created string. */

var a = [];
var b = [];

function theFirstN (a, n) {
    for (var i = 0; i < n; i++) {
        b[b.length] = a[i];
    }
    b[b.length] = "..."; 
    return b;
}

result = theFirstN ([1, 2, 3, 4, 5, 6, 7], 4);
console.log(result); 


/* 11. Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
[&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity] -&gt; [1, 21, 42, 1000] */

/* bonus :-D
var a = "";
var b = "";

function filter (a, b) {
    for (i = 0; i < a.length; i++) {
        if (typeof a[i] === "number") {
            b[b.length] = a[i];
        }
    }
    return b;
}

result = filter ([1, "2", undefined, 4], []);
console.log(result);

*/

var a = [];
var b = [];

function filter (a, b) {
    for (i = 0; i < a.length; i++) {
        b[b.length] = parseInt(a[i]);
        if (typeof parseInt(a[i]) !== "number") {
            delete b[b.length];
        }
    }
    return b;
}

result = filter ([1, "2", undefined, 4], []);
console.log(result);

/* 12. Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed. */

var a = "";

function retirement (a, b) {
    if (a == "m" || a == "M") {
        c1 = 65 - b;
        result = ("Jos " + c1 + " godina do penzije.");
    } else if (a == "z" || a == "Z") {
        c2 = 60 - b;
        result = ("Jos " + c2 + " godina do penzije.");
    }
    if (result < 0) {
        result = "Already retired.";
    }
    return result;
}

var c = retirement ("z", 48);
console.log(c);


/*13. Write a function to humanize a number (formats a number to a human-readable string) with
the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -&gt; 1st
11 -&gt; 11th */

function humanize (a) {
    if (a === 11 || a === 12 || a === 13) {
        return (a + "th");
    } else {
        if (a % 10 === 1) {
            return (a + "st");
        }else if (a % 10 === 2) {
            return (a + "nd");
        }else if (a % 10 === 3) {
            return (a + "rd");
        }else {
            return (a + "th");
        }
    }
    
}

result = humanize (12);
console.log(result);


/*functions3
1. Write a program to insert a string within a string at a particular position (default is 1,
beginning of a string).
&quot;My random string&quot;, &quot;JS &quot; -&gt; &quot;JS My random string&quot;
&quot;My random string&quot;, &quot;JS &quot;, 10 -&gt; &quot;My random JS string&quot; */




function insert (string, novi, pozicija) {
    var novistring = [];
    if (typeof pozicija === "undefined") {
        return (novistring = novi + " " + string);
    }
    for (var i = 0; i < string.length; i++) {
        if (i === pozicija) {
            novistring += novi;
        }
        novistring += string[i];
    }
    return novistring;
}

var result = insert("My first string", "JS", 4);
console.log(result);


/*2. Write a program to join all elements of the array into a string skipping elements that are
undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null] */



function join (a) {
    var b = "";
    for (var i = 0; i < a.length; i++) {
        if (isFinite(a[i]) && a[i] !== null) {
            b += a[i];
        }
    }
    return b;
}


var result = join ([NaN, 0, 15, false, -22, "", undefined, 47, null]);
console.log(result);


/* 3. Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null] -&gt; [15, -22, 47] */



function filterOut (a) {
    var b = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== "" && a[i] !== false && a[i] !== undefined && a[i] !== null && a[i] !== NaN && a[i] !== 0) {
            b[b.length] = a[i];
        }
    }
    return b;
}


var result = filterOut ([NaN, 0, 15, false, -22, "", undefined, 47, null]);
console.log(result);


/* 4. Write a function that reverses a number. The result must be a number.
12345 -&gt; 54321 // Output must be a number */ 



function reverse(a) {
   
    var c = "";
    var b = "";
    b += a;
    for (var i = b.length - 1; i > -1; i--) {
        c += b[i];
    }
    return parseInt(c);
}

var result = reverse(12345);
console.log(result);


/*5. Write a function to get the last element of an array. Passing a parameter &#39;n&#39; will return the
last &#39;n&#39; elements of the array.
[7, 9, 0, -2] -&gt; -2
[7, 9, 0, -2], 2 -&gt; [0, -2] */

var a = [];
var c = [];


function last (a, b) {
    
    if (typeof b == "undefined") {
        c[c.length] = a[a.length - 1];
    }

    for (var i = 0; i < b; i++) {
        c[i] = a[a.length - i - 1];
    }
    return c;
}

var result = last ([7, 9, 0, -2], 2);
console.log(result);


/*6. Write a function to create a specified number of elements with pre-filled numeric value
array.
6, 0 -&gt; [0, 0, 0, 0, 0, 0]
2, &quot;none&quot; -&gt; [&quot;none&quot;, &quot;none&quot;]
2 -&gt; [null, null] */



var c = [];

function prefilled (a, b) {
    if (typeof a == "undefined") {
        c[c.length] = b;
    }
    for (var i = 0; i < a; i++) {
        c[i] = b;
    }
    return c;
}

var result = prefilled (6, 0);
console.log(result);


/*7. Write a function that says whether a number is perfect.
28 -&gt; 28 is a perfect number.
Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
(including itself).
E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.

Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128. */


var sum = 0;
function perfect (a) {
    for (var i = 1; i < a; i++) {
        if (a % i === 0) {
            sum += i;
        }
    }
    if (sum === a) {
        return "Broj je savrsen."
    } else return "Broj nije savrsen."
}

var result = perfect(28);
console.log(result);


/*8. Write a function to find a word within a string.
&#39;The quick brown fox&#39;, &#39;fox&#39; -&gt; &quot;&#39;fox&#39; was found 1 times&quot;
&#39;aa bb cc dd aa&#39;, &#39;aa&#39; -&gt; &quot;&#39;aa&#39; was found 2 times&quot; */



var sum = 0;
var a = "";
var b = "";

function findAWord (a, b) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] == b[0]) {
            sum += 1;
        }
    }
    return sum;
}


var result = findAWord("The quick brown fox", "fox");
console.log(result);


/*9. Write a function to hide email address.
&quot;myemailaddress@bgit.rs&quot; -&gt; &quot;mye...@bgit.rs&quot; */

var a = [];
var b = [];
function hide(a, b) {
    for (var i = 0; i < a.length; i++) {

    }
}



/*10. Write a program to find the most frequent item of an array.
[3, &#39;a&#39;, &#39;a&#39;, &#39;a&#39;, 2, 3, &#39;a&#39;, 3, &#39;a&#39;, 2, 4, 9, 3] */



var a = [];
var count = 0;

function frequentItem (a) {
    for (var i = 0; i < a.length - 2; i++) {
        if (a[i] === a[i+1]) {
            count += 1;
        }
    }
    return count;
}

var result = frequentItem ([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);
console.log(result);











/*functions 4

1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no */

var e = 3;

function checkss (a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
            return "Yes.";
        } else return "No.";
    }
}

var result = checkss ([5, -4.2, 3, 7]);
console.log(result);


/*2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] */


function multiply (a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            a[i] = a[i] * 2;
        }
    }
    return a;
}

var result = multiply([-3, 11, 5, 3.4, -8]);
console.log(result);


/*3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */


var min = "";

function minimumOfAGivenArray (a) {
        for (i=0; i < (a.length - 2);) {
            if (a[i] < a[i+1]) {
                min = a[i];
            } else {
                min = a[i+1]
            }
            i++
            
        }
    return ("Min is " + min + " position is " + i);
}

var result = minimumOfAGivenArray ([4, 2, 2, -1, 6]);
console.log(result);


/*4. Write a program that finds the second smallest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */ 


/*5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */

/*6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric. */

/*7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/

/*8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]*/

/*9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]*/

/*10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/



























