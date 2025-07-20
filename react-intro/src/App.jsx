// This imports a CSS file called `App.css` to style the `App` component.
// The `./` means it’s in the same folder as this file.
import "./App.css";

// This imports the `Card` component from a file called `Card.jsx` in the `components` folder.
// You can now use `<Card />` like a custom HTML tag.
import Card from "./components/Card.jsx";

// This defines the `App` component, the main component of the application.
function App() {
  // The `return` statement defines what the `App` component renders.
  return (
    // This `<div>` is a container for all the content in the `App` component.
    <div>
      {/* `<h1>` displays the text "Home Page" as a heading. */}
      <h1>Home Page</h1>
      {/*  `<p>` displays a paragraph of placeholder text (Lorem ipsum). */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        nihil.
      </p>
      {/* This `<div>` with `className="cards"` is a container for multiple `Card` components. */}
      <div className="cards">
        {/*   This is the first `Card` component instance.
              We pass data to it using **props** (like `name`, `email`, etc.) as attributes.
              Each prop becomes a key-value pair in the `props` object in the `Card` component. */}
        <Card
          name="john doe" // Prop: sets `props.name` to "john doe"
          email="john@email.com" // Prop: sets `props.email` to "john@email.com"
          phone="9876567898" // Prop: sets `props.phone` to "9876567898"
          imgUrl="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg" // Prop: sets `props.imgUrl` to this URL
        />
        {/* Second `Card` component with different prop values. */}
        <Card
          name="Rohan"
          email="rohan@email.com"
          phone="8557733434"
          imgUrl="https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?cs=srgb&dl=pexels-nappy-936119.jpg&fm=jpg"
        />
        {/*  Third `Card` component with different prop values. */}
        <Card
          name="Arihant"
          email="arihant@email.com"
          phone="9765677654"
          imgUrl="https://thumbs.dreamstime.com/b/portrait-young-handsome-man-white-shirt-outdoor-portrait-young-handsome-man-white-shirt-outdoor-nice-appearance-131934608.jpg"
        />
        {/*  Fourth `Card` component with different prop values. */}
        <Card
          name="Modi ji"
          email="pmo@email.com"
          phone="0000000000"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6QSJBGdJzYETCD9dblrlbiayoGjbgxJwDbA&s"
        />
      </div>
    </div>
  );
}

{
  /* This exports the `App` component so it can be used elsewhere (like in `index.jsx`). */
}
export default App;
