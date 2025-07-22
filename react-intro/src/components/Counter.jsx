// useState is a special tool (called a hook) in React that
// lets you add and manage state in a functional component.
// State is like a memory for your component—it holds data
// (like a number, string, or object) that can change over time,
//  and when it changes, React automatically updates the user
// interface (UI) to reflect that change.

// Import the React library and the useState hook from the 'react' module
// React is the core library for building user interfaces, and useState is a hook for managing state in functional components
import React, { useState } from "react";

// Define a functional component named Counter
const Counter = () => {
  // Log a message to the console whenever the Counter component re-renders
  // Useful for debugging to track when the component updates
  console.log("counter re-rendered");

  // Declare a state variable 'count' initialized to 100, and a function 'setCount' to update it
  // useState returns an array with the current state value and a setter function
  const [count, setCount] = useState(100);

  // Define a function 'incrementHandler' to handle the increment button click
  // Note: Using 'var' for function declaration is uncommon in modern React; 'const' is preferred for immutability
  var incrementHandler = () => {
    // Create a new variable 'num' by adding 1 to the current 'count' value
    var num = count + 1;
    // Update the 'count' state with the new value using the 'setCount' function
    setCount(num);
  };

  // Return the JSX (UI) for the Counter component
  return (
    // A div element to wrap the component's content
    <div>
      // Display the current value of 'count' inside an h1 heading
      <h1>{count}</h1>
      // Render a button that, when clicked, calls the 'incrementHandler'
      function // The 'onClick' event listener binds the button click to the
      incrementHandler
      <button onClick={incrementHandler}>INCREMENT</button>
    </div>
  );
};

// Export the Counter component as the default export
// This allows the component to be imported and used in other parts of the application
export default Counter;
