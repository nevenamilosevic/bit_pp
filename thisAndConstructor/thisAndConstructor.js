/* 1. Create an object that represents your favourite coffee. Please include coffee name,
strength, flavour, milk, sugar, … everything you like! */


function Coffee(name, strength, flavour, milk, sugar) {
    this.name = name;
    this.strength = strength;
    this.flavour = flavour;
    this.milk = milk;
    this.sugar = sugar;
  }
  
  var coffee = new Coffee("cappuccino", "midl", "chocolate", "yes", "yes, please");
  console.log(coffee);


/* 2. Create an object that represents your favourite movie. Please include title, actors,
director, genre, popularity. */


function FavouriteMovie(title, actor, director, genre, popularity) {
    this.title = title;
    this.actor = actor;
    this.director = director;
    this.genre = genre;
    this.popularity = popularity;
}

var favouriteMovie = new FavouriteMovie ("Zona Zamfirova", ["Katarina Radivojevic", "Sloboda Micalovic", "Vojin Cetkovic"], "Zdravko Sotra", "komedija", "najpopularniji oko praznika");

console.log(favouriteMovie);



/*3. Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project&#39;s
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not. */


function Project(desc, lang, git, dev) {
    this.description = desc;
    this.language = lang;
    this.gitRep = git;
    this.status = dev;

    this.printGit = function () {
        console.log(this.gitRep);
    },
    this.isJavaScript = function () {
        if (this.language === 'JavaScript') {
            return true;
        } else return false;
    },
    this.isCompleted = function () {
        return this.status;
    }
}

var project = new Project ('program', 'JS', 'nevenamilosevic', true);
    
console.log(project);




/*4. Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared in under 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients.*/


function CreateRecipe(
    name,
    cuisine,
    complex,
    ingredients,
    time,
    instruction,
    newCuisine
  ) {
    
    this.recipeName = name;
    this.cuisineType = cuisine;
    this.complexity = complex;
    this.listOfIngredients = ingredients;
    this.preparingTime = time;
    this.preparingInstruction = instruction;
    this.printIngredinets = function () {
        console.log(this.listOfIngredients);
      },
    this.isItDoneIn15min = function () {
        return this.preparingTime === '15min';
      },
    this.replaceCuisine = function () {
        return (this.cuisineType = newCuisine);
      },
    this.deleteIngredient = function (list, ing) {
        var updatedList = [];
        for (var i = 0; i < list.length; i++) {
          if (list[i] !== ing) {
            updatedList[updatedList.length] = list[i];
          }
        }
        return updatedList;
      }
    return recipe;
  }
  
  var recipe = new CreateRecipe(
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