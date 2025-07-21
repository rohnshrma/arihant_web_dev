// Define a functional React component named Brand
const Brand = () => {
  return (
    // Render a section element with an id of "press"
    <section id="press">
      {/* Render an image with class "press-logo", source "TechCrunch.png", and alt text "tc-logo" */}
      <img className="press-logo" src="TechCrunch.png" alt="tc-logo" />
      {/* Render an image with class "press-logo", source "tnw.png", and alt text "tnw-logo" */}
      <img className="press-logo" src="tnw.png" alt="tnw-logo" />
      {/* Render an image with class "press-logo", source "bizinsider.png", and alt text "biz-insider-logo" */}
      <img className="press-logo" src="bizinsider.png" alt="biz-insider-logo" />
      {/* Render an image with class "press-logo", source "mashable.png", and alt text "mashable-logo" */}
      <img className="press-logo" src="mashable.png" alt="mashable-logo" />
    </section>
  );
};

// Export the Brand component as the default export of this file
export default Brand;
