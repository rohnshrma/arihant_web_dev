const Title = () => {
  return (
    <section id="title">
      <div className="container-fluid">
        {/* <!-- Nav Bar --> */}
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#">
            DogGram
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  Download
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cta">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* <!-- Title --> */}

        <div className="row">
          <div className="col-lg-6">
            <h1>Meet new and interesting dogs nearby.</h1>
            <button
              className="btn btn-dark btn-lg download-button"
              type="button"
            >
              <i className="fab fa-apple"></i> Download
            </button>
            <button
              className="btn btn-outline-light btn-lg download-button"
              type="button"
            >
              <i className="fab fa-google-play"></i> Download
            </button>
          </div>
          <div className="col-lg-6">
            <img className="brand-img" src="iphone6.png" alt="iphone-mockup" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Title;
