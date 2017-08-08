import React, {Component} from "react";
import SearchPage from "../../search/page/SearchPage.jsx";
import Footer from "./footer.jsx";
import "./main.scss";
import DetailPage from "../../detail/page/DetailPage.jsx";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
  }

  render() {
    return (
      <div>
        <SearchPage/>
      </div>
    );
  }
}

export default Main;
