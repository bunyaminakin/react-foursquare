import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import SearchPage from "../../search/page/SearchPage.jsx";
import VenueDetailPage from "../../detail/page/VenueDetailPage.jsx";

import "./main.scss";

class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={SearchPage}/>
          <Route path="/query=:query?&location=:location?" component={SearchPage}/>
          <Route path="/detail&id=:id" component={VenueDetailPage}/>
        </div>
      </Router>
    );
  }
}

export default Main;
