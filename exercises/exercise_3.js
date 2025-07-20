// Create an array of objects, where each object represents a movie with its details
const movies = [
  {
    title: "The Shawshank Redemption", // Movie title
    rating: 9.3, // IMDb rating
    year: 1994, // Year of release
    genre: "Drama", // Movie genre
    duration: 142, // Duration in minutes
    budget: 25000000, // Estimated budget in dollars
  },
  {
    title: "The Godfather",
    rating: 9.2,
    year: 1972,
    genre: "Crime",
    duration: 175,
    budget: 6000000,
  },
  {
    title: "The Dark Knight",
    rating: 9.0,
    year: 2008,
    genre: "Action",
    duration: 152,
    budget: 185000000,
  },
  {
    title: "The Godfather Part II ",
    rating: 9.0,
    year: 1974,
    genre: "Crime",
    duration: 202,
    budget: 13000000,
  },
  {
    title: "12 Angry Men",
    rating: 9.0,
    year: 1957,
    genre: "Drama",
    duration: 96,
    budget: 350000,
  },
];

// Create variables to store the total budget, total duration, and total year sum
var totatBudgetOfAllMovies = 0; // This will store the sum of all movie budgets
var totalDurationOfAllMovies = 0; // This will store the sum of all movie durations
var totalYears = 0; // This will store the sum of all movie release years

// Loop through the array of movies to calculate the total values
for (var i = 0; i < movies.length; i++) {
  totatBudgetOfAllMovies += movies[i].budget; // Add each movie's budget to total budget
  totalDurationOfAllMovies += movies[i].duration; // Add each movie's duration to total duration
  totalYears += movies[i].year; // Add each movie's release year to total years
}

// Calculate the average budget by dividing total budget by the number of movies
var averageBudget = totatBudgetOfAllMovies / movies.length;

// Calculate the average duration by dividing total duration by the number of movies
var averageDuration = totalDurationOfAllMovies / movies.length;

// Calculate the average release year by dividing total years by the number of movies
var averageYear = totalYears / movies.length;

// Print the calculated averages in a user-friendly format
console.log(`Average Budget : $ ${averageBudget}`); // Displays the average movie budget

// `.toFixed(1)` rounds the duration to one decimal place for better readability
console.log(`Average Duration : ${averageDuration.toFixed(1)}`);

// `Math.round()` rounds the average year to the nearest whole number
console.log(`Average Year : ${Math.round(averageYear)}`);

// 1. Arrays of Objects ([] and {})
// 	•	An array ([]) is a collection of multiple values.
// 	•	Each object ({}) inside the movies array represents one movie.
// 	•	Each movie object contains key-value pairs:
// 	•	title: The name of the movie.
// 	•	rating: The IMDb rating.
// 	•	year: The year the movie was released.
// 	•	genre: The type of movie (Drama, Action, Crime, etc.).
// 	•	duration: The length of the movie in minutes.
// 	•	budget: The estimated cost of making the movie.

// 2. Looping through the Movies (for loop)
// 	•	A for loop is used to go through each movie in the array.
// 	•	i = 0: Start from the first movie in the list.
// 	•	i < movies.length: Run the loop until all movies are checked.
// 	•	i++: Move to the next movie in each iteration.
// 	•	Inside the loop:
// 	•	totatBudgetOfAllMovies += movies[i].budget;
// 	•	Adds each movie’s budget to the total budget.
// 	•	totalDurationOfAllMovies += movies[i].duration;
// 	•	Adds each movie’s duration to the total duration.
// 	•	totalYears += movies[i].year;
// 	•	Adds each movie’s release year to the total years.

// 3. Calculating Averages
// 	•	averageBudget = totatBudgetOfAllMovies / movies.length;
// 	•	Divides the total budget by the number of movies.
// 	•	averageDuration = totalDurationOfAllMovies / movies.length;
// 	•	Divides the total duration by the number of movies.
// 	•	averageYear = totalYears / movies.length;
// 	•	Divides the total of all years by the number of movies.

// 4. Displaying Results (console.log())
// 	•	console.log() prints messages in the console.
// 	•	toFixed(1) rounds numbers to one decimal place for better readability.
// 	•	Math.round() rounds numbers to the nearest whole number.
