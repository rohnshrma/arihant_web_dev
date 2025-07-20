// Array containing all ingredients required for the recipe
var recipeIngredients = [
  "1.5kg whole chicken",
  "salt for seasoning",
  "pepper for seasoning",
  "1/2 tsp dried chilli flakes",
  "1 tsp coriander seeds, crushed",
  "olive oil",
  "handful of peanuts",
  "juice of 2 limes",
  "extra virgin olive oil",
  "1 tsp sesame oil",
  "lee kum kee sauce soy salt reduced",
  "1 tsp brown sugar",
  "1-2 fresh red chillies, deseeded, finely chopped",
  "1 bunch of spring onions, trimmed",
  "1 large or 2 small lettuces, soft round or cos, washed and spun dry",
  "large bunch fresh mint",
  "1 small cucumber",
];

// Array containing ingredients the user already has at home
var userHas = ["Cucumber", "Olive oil", "Seasame Oil"];

// Array representing ingredients the user has added to their shopping cart
var shoppingCart = ["mint"];

// Calculate the total number of ingredients required for the recipe
var totalRecipeItems = recipeIngredients.length;

// Calculate the total number of ingredients the user has (at home + in cart)
var totalUserItems = userHas.length + shoppingCart.length;

// Calculate the number of ingredients still needed to complete the recipe
var remainingItems = totalRecipeItems - totalUserItems;

// Calculate the percentage of ingredients the user has (both at home and in cart)
var percentageOwned = (totalUserItems / totalRecipeItems) * 100;

// Display a message about the last ingredient added to the shopping cart
console.log(`You just added: ${shoppingCart[shoppingCart.length - 1]}`);

// Display the total number of ingredients in the recipe
console.log(
  `The total number of ingredients in the recipe: ${totalRecipeItems}`
);

// Display the total number of ingredients the user currently has
console.log(`You now have ${totalUserItems} ingredients`);

// Display the number of ingredients still needed
console.log(`You still need ${remainingItems} more ingredients`);

// Display the percentage of ingredients the user has so far
console.log(`You have ${percentageOwned}% of the ingredients needed.`);

// Arrays: Used to store lists of ingredients.
// Array .length Property: Used to count the number of items in an array.
// Mathematical Operations: Used to calculate missing ingredients and percentage completion.
// Template Literals (``): Used for better string formatting in console.log() statements.
