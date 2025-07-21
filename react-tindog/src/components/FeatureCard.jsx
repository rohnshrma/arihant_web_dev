// Define a functional component named FeatureCard that receives props as its argument
const FeatureCard = (props) => {
  return (
    // Render a div with Bootstrap classes for layout and custom styling
    <div className="col-lg-4 features-box">
      {/* Display the heading prop inside an h3 element */}
      <h3>{props.heading}</h3>
      {/* Display the description prop inside a paragraph element */}
      <p>{props.description}</p>
    </div>
  );
};

// Export the FeatureCard component as the default export of this file
export default FeatureCard;
