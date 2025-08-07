// bring in React's StrictMode - it's like having a friend who points out mistakes while you're building
import { StrictMode } from 'react'

// this is how we tell React to put our app on the webpage - the new way (React 18+)
import { createRoot } from 'react-dom/client'

// bring in our CSS file that makes everything look pretty
import './index.css'

// this is our main app component - the blueprint for our entire Instagram clone
import App from './App.jsx'

// bring in BrowserRouter so we can navigate between different pages
import { BrowserRouter } from 'react-router-dom'

// this is where everything starts! this line does several things:
// 1. finds the HTML element with id="root" (where our app will live)
// 2. creates a special container for React to work with
// 3. puts our Instagram app inside that container
// 4. wraps it in StrictMode so we get helpful warnings while building
// 5. wraps everything in BrowserRouter so we can use navigation
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
