var recipe = {
  "name": "Broccoli Cheese Soup",
  "serves": 6,
  "servings": {
    "count": 3,
    "unit": "cup",
    "calories": 600
  },
  "ingredients": [
    {
      "name": "broccoli",
      "unit": "head",
      "count": 4
    },
    {
      "name": "garlic clove",
      "count": 2
    },
    {
      "name": "onion",
      "count": 2
    },
    {
      "name": "chicken stock",
      "count": 4.5,
      "unit": "cup"
    },
    {
      "name": "sharp cheddar cheese",
      "count": 4.5,
      "unit": "cup"
    },
    {
      "name": "parmesan cheese",
      "count": 1.25,
      "unit": "cup"
    },
    {
      "name": "milk",
      "count": 2,
      "unit": "cup"
    },
    {
      "name": "water"
    },
    {
      "name": "butter",
      "count": 4,
      "unit": "tablespoon"
    },
    {
      "name": "salt",
      "count": 2,
      "unit": "teaspoon"
    },
    {
      "name": "pepper",
      "count": 1,
      "unit": "teaspoon"
    }
  ],
  "directions": [
    "Trim broccoli florets from stalks.",
    "Chop broccoli stalks into 1 inch cubes.",
    "Dice onion.",
    "Mince garlic.",
    "In a pot large enough to contain all ingredients, sauté onions in butter until tender, about 5 minutes.",
    "Add garlic and sauté until fragrant.",
    "Add chicken stock and bring to a low simmer. Simmer uncovered for 20 minutes.",
    "Meanwhile, add milk to a pot over low heat.",
    "Stir in cheeses slowly, a 1/2 cup at a time, waiting for each batch to melt before adding any more.",
    "Remove from heat.",
    "Once broccoli is done simmering, divide up contents of pot and blend to a find consistency. Return to pot once done.",
    "Add cheese sauce, salt, and pepper to the large pot over medium heat. Stir to combine.",
    "Add water as necessary to achieve desired consistency.",
    "Remove from heat.",
    "Do not attempt to actually make this! I made it up and it would be terrible."
  ]
}

var parser = function (data) {
  var formattedTitle = data.name + "\n" + "====" + "\n" + " " + "\n" + "Makes " + data.serves + ", " + data.servings.count + " " + data.servings.unit + " servings of " + data.servings.calories + " calories each."  + "\n";

  var ingredientsHeader = "Ingredients" + "\n" + "----" + "\n"


  return formattedTitle + "\n" + ingredientsHeader;
}

console.log(parser(recipe));


var ingredientLoop = function (data) {
  var ingredientsList = [];
  for (let i=0; i<data.ingredients.length; i++) {
    if (data.ingredients[i].count && data.ingredients[i].unit) {
      ingredientsList.push('* ' + data.ingredients[i].name + " (" + data.ingredients[i].count + " " + data.ingredients[i].unit + ")")
    }
    else if (data.ingredients[i].count) {
      ingredientsList.push('* ' + data.ingredients[i].name + " (" + data.ingredients[i].count + ")")
    }
    else {
      ingredientsList.push('* ' + data.ingredients[i].name)
    }
  }
  return ingredientsList
}

const ingredientListUnformatted= ingredientLoop(recipe);

var ingredientListPrint = function (arr) {
  for (let i=0; i<arr.length; i++) {
  console.log(arr[i])
  }
}

console.log(ingredientListPrint(ingredientListUnformatted))


console.log("\n");

var directionLoop = function (data) {
  for (let i=0; i<data.directions.length; i++) {
    console.log((i+1) + ". " + data.directions[i]);
  }
}

directionLoop(recipe);
