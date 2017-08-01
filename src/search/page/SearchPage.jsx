import React, {Component} from "react";
import SearchForm from "../form/SearchForm.jsx";
import Footer from "../../component/main/footer.jsx";
import VenueCardList from "../list/VenueCardList.jsx";
import RecentSearchList from "../list/RecentSearchList.jsx";
import superagent from "superagent";
import "./search-page.scss";
import propTypes from 'prop-types';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: null,
      recentSearch: []
    };
  }
  handleFormSubmit = (query, location) => {
    this.setState({
      query,
      location
    }, function (err, response) {
      if (err) {
        console.log("ERROR!");
      } else {
        this.getVenues();
        this.updateRecentSearch();
      }
    });
  };

  updateRecentSearch = () => {
    const recentSearchLimit = 10;

    if (this.state.query !== "" && this.state.location !== "") {
      if (this.state.recentSearch.length < recentSearchLimit) {
        this.state.recentSearch.unshift([`${this.state.query}`, `${this.state.location}`]);
      } else {
        this.state.recentSearch.shift();
        this.state.recentSearch.unshift([`${this.state.query}`, `${this.state.location}`]);
      }
    }
    const uniques = [];
    const itemsFound = {};

    for (let i = 0; i < this.state.recentSearch.length; i++) {
      const stringified = JSON.stringify(this.state.recentSearch[i]);

      if (itemsFound[stringified]) {
        continue;
      }
      uniques.push(this.state.recentSearch[i]);
      itemsFound[stringified] = true;
    }
    this.setState({
      recentSearch: uniques
    });
  };

  getVenues = () => {
    const url = "https://api.foursquare.com/v2/venues/explore";

    const params = {
      v: "24072017",
      venuePhotos: "1",
      limit: "10",
      near: this.state.location,
      query: this.state.query,
      client_id: "V131V0IPODZOAI4DH0TXB0W1VF4R1QCAHASGHJI35D3KJLWK",
      client_secret: "L5RZFRA1K2KPH33H12BFD3MECOJKEBIJSLP14KXYRYW3A5AF"
    };

    superagent
      .get(url)
      .query(params)
      .set("Accept", "application/json")
      .then((data) => {
        this.setState({
          venues: data.body.response.groups[0].items
        });
      }, (err) => {
        console.log(`OPS ${err.message}`);
        this.setState({
          venues: []
        });
      });
  };

  render() {
    return (
      <div className="search-page">
        <div className="search-page-form">
          <SearchForm onSubmit={this.handleFormSubmit}/>
        </div>
        <div className="search-page-lists">
          <div className="search-page-venue-card-list">
            {this.state.venues !== null  ? <VenueCardList venues={this.state.venues}/> : ""}
          </div>
          <div className="search-page-recent-search-list">
            <RecentSearchList recentSearch={this.state.recentSearch} newSearch={this.handleFormSubmit}/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default SearchPage;
