// reference type

// unindexed : no indexing
// changable : change value of keys
// do not allows duplicates

var car = {
  model: "i10",
  brand: "hyundai",
  year: 2020,
  colors: ["red", "green", "grey"],
  year: 2025,
};

// console.log(car[0]); // undefined

console.log(car.brand);
console.log(car["brand"]);
console.log(car.model);
console.log(car["model"]);

car["year"] = 2023; // assign 2023 to the year key

console.log(car);

var john = ["john", "doe", 23, "male", 1.8, ["engish", "spanish"]];
// console.log(john[2]);
// console.log(john[5]);

var data = {
  firstName: "john",
  lastName: "doe",
  age: 23,
  gender: "Male",
  height: 1.8,
  languages: ["english", "spanish"],
};
// console.log(data["age"]);
// console.log(data.languages);

// var multiple = [
//   {
//     firstName: "john",
//     lastName: "doe",
//     age: 23,
//     gender: "Male",
//     height: 1.8,
//     languages: ["english", "spanish"],
//   },
//   {
//     firstName: "jane",
//     lastName: "doe",
//     age: 22,
//     gender: "Female",
//     height: 1.8,
//     languages: ["english", "spanish"]
//   },
// ];

// create 4 objects about 4 different cars
// model , brand , year, speed

// var car1 = {
//   model: "AAA",
//   brand: "Mitsubishi",
//   year: "1990",
//   speed: "200km",
// };

// var car2 = {
//   model: "BBB",
//   brand: "Toyota",
//   year: "2005",
//   speed: "300km",
// };

// var car3 = {
//   model: "prestige",
//   brand: "Tesla",
//   year: "2023",
//   speed: "400km",
// };

// var car4 = {
//   model: "Y",
//   brand: "Tesla",
//   year: "2025",
//   speed: "200km",
// };

// var cars = [car1, car2, car3, car4];

// console.log(cars);

// // car4["year"] = 2026;
// cars[3]["year"] = 2026;

var cars = [
  {
    model: "AAA",
    brand: "Mitsubishi",
    year: "1990",
    speed: "200km",
  },
  {
    model: "BBB",
    brand: "Toyota",
    year: "2005",
    speed: "300km",
  },
  {
    model: "prestige",
    brand: "Tesla",
    year: "2023",
    speed: "400km",
  },
  {
    model: "Y",
    brand: "Tesla",
    year: "2025",
    speed: "200km",
  },
];

// console.log(cars[3]["year"]);

// Summary
// 	1.	Creation of an Array: A cars array is defined, containing four objects, each representing a car with specific details like model, brand, manufacturing year, and speed.
// 	2.	Accessing Object Properties: Using cars[3]["year"], the year property of the fourth car in the array is accessed. This utilizes array indexing ([3] for the fourth car) and property access (["year"]).
// 	3.	Console Logging: The retrieved value, "2025", is displayed in the console using console.log.

// This code demonstrates how to structure data using objects and arrays, and how to access and manipulate specific values from such structures. It is a fundamental concept in JavaScript and is widely used in programming tasks, especially in the context of data representation and manipulation.
