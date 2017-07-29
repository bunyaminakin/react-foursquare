import React, {Component} from "react";
import "./footer.scss";

class Footer extends Component {
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
