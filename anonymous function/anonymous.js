/*IIFE = Immediately Invoked Function Expressions
1. Write IIFE that replaces the first and the last element of the given array and prints out its
elements.
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4] */


var result = ( function replace () {
    var a = [4, 5, 11, 9];
    var b = [];
    for (var i = 0; i < a.length; i++) {
        if (i != 0 && i != a.length - 1) {
            b[i] = a[i];
        }
       b[0] = a[a.length - 1];
       b[a.length - 1] = a[0];
    }
    return b;
  
} ) ();

console.log(result);

/*2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
Input: 4 5
Output: 20*/

var result1 = (function surfaceArea (a, b) {
    var p = a * b;
    return p;
}) (4, 5);

console.log(result1);

/*3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
number of replacements.
Input: prograMming
Output: progra**ing, 2 */


var result2 = (function replaceAppearances (a) {
    var br = 0;
    var b = "";
    for (var i = 0; i < a.length; i++){
        if (a[i] !== "m" && a[i] !== "M") {
            b += a[i];
        } else { 
            b += "*";
            br = br + 1;
        }
        
    }
    return ("Niz " + b + " brojac " + br);
} ) ("prograMming");

console.log(result2);


/*4. Write a function with parameters name and surname that returns a function that
suggests an email in the form name.surname@gmail.com.
Input: pera peric
Output: pera.peric@gmail.com */ 


var result3 = (function suggests (ime, prezime) {
    return (ime + "." + prezime + "@gmail.com")
}) ("nevena", "milosevic");

console.log(result3);


/*5. Write a function that returns a function that calculates a decimal value of the given octal
number.
Input: 034
Output: 28*/

var result4 = (function returnFunction (){
    function decimalValue (a) {
        return (a)
    }
    return decimalValue(034);
}) ();

console.log(result4);

/*6. Write a function that checks if a given string is valid password. The password is valid if it
is at least 6 characters long and contains at least one digit. The function should receive
two callbacks named successCallback and errorCallback that should be called in case
password is correct or invalid.
Input: JSGuru
Output: Your password is invalid!
Input: JSGuru123
Output: Your password is cool! */


function isValidPassword (password, cb1, cb2) {
    var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (var i = 0; i < password.length; i++) {
        for (var j = 0; j < digits.length; j++) {
            if (password.length >= 6 && password[i] === digits[j]) {
                return successCallback();
            }
        }
    }
    return errorCallback();
}
function successCallback() { 
    return "Your password is cool!";
}
function errorCallback() {
    return "Your password is invalid!";
}
console.log(isValidPassword("JSGuru123", successCallback, errorCallback));




/*
function checkPass (pass, successF, errorF) {
    
    function testPassword(p) {

    }
    var isRegularPassword = testPassword(pass)
    if (isRegularPassword) {
        successF ()
    } else {
        errorF()
    }
}

checkPass("testpass", 
function()
{console.log("pass is ok")}, 
function() 
{console.log("pass is wrong")})

function  successCallback () {
    
}

function errorCallback () {

}
 */

/*7. Write a function that filters elements of the given array so that they satisfy a condition
given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] */

var resultFilerOdd = (function odd (array){
    var arrayOdd = [];
    for(i=0; i<array.length; i++){
        if(array[i]%2 == 1){
            arrayOdd[arrayOdd.length] = array[i];
        }
    } return arrayOdd;
}) ([2, 8, 11, 4, 9, 3]);
console.log(resultFilerOdd);




/*functions2

1. Write a function that checks if a given string contains digit 5.
Input: “1b895abd”
Output: true
Input: “1bser9re”
Output: false */


var res1 = (function contains5 (a) {
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length; j++) {
            if (a[i] === a[j]) {
                return "True"
            } else return "False"
        }
    }
}) ("1b895abd");
console.log(res1);




/*2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with
‘**’.
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!” */

var res2 = (function replaceJS (a) {
    var b = "";
    for (var i = 0; i < a.length; i++){
        if (a[i] !== "J" && a[i] !== "S") {
            b += a[i];
        } else { 
            b += "*";
        }
        
    }
    return b;

})("Programming in JS is super interesting!");

console.log(res2);


/*3. Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’
Output: “Good morning”*/


var res3 = (function insertss (a, n, d) {
    var b = "";
    for (var i = 0; i < a.length; i++) {
        if (i < n - 1 ) {
            b += a[i];            
        } else if (i == n - 1) {
            b += "d";
            b += " ";
        } else if (i > n - 1 ) { 
            b += a[i];
        } 
    }
    return b;
})("Goo morning", 4, "d");

console.log(res3);

