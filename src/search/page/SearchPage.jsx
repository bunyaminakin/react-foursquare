import React, {Component} from "react";
import SearchForm from "../form/SearchForm.jsx";
import Footer from "../../component/main/footer.jsx";
import VenueCardList from "../list/VenueCardList.jsx";
import RecentSearchList from "../list/RecentSearchList.jsx";
import superagent from "superagent";
import "./search-page.scss";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      recentSearch: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.getVenues = this.getVenues.bind(this);
    this.updateRecentSearch = this.updateRecentSearch.bind(this);
  }
  handleFormSubmit(query, location) {
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
  }

  updateRecentSearch() {
    const recentSearchLimit = 10;

    if (this.state.query !== "" && this.state.location !== "") {
      if (this.state.recentSearch.length < recentSearchLimit) {
        this.state.recentSearch.push(`${this.state.query} in ${this.state.location}`);
      } else {
        this.state.recentSearch.shift();
        this.state.recentSearch.push(`${this.state.query} in ${this.state.location}`);
      }
    }
  }
  getVenues() {
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
      });
  }

  render() {
    return (
      <div className="search-page">
        <div className="search-page-form">
          <SearchForm onSubmit={this.handleFormSubmit}/>
        </div>
        <div className="search-page-lists">
          <div className="search-page-venue-card-list">
            <VenueCardList venues={this.state.venues}/>
          </div>
          <div className="search-page-recent-search-list">
            <RecentSearchList recentSearch={this.state.recentSearch}/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default SearchPage;