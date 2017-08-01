import React, {Component} from "react";
import "./footer.scss";
import propTypes from 'prop-types';

class Footer extends Component {
  static defaultProps = {
    aboutUs: "About Us",
    contact: "Contact",
    blog: "Blog"
  };
  static propTypes = {
      aboutUs: propTypes.string.isRequired,
      contact: propTypes.string.isRequired,
      blog: propTypes.string.isRequired
  }
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
