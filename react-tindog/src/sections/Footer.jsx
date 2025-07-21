import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  // The Footer functional component returns the JSX for the footer section
  return (
    // The <footer> element represents the footer of the page
    <footer id="footer">
      {/* Facebook icon link */}
      <a href="#" className="social-icons">
        {/* Renders the Facebook Square icon from react-icons */}
        <FaFacebookSquare />
      </a>
      {/* Instagram icon link */}
      <a href="#" className="social-icons">
        {/* Renders the Instagram icon from react-icons */}
        <FaInstagram />
      </a>
      {/* LinkedIn icon link */}
      <a href="#" className="social-icons">
        {/* Renders the LinkedIn icon from react-icons */}
        <FaLinkedin />
      </a>
      {/* YouTube icon link */}
      <a href="#" className="social-icons">
        {/* Renders the YouTube Square icon from react-icons */}
        <FaYoutubeSquare />
      </a>
      {/* Copyright text */}
      <p>© Copyright 2018 DogGram</p>
    </footer>
  );
};

export default Footer;
