import React, {Component} from "react";
import "./intro.scss";

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

export default Intro;
