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


/*8. Write a function to hide email addresses to protect them from unauthorized users.
&quot;somerandomaddress@example.com&quot; -&gt; &quot;somerand...@example.com&quot; */

/*9. Write a program that accepts a string as input and swaps the case of each character. For
example, if you input &#39;The Quick Brown Fox&#39;, the output should be &#39;tHE qUICK bROWN fOX&#39;.
var UPPER = &#39;ABCDEFGHIJKLMNOPQRSTUVWXYZ&#39;;
var LOWER = &#39;abcdefghijklmnopqrstuvwxyz&#39;;
&quot;The Quick Brown Fox&quot; -&gt; &quot;tHE qUICK bROWN fOX&quot; */











