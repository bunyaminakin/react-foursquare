import React, {Component} from "react";
import "./intro.scss";
import PropTypes from "prop-types";

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <img className="intro-logo" src={require("../../../img/logo.png")}/>
        <h1 className="intro-title">{this.props.title}</h1>
        <p className="intro-description">{this.props.description}</p>
      </div>
    );
  }
}

Intro.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Intro;
