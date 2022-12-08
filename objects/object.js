/* 1. Create an object that represents your favourite coffee. Please include coffee name,
strength, flavour, milk, sugar, … everything you like! */

var coffee = {
    name: 'cappuccino',
    strength: 'mild',
    flavour: 'chocolate',
    milk: 'yes',
    sugar: 'yes',
  };
  
  console.log(coffee);

  /* 2. Create an object that represents your favourite movie. Please include title, actors,
director, genre, popularity. */

var favouriteMovie = {
    title: "Zona Zamfirova",
    actor: { 
        actor1: "Katarina Radivojevic", 
        actor2: "Sloboda Micalovic", 
        actor3: "Vojin Cetkovic", 
    },
    director: "Zdravko Sotra", 
    genre: "komedija", 
    popularity: "najpopularniji oko praznika",
};


console.log(favouriteMovie);



/*3. Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project&#39;s
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not. */


function getProgram(desc, lang, git, dev) {
    var program = {
        description: desc,
        language: lang,
        gitRep: git,
        status: dev,
        printGit: function () {
            console.log(program.gitRep);
        },
        isJavaScript: function () {
            if (program.language === 'JavaScript') {
                return true;
            }
            return false;
        },
        isCompleted: function () {
            return program.status;
        },
    };
    return program;
  }
  
var res = getProgram('program', 'JS', 'nevenamilosevic', true);
console.log(res);


/*4. Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared in under 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients.*/


function createRecipe(
    name,
    cuisine,
    complex,
    ingredients,
    time,
    instruction,
    newCuisine
  ) {
    var recipe = {
      recipeName: name,
      cuisineType: cuisine,
      complexity: complex,
      listOfIngredients: ingredients,
      preparingTime: time,
      preparingInstruction: instruction,
      printIngredinets: function () {
        console.log(this.listOfIngredients);
      },
      isItDoneIn15min: function () {
        return this.preparingTime === '15min';
      },
      replaceCuisine: function () {
        return (recipe.cuisineType = newCuisine);
      },
      deleteIngredient: function (list, ing) {
        var updatedList = [];
        for (var i = 0; i < list.length; i++) {
          if (list[i] !== ing) {
            updatedList[updatedList.length] = list[i];
          }
        }
        return updatedList;
      },
    };
    return recipe;
  }
  
  var recipe = createRecipe(
    'pancakes',
    'french',
    2,
    ['water', 'flour', 'sugar', 'eggs', 'milk'],
    '25min',
    'mix and bake',
    'german'
  );
  console.log(recipe);
  recipe.printIngredinets();
  console.log(recipe.isItDoneIn15min());
  console.log(recipe.replaceCuisine());
  console.log(recipe.deleteIngredient(recipe.listOfIngredients, 'milk'));
  





