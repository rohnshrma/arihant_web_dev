// Create an array (list) that stores the weight of 12 people in the elevator
const weight = [45, 31, 80, 74, 65, 121, 93, 54, 65.3, 21.4, 145, 89];

// Define a constant variable that stores the maximum weight capacity of the elevator
const maxWeight = 1100;

// Create a variable to store the total weight, initialized to 0
var sum = 0;

// Use a for loop to add up the weight of all the people in the elevator
for (var i = 0; i < weight.length; i++) {
  sum += weight[i]; // Add each person's weight to the sum
}

// Round the total weight to the nearest whole number
var totalWeight = Math.round(sum);

// Check if the total weight exceeds the elevator's maximum weight capacity
if (totalWeight > maxWeight) {
  // If the weight is more than 1100kg, print an alert message
  console.log(
    `ALERT! The elevator is overloaded by ${totalWeight - maxWeight}kg`
  );
} else {
  // If the weight is within the limit, print a safe-to-use message
  console.log(
    `Safe to use. Current weight: ${totalWeight}kg, Remaining capacity: ${
      maxWeight - totalWeight
    }kg`
  );
}

//  1.	Arrays ([])
// 	•	An array is used to store multiple values in a single variable.
// 	•	The weight array stores the weights of 12 people inside the elevator.
// 	•	The const keyword is used because the list of weights should not change.
// 	2.	Loop (for loop)
// 	•	A for loop is used to go through every person’s weight in the array.
// 	•	i = 0: Start from the first person in the list.
// 	•	i < weight.length: Loop runs until it checks all 12 people.
// 	•	sum += weight[i]: Adds each person’s weight to the sum variable.
// 	3.	Math Operations
// 	•	Math.round(sum): Rounds the total weight to the nearest whole number.
// 	4.	Conditional Statement (if-else)
// 	•	The if condition checks if the total weight exceeds the maximum limit of 1100kg.
// 	•	If totalWeight > maxWeight, the elevator is overloaded, and an alert message is printed.
// 	•	Otherwise, a message tells the user the elevator is safe, showing the current weight and the remaining capacity.
