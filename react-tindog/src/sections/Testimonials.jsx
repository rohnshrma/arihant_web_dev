const Testimonials = () => {
  return (
    <section id="testimonials">
      <div
        id="testimonial-carousel"
        className="carousel slide"
        data-ride="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h2>
              I no longer have to sniff other dogs for love. I've found the
              hottest Corgi on DogGram. Woof.
            </h2>
            <img
              className="testimonial-image"
              src="dog-img.jpg"
              alt="dog-profile"
            />
            <em>Pebbles, New York</em>
          </div>
          <div className="carousel-item">
            <h2 className="testimonial-text">
              My dog used to be so lonely, but with DogGram's help, they've
              found the love of their life. I think.
            </h2>
            <img
              className="testimonial-image"
              src="lady-img.jpg"
              alt="lady-profile"
            />
            <em>Beverly, Illinois</em>
          </div>
        </div>
        <a
          href="#testimonial-carousel"
          className="carousel-control-prev"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a
          href="#testimonial-carousel"
          className="carousel-control-next"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
