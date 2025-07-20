// This imports the `React` library, which is required for JSX and React components to work.
import React from "react";

// This imports `createRoot` from `react-dom/client`, which is used to render the React app into the HTML page.
import { createRoot } from "react-dom/client";

// This imports the `App` component from the `App.jsx` file.
import App from "./App";

// This line does two things:
// 1. `document.getElementById("root")` finds an HTML element with `id="root"` in the HTML file (usually `index.html`).
//    This is where the React app will be inserted.
// 2. `createRoot(...)` creates a "root" for the React app, which is the starting point for rendering.
// 3. `.render(<App />)` tells React to render the `App` component (and everything inside it) into the `root` element.
createRoot(document.getElementById("root")).render(<App />);
