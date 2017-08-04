import React, {Component} from "react";
import "./footer.scss";
import PropTypes from "prop-types";

class Footer extends Component {
  static PropTypes = {
    aboutUs: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    blog: PropTypes.string.isRequired
  };
  static defaultProps = {
    aboutUs: "About Us",
    contact: "Contact",
    blog: "Blog"
  };
  render() {
    const aboutUS = "About Us";
    const contact = "Contact";
    const blog = "Blog";

    return (
      <div className="footer">
        <div className="footer-links">
          <a className="footer-link">{aboutUS} </a>
          <a className="footer-link">{contact} </a>
          <a className="footer-link">{blog} </a>
        </div>
      </div>
    );
  }
}

export default Footer;