/*4. Write a function that deletes a character from the given position in the string.
Input: “Goodd morning!”, 3
Output: “Good morning!”*/

var res4 = (function deletess (a, n) {
    var b = "";
    for (var i = 0; i < a.length; i++) {
        if (i !== n) {
            b += a [i];
        } else {
            delete a[i];
        }
    }
    return b;
}) ("Goodd morning!", 3);
console.log(res4);


/*5. Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]*/

var res5 = (function deleteSecond (a) {
    var b = [];
    for (var i = 0; i < a.length; i++) {
        if ((i % 2) !== 0) {
            delete a[i];
        } else {
            b[b.length] = a[i];
        }
    }
    return b;
} ) ([3, 5, 1, 8, 90, -4, 23, 1, 67]);

console.log(res5);

/*6. Write a function that replaces the elements of the given array between two positions with
their doubled values.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]*/

var res6 = (function replacesDouble (a, p, q) {
    var b = [];
    for (var i = 0; i < a.length; i++) {
        if (i < p || i > q) {
            b[i] = a[i];
        } else {
            b[i] = a[i] * 2;
        } 
    }
    return b;
}) ([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6);

console.log(res6);


/*7. Write a function that checks if every element of the first array is contained in the second
array. Be careful with repetitions!
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true*/

var res7 = (function contained (a, b){
    var odg = "";
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                odg = "True";
            } else {
                odg = "False";
            }
        }
    }
    return odg;
}) ([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]);

console.log(res7);



/*8. Write a function that sorts an array of strings by the number of appearances of the letter
‘a’ or ‘A’.
Input: [‘apple’, ‘tea’, ‘amazing’, ‘morning’, ‘JavaScript’]
Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’] */

var res8 = (function sortArrayOfStrings(arr) {
    function countAInString(string) {
      var res = 0;
      for (var i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'A') {
          res++;
        }
      }
      return res;
    }
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (countAInString(arr[i]) < countAInString(arr[j])) {
          var temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
    })(["apple", "tea", "amazing", "morning", "JavaScript"]);
  
console.log(res8);

/*9. Write a function that prints out the date of the next day.
Output: 25. 10. 2018.*/

var res9 = (function nextDay (a,b,c){
    if (b === 2) {
        if(a < 28) {
            a = a + 1;
        } else if (a === 28){
            a = 1;
            b = 3;
        }
    } else if (b === 4 || b  === 6 || b === 9 || b === 11 ) {
        if (a < 30) {
            a = a + 1;
        } else if (a === 30){
            a = 1;
            b = b + 1;
        }
    } else {
        if (a < 31) {
            a = a + 1;
        } else if (a === 31 && b !== 12) {
            a = 1;
            b = b + 1;
        } else {
            a = 1;
            b = 1;
            c = c + 1;
        }
    }
    
    
    return a + "." + b + "." + c + ".";
}) (31, 12, 2018);

console.log(res9);


/*10. Write a function that prints out the date of the previous day.
Output: 23. 10. 2018.*/

var res10 = (function previousDay (a,b,c){
    if (b === 3) {
        if(a > 1) {
            a = a - 1;
        } else if (a === 1){
            a = 28;
            b = 2;
        }
    } else if (b === 5 || b  === 7 || b === 10 || b === 12 ) {
        if (a > 1) {
            a = a - 1;
        } else if (a === 1){
            a = 30;
            b = b - 1;
        }
    } else {
        if (a > 1) {
            a = a - 1;
        } else if (a === 1 && b !== 1) {
            a = 31;
            b = b - 1;
        } else {
            a = 31;
            b = 12;
            c = c - 1;
        }
    }
    
    
    return a + "." + b + "." + c + ".";
}) (1, 1, 2018);

console.log(res10);


/*11. Write a function that prints out an array of the numbers aligned from the right side.
Input: [78, 111, 4, 4321]
Output:
78
111
4
4321*/


// var res11 = (function printsOut (a) {
//     var b = "";
//     for (var i = 0; i < a.length; i++) {
//         b +=  "\n" + a [i];
//     }
//     return b;
// }) ([78, 111, 4, 4321]);

// console.log(res11);



function printNumbers(array) {
    var result = "";
    var max = 0;
    var element = array[i] + "";
    for (var i = 0; i < array.length; i++) {
        if (element.length > max) {
            max = element.length;
        }
    }

    function generateSpace (num) {
        var res = "";
        for (var i = 0; i < num; i++) {
            res += " ";
        }
        return res;
    }

    for (var i = 0; i < array.length; i++) {
        var element = array[i] + "";
        var diff = max - element.length;
        
        result += generateSpace(diff) + element + "\n";

    }
    return result;
}
console.log(printNumbers([78, 111, 4, 4321]));





