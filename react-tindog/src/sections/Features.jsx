// Import the FeatureCard component from the components directory
import FeatureCard from "../components/FeatureCard";

// Define the Features functional component
const Features = () => {
  return (
    // Section element with an id for navigation
    <section id="features">
      {/* Container div for layout styling */}
      <div className="container">
        {/* Row div to arrange FeatureCards horizontally (commonly used with CSS frameworks) */}
        <div className="row">
          {/* Render FeatureCard with heading and description props */}
          <FeatureCard
            heading="Easy to use."
            description="So easy to use, even your dog could do it."
          />
          {/* Render another FeatureCard with different props */}
          <FeatureCard
            heading="Elite Clientele"
            description="We have all the dogs, the greatest dogs."
          />
          {/* Render a third FeatureCard with its own props */}
          <FeatureCard
            heading="Guaranteed to work."
            description="Find the love of your dog's life or your money back."
          />
        </div>
      </div>
    </section>
  );
};

// Export the Features component as the default export
export default Features;
