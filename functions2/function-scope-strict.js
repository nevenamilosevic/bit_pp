/*exercise6

1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
E, I, O, and U. */

function vowels (a) {
    var b = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var br = 0;
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            if (a[i] ===  b[j]) {
                br += 1;
            }
        }
    }
    return br;
}

var res1 = vowels("amOksicilin");
console.log(res1);


/*2. Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] -&gt; [‘a’,1,’b’,2,’c’,3]*/


function combines (a, b) {
    var c = [];
    for (var i = 0; i < a.length; i++) {
        c[c.length] = a[i];
        c[c.length] = b[i]; 
    }
    return c;
}

var res2 = combines(["a", "b", "c"], [1,2,3]);
console.log(res2);


/*3. Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]*/


function rotate (a, n) {
    var b = [];
    for (var i = 0; i < a.length - 2; i++) {
        b[i] = a[i + n];
       
    }
    for (var j = 0; j < n; j++) {
        b[b.length] = a[j];
    }

    return b;
}

var res3 = rotate([1,2,3,4,5,6], 2);
console.log(res3);


/*4. Write a function that takes a number and returns array of its digits. */


function numberToArr (a) {
    var b = [];
    for (var i = 0; i < a.length; i++) {
        b[i] = a[i];
    }
    return b;
}

var res4 = numberToArr("5832");
console.log(res4);


/*5. Write a program that prints a multiplication table for numbers up to 12. */


function multiplication () {
    for (var i = 1; i <= 12; i++) {
        for (var j = 1; j <= 12; j++) {
            console.log(i * j);
        }
    }
    
}

multiplication();

/*6. Write a function to input temperature in Centigrade and convert to Fahrenheit. */


function converte (temp) {
    var res;
    res = (temp * 9/5) + 32;
    return res;
}

var res6 = converte (15);
console.log(res6);

/*7. Write a function to find the maximum element in array of numbers. Filter out all non-number
elements. */

// function filter(a) {
//     var b = [];
//     for (var i = 0; i < a.length; i++) {
//         if (typeof (a[i]) == "number") {
//             b[b.length] = a[i];
//         } else {
//             delete a[i];
//         }
//     }
//     return b;
// }


function max(a){ 
    function filter(a) {
        var b = [];
        for (var i = 0; i < a.length; i++) {
            if (typeof (a[i]) == "number") {
                b[b.length] = a[i];
            } else {
                delete a[i];
            }
        }
        return b;
    }

    var b = filter(a);
    var max = 0;
    for (var i = 0; i < b.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    return max;
}




var res7 = max([4, 12, "a", 5]);
console.log(res7);

/*8. Write a function to find the maximum and minimum elements. Function returns an array. */



function minAndMax (a) {
    var b = [];
    var min = a[0];
    var max = a[0];
    for (var i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }
        if (a[i] > max) {
            max = a[i];
        }
    }
    b = [min, max];
    return b;
}

var res8 = minAndMax([1, 8, 12, 3, 0, 5]);
console.log(res8);


/*9. Write a function to find the median element of array. */


function mediana(a) {
    var med;
    if (a.length % 2 === 0) {
        med = (a[a.length / 2 - 1] + a[a.length / 2]) / 2;
    } else {
        med = a[(a.length - 1) / 2];
    }
    return med;
}

var res9 = mediana([1, 4, 5, 8, 16]);
console.log(res9);


/*10. Write a function to find the element that occurs most frequently. */


