import React, {Component} from "react";
import SearchPage from "../../search/page/SearchPage.jsx";
import Footer from "./footer.jsx";
import "./main.scss";

class Main extends Component {
  render() {
    return (
      <div>
        <SearchPage/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
