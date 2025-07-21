// Import the React library to use JSX and React features
import React from "react";
// Import the createRoot function from react-dom/client to enable React 18 root API
import { createRoot } from "react-dom/client";
// Import the main App component from the local App.jsx file
import App from "./App.jsx";

// Find the HTML element with the id 'root' and create a React root for it,
// then render the App component inside that root
createRoot(document.getElementById("root")).render(<App />);
