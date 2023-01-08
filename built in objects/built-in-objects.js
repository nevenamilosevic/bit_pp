//exercise2

/*1. Write a JavaScript function that reverses a number. typeof result of the function should
be “number”.
12345 -&gt; 54321 */


// var a = 12345;

// a.sort(function (a, b){
//     return a - b;
// });

// console.log(a);



// var a = [1, 2, 3, 4, 5];

// var b = a.reverse();

// console.log(b);


var a = 12345;
var reverse = (a) => parseInt(String(a).split("").reverse().join(""), 10);

console.log(reverse(a));





/*2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
Note: Assume punctuation, numbers and symbols are not included in the passed string.
“Webmaster” -&gt; “abeemrstw”*/



function alphabeticalOrder(string) {
    return string.toLowerCase().split("").sort().join("");
}
console.log(alphabeticalOrder("Webmaster"));

/*3. Write a function to alphabetize words of a given string. Alphabetizing a string means
rearranging the letters so they are sorted from A to Z.
&quot;Republic Of Serbia&quot; -&gt; &quot;Rbceilpu Of Sabeir&quot; */


// function alphabetizeString(string) {
//     return string.split("").sort().join("").trim();
// }

// console.log(alphabetizeString("Republic Of Serbia"));


function alphabetizeString(string) {
    var newStringuNiz = string.split(" ");

    return (
        newStringuNiz[0].toString().split("").sort().join("").trim() + " " +
        newStringuNiz[1].toString().split("").sort().join("").trim() + " " +
        newStringuNiz[2].toString().split("").sort().join("").trim()
    );
}

console.log(alphabetizeString("Republic Of Serbia"));



/*4. Write a function to split a string and convert it into an array of words.
&quot;John Snow&quot; -&gt; [ &#39;John&#39;, &#39;Snow&#39; ] */

function stringToArr(string) {
    return string.split(" ");
};

console.log(stringToArr("John Snow"));


/*5. Write a function to convert a string to its abbreviated form.
&quot;John Snow&quot; -&gt; &quot;John S.&quot; */


abbreviate = function(string1) {
    var splitName = string1.trim().split(" ");
    if (splitName.length > 1) {
        return (splitName[0] + " " + splitName[1].charAt(0) + ".");
    }
    return splitName[0];
};

console.log(abbreviate("John Snow"));



/*6. Write a function that adds string to the left or right of string, by replacing it’s characters.
&#39;0000&#39;, ‘123’, &#39;l&#39; -&gt; &#39;0123&#39;
&#39;00000000&#39;, ‘123’, &#39;r&#39; -&gt; &#39;12300000&#39; */


function addStringReplace (string1, string2, a) {
    // a = l ili a = r

    if (string1.length > string2.length) {

        if (a = "l") {
            var s = string1.concat(string2);
        }
    }
    return s;

}

console.log(addStringReplace("0000", "123", "l"));




/*7. Write a function to capitalize the first letter of a string and returns modified string.
&quot;js string exercises&quot; -&gt; &quot;Js string exercises&quot; */


function capitalizeTheFirstLetter (string) {
    var string1 = string.substring(0,1).toUpperCase();
    var string2 = string.substring(1);

    return (string1 + string2);
}

console.log(capitalizeTheFirstLetter ("js string exercises"));

/*8. Write a function to hide email addresses to protect them from unauthorized users.
&quot;somerandomaddress@example.com&quot; -&gt; &quot;somerand...@example.com&quot; */