function mostFrequentEl(arr) {
  var el = "",
      elMax = 1,
      mostFrequent = false;
  for (var i = 0; i < arr.length; i++) {
      for (var j = i; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
              el += arr[i];
          }
          if (el.length > elMax) {
              elMax = el.length;
              mostFrequent = arr[i];
          }
      }
      el = "";
  }
  return mostFrequent;
}
console.log(mostFrequentEl([3, 7, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));


/*11. Write a function to find and return the first, middle and last element of an array if the array
has odd number of elements. If number of elements is even, return just the first and the
last. In other cases (empty array), input array should be returned. */


var input = [4, 7, 1, 4, 5, 2, 3, 2, 2, 4, 9];

function firstMiddleLast(a) {

    if (typeof a === "undefined") {
        return input;
    }
    for (var i = 0, j = a.length - 1; i < a.length, j >= 0; i++, j--) {
        if (a.length % 2 !== 0) {
            if (i === j) {
                var middle = a[i];
            }
        }
        var res = a[0] + "," + middle + "," + a[a.length - 1];

        if (a.length % 2 === 0) {
            return a[0] + "," + a[a.length - 1];
        }

    }
    return res;
}

console.log(firstMiddleLast(input));


/*12. Write a function to find the average of N elements. Make the function flexible to receive
dynamic number or parameters.*/

var input = [1, 2, 3, 4, 5, 6, 7, 8];

function findAverage(a) {
    var res = 0;
    for (i = 0; i < a.length; i++) {
        res += a[i];
    }
    return res / a.length;
}
console.log(findAverage(input));


/*13. Write a function to find all the numbers greater than the average. */


var input = [1, 2, 3, 4, 5, 6, 7, 8];

function findAverage(a) {
    var average = 0;
        res = 0;
        b = [];
        res1 = 0;
    for (i = 0; i < a.length; i++) {
        res += a[i];
    }
    average = res / a.length;

    for (i = 0; i < a.length; i++) {
        if (a[i] > average) {
            b[b.length] = a[i];
        }
    }
    return b;
}
console.log(findAverage(input));


/*14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
square of the height (in meters). Write a function that takes two parameters, weight and
height, computes the BMI, and prints the corresponding BMI category:
● Starvation: less than 15
● Anorexic: less than 17.5
● Underweight: less than 18.5
● Ideal: greater than or equal to 18.5 but less than 25
● Overweight: greater than or equal to 25 but less than 30
● Obese: greater than or equal to 30 but less than 40
● Morbidly obese: greater than or equal to 40 */



function calculateBMI(weight, height) {
    var BMI = weight / (height * height);
    var category;
    switch (true) {
        case (BMI < 15):
            category = "Starvation"
            break;
        case (BMI > 15 && BMI < 17.5):
            category = "Anorexic"
            break;
        case (BMI > 17.5 && BMI < 18.5):
            category = "Underweight"
            break;
        case (BMI >= 18.5 && BMI < 25):
            category = "Ideal"
            break;
        case (BMI >= 25 && BMI < 30):
            category = "Overweight"
            break;
        case (BMI >= 30 && BMI < 40):
            category = "Obese"
            break;
        default:
            category = "Morbidly obese"
            break;
    }
    return category;
}
console.log(calculateBMI(70, 1.80));


/*15. Write a function that takes a list of strings and prints them, one per line, in a rectangular
frame.:
For example the list [&quot;Hello&quot;, &quot;World&quot;, &quot;in&quot;, &quot;a&quot;, &quot;frame&quot;] gets
printed as:
*********
* Hello *
* World *
* in *
* a *
* frame *

*********       */

//ne moguuuuu


/* Exercise 7

1. Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
● takes 4 arguments: number of children, partner&#39;s name, geographic location, job title.
● outputs your fortune to the screen like so: &quot;You will be a X in Y, and married to Z with N
kids.&quot;
Call that function 3 times with 3 different values for the arguments. */


function tellFortune(children, partner, location, job) {
      return 'You will be a ' + job + ' in ' + location + ' and married to ' +
          partner + ' ' + ' with ' + children + ' kids.';
}
    
console.log(tellFortune(4, "Kosta", "Beograd", "profesor"));


/* 2. You know how old your dog is in human years, but what about dog years? Calculate it!
Write a function named calculateDogAge that:
● takes 1 argument: your puppy&#39;s age.
● calculates your dog&#39;s age based on the conversion rate of 1 human year to 7 dog years.
● outputs the result to the screen like so: &quot;Your doggie is NN years old in dog years!&quot;
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
years. */



function dogAge(age) {
  return "Your doggie is " + age * 7 + " years old in dog years!"
}
console.log(dogAge(8));



/*3. Ever wonder how much a &quot;lifetime supply&quot; of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
● takes 2 arguments: age, amount per day.
● calculates the amount consumed for rest of the life (based on a constant max age).
● outputs the result to the screen like so: &quot;You will need NN to last you until the ripe old age of
X&quot;
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number. */



function calculateSupply(age, amount) {
    var maxAge = 100;
    var supply = amount * 365 * (maxAge - age);
    console.log("You will need " + supply + " to last you until the ripe old age of " + age);
}
calculateSupply(27, 2.7);



/*4. It&#39;s hot out! Let&#39;s make a converter based on the steps here.
Create a function called celsiusToFahrenheit:
● Store a celsius temperature into a variable.
● Convert it to fahrenheit and output &quot;NN°C is NN°F&quot;.
Create a function called fahrenheitToCelsius:
● Now store a fahrenheit temperature into a variable.
● Convert it to celsius and output &quot;NN°F is NN°C.&quot; */




function celsiusToFahrenheit(C) {
    F = (9 * C / 5) + 32;
    return F;
}

console.log(celsiusToFahrenheit(30));

function fahrenheitToCelsius(F) {
    C = ((F - 32) * 5) / 9;
    return C;
}

console.log(fahrenheitToCelsius(86));






