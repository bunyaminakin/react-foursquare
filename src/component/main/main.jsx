import React, {Component} from "react";
import SearchPage from "../../search/page/SearchPage.jsx";
import "./main.scss";
import Intro from "./intro.jsx";
import Footer from "./footer.jsx";

class Main extends Component {
  render() {
    return (
      <div>
        <SearchPage/>
      </div>
    );
  }
}

export default Main;