protect_email = function (user_email) {
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(protect_email("somerandomaddress@example.com"));

/*9. Write a program that accepts a string as input and swaps the case of each character. For
example, if you input &#39;The Quick Brown Fox&#39;, the output should be &#39;tHE qUICK bROWN fOX&#39;.
var UPPER = &#39;ABCDEFGHIJKLMNOPQRSTUVWXYZ&#39;;
var LOWER = &#39;abcdefghijklmnopqrstuvwxyz&#39;;
&quot;The Quick Brown Fox&quot; -&gt; &quot;tHE qUICK bROWN fOX&quot; */

var str = 'The Quick Brown Fox';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
  
for(var x=0; x<str.length; x++){
    if(UPPER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
}
console.log(result.join(''));





/*exercise 1
1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]
*/

function duplicate (array){
    var arrayDuplicated = array.concat(array);
    return arrayDuplicated;
}
var a = [2,4,7,11,-2,1];
console.log(duplicate(a));


/*2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] */


var a = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var removeDuplicates = a.filter((c,index) => {
    return a.indexOf(c) === index;
});
console.log(removeDuplicates);


/*3.
a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true */


var a = [1, 2, 9, 2, 1];
function checkIfOdd (array){
    if (array % 2 != 0){
        return "true";
    }
}
console.log(checkIfOdd(a));

/*3.
b. Write a function that counts the number of elements less than the middle
element. If the given array has an even number of elements, print out an error
message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4 */


function lessThenMiddle (array) {
    var count = 0;
    var middle;

    if (array.length % 2 != 0) {
        middle = array[(array.length + 1) / 2 - 1];
        for (var i = 0; i < array.length; i++) {
            if (array[i] < middle){
                count += 1;
            }
        }
    }

    return count;
}

console.log(lessThenMiddle ([-1, 8.1, 3, 6, 2.3, 44, 2.11]));


/*4. Write a function that finds the smallest element of a given array. The function should
return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output: { minValue: -2, minLastIndex: 6 } */


function minAndLastPosition (array) {
    for (var i = 0; i < array.length - 1; i++) {
        minValue = Math.min(array[i], array[i+1]);
    }

    var minLastIndex = array.lastIndexOf(minValue);
    
    return ("minValue: " + minValue + ", " + "minLastIndex: " + minLastIndex);
}


console.log(minAndLastPosition ([1, 4, -2, 11, 8, 1, -2, 3]));


/*5.
a. Write a function that finds all the elements in a given array less than a given
element.
Input: [2, 3, 8, -2, 11, 4], 6
Output: [2, 3, -2, 4] */

function lessThenGiven (array, n) {
    var array2 = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] < n){
            array2[array2.length] = array[i];
        }
    }
    
    return array2;
}

console.log(lessThenGiven ([2, 3, 8, -2, 11, 4], 6));


/*5.
b. Write a function that finds all the elements in a given array that start with the “pro”
substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’] */


function findPro (array) {
    var array2 = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i][0].toLowerCase() == "p" && array[i][1].toLowerCase() == "r" && array[i][2].toLowerCase() == "o") {
            array2[array2.length] = array[i];
        }
    }
    return array2;
}

console.log(findPro (["JavaScript", "Programming", "fun", "product"]));


/*5.
c. Write a function that expects an array and a callback function that filters out
some of the elements. Use functions defined in a) or b) to test it.*/

var arr5 = [2, 3, 8, -2, 11, 4];
var findLessThan = function (arr, n) {
  var newArr = [];
  arr.forEach(function (x) {
    if (x < n) {
      newArr.push(x);
    }
  });
  return newArr;
};
var filter = function (arr, callback) {
  return callback(arr, 5);
};
console.log(filter(arr5, findLessThan));


/*6.
a. Write a list (array) of products you usually buy in the supermarket. Write a price
and name for each product. For example,
[

{name: ‘apples’, price: 100},
{name: ‘milk’, price: 80},
{name:’bananas’, price: 150}
] */

var products = [{
    name: 'chocolate',
    price: 150
  }, {
    name: 'cheese',
    price: 250
  }, {
    name: 'bananas',
    price: 150
  }];



/*6.
b. Write a function that calculates the total price of your shopping list. */


var totalPrice = function (arr) {
    var sum = 0;
    arr.forEach(function (x) {
        sum += x.price;
    });
    return sum;
};

console.log(totalPrice(products));

/*6.
c. Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. */

var totalPrice = function (arr) {
    var sum = 0;
    arr.forEach(function (x) {
        sum += x.price;
    });
    return sum;
};
    var averagePrice = function (arr) {
        return totalPrice(arr) / arr.length;
    };

console.log(averagePrice(products).toFixed(3));

/*6.
d. Write a function that prints out the name of the most expensive product on your
shopping list. Write the name in uppercase. */


var mostExpensive = function (arr) {
    var max = arr[0];
    arr.forEach(function (x) {
        if (x.price > max.price) {
            max = x;
        }
    });
    return max.name.toUpperCase();
};

console.log(mostExpensive(products));



  



