import React, {Component} from "react";
import PropTypes from "prop-types";

import "./intro.scss";

import logo from "../../../img/logo.png";

class Intro extends Component {
  static PropTypes = {
    title: PropTypes.string,
    description: PropTypes.string
  };

  static defaultProps = {
    title: "",
    description: ""
  };
  render() {
    return (
      <div className="intro">
        <img className="intro-logo"
             src={logo}
             alt="app-logo"/>
        <h1 className="intro-title">{this.props.title}</h1>
        <p className="intro-description">{this.props.description}</p>
      </div>
    );
  }
}

export default Intro;
