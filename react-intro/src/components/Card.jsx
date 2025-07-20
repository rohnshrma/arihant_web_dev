// This defines a function called `Card` that is a React component.
// A component is a function that returns a piece of UI (usually written in JSX).
// The `props` parameter is an object that holds data passed to the component when it’s used.
function Card(props) {
  // props (object) : {key : "value"}

  // `console.log(props)` prints the `props` object to the browser's console.
  // This is useful for debugging to see what data is being passed to the component.
  // For example, if you pass `name="John"`, `props` might look like `{ name: "John", email: "...", ... }`.
  console.log(props);

  // The `return` statement defines what this component renders (displays) on the screen.
  // JSX is used here, which looks like HTML but is actually a syntax extension for JavaScript.
  // JSX allows you to write HTML-like code that React turns into real HTML elements.
  return (
    // `<div>` is a container for the card’s content. The `id="card"` gives it an ID for styling or JavaScript.
    <div id="card">
      {/* This `<div>` with `className="img-bx"` is a container for the image. */}
      {/* In React, we use `className` instead of `class` (like in HTML) because `class` is a reserved word in JavaScript. */}
      <div className="img-bx">
        {/* </div>The `<img>` tag displays an image. */}
        {/* `src={props.imgUrl}` sets the image source to the `imgUrl` value passed in `props`. */}
        {/*  `alt={props.name}` sets the alt text to the `name` value from `props` for accessibility. */}
        <img src={props.imgUrl} alt={props.name} />
      </div>
      {/* This `<div>` with `className="card-body"` contains the text content of the card. */}
      <div className="card-body">
        {/* `<h2>` displays the `name` from `props` as a heading. */}
        {/* `{props.name}` is how we insert JavaScript values (like `props`) into JSX. The curly braces `{}` are used for JavaScript expressions. */}
        <h2>{props.name}</h2>
        {/* `<p>` displays the `email` from `props` as a paragraph. */}
        <p>{props.email}</p>
        {/*`<p>` displays the `phone` from `props` as another paragraph. */}
        <p>{props.phone}</p>
      </div>
    </div>
  );
}

// This exports the `Card` component so it can be imported and used in other files (like `App.jsx`).
export default Card;
