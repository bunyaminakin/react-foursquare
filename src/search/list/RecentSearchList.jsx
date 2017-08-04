import React, {Component} from "react";
import "./recent-search-list.scss";
import PropTypes from "prop-types";
import RecentSearchItem from "./RecentSearchItem.jsx";

class RecentSearchList extends Component {
  static PropTypes = {
    recentSearch: PropTypes.array.isRequired
  };

  handleSelectSearch = (query, location) => {
    this.setState({
      query,
      location
    });
    this.props.onClick(query, location);
  };


  render() {
    const recentSearchHeader = "RECENT SEARCH";
    const [recentSearch] = [this.props.recentSearch];

    return (
      <div className="recent-search">
        <h3 className="recent-search-header">{recentSearchHeader}</h3>
        <ul className="recent-search-items">
          {recentSearch.map((cv, i) => (
            <li key={recentSearch[i] + i.toString()} className="recent-search-item">
              <RecentSearchItem recentSearch={recentSearch[i]} onClick={this.handleSelectSearch}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RecentSearchList;

