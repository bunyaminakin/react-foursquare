import React, {Component} from "react";
import SearchPage from "../../search/page/SearchPage.jsx";
import "./main.scss";

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
