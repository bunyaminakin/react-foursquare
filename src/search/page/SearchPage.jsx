import React, {Component} from "react";
import superagent from "superagent";
import PropTypes from "prop-types";

import SearchForm from "../form/SearchForm.jsx";
import VenueCardList from "../list/VenueCardList.jsx";
import RecentSearchList from "../list/RecentSearchList.jsx";
import Footer from "../../component/main/Footer.jsx";

import "./search-page.scss";

const apiParams = {
  client_id: "V131V0IPODZOAI4DH0TXB0W1VF4R1QCAHASGHJI35D3KJLWK",
  client_secret: "L5RZFRA1K2KPH33H12BFD3MECOJKEBIJSLP14KXYRYW3A5AF",
  v: "24072017"
};

class SearchPage extends Component {
  static PropTypes = {
    venues: PropTypes.array.isRequired,
    recentSearch: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      venues: null,
      recentSearch: [],
      id: ""
    };
  }

  componentDidMount() {
    const {query, location} = this.props.match.params;

    if (query && location) {
      this.getVenues(query, location);
      this.updateRecentSearch(query, location);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.query !== this.props.match.params.query ||
        nextProps.match.params.location !== this.props.match.params.location) {
      this.getVenues(nextProps.match.params.query, nextProps.match.params.location);
      this.updateRecentSearch(nextProps.match.params.query, nextProps.match.params.location);
    }
  }

  handleFormSubmit = (query, location) => {
    if (query && location) {
      this.props.history.push(`/query=${query}&location=${location}`);
    }
  };

  updateRecentSearch = (query, location) => {
    const recentSearchLimit = 10;

    if (query !== "" && location !== "") {
      if (this.state.recentSearch.length < recentSearchLimit) {
        this.state.recentSearch.unshift([`${query}`, `${location}`]);
      } else {
        this.state.recentSearch.shift();
        this.state.recentSearch.unshift([`${query}`, `${location}`]);
      }
    }
    const uniques = [];
    const itemsFound = {};

    for (let i = 0; i < this.state.recentSearch.length; i++) {
      const stringified = JSON.stringify(this.state.recentSearch[i]);

      if (!itemsFound[stringified]) {
        uniques.push(this.state.recentSearch[i]);
        itemsFound[stringified] = true;
      }
    }
    this.setState({
      recentSearch: uniques
    });
  };

  getVenues = (query, location) => {
    const url = "https://api.foursquare.com/v2/venues/explore";

    const params = {
      venuePhotos: "1",
      limit: "10",
      near: location,
      query,
      client_id: apiParams.client_id,
      client_secret: apiParams.client_secret,
      v: apiParams.v
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
    const {query, location} = this.props.match.params;

    return (
      <div>
        <div className="search-page">
          <div className="search-page-form-container">
            <SearchForm onSubmit={this.handleFormSubmit}
                        query={query}
                        location={location}/>
          </div>
          <div className="search-page-lists">
            <div className="search-page-venue-card-list">
              {
              this.state.venues && <VenueCardList venue={this.state.venues}/>
            }
            </div>
            <div className="search-page-recent-search-list">
              <RecentSearchList recentSearch={this.state.recentSearch}
                              onClick={this.handleFormSubmit}/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default SearchPage;
