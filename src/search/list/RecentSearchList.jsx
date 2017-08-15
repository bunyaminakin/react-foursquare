import React, {Component} from "react";

import PropTypes from "prop-types";

import RecentSearchItem from "./RecentSearchItem.jsx";

import "./recent-search-list.scss";

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
    const {recentSearch} = this.props;

    return (
      <div className="recent-search">
        <h3 className="recent-search-header">{"RECENT SEARCH"}</h3>
        <ul className="recent-search-items">
          {recentSearch.map((recentSearchValue, index) => (
            <li key={recentSearch[index] + index.toString()}
                className="recent-search-item">
              <RecentSearchItem recentSearch={recentSearch[index]}
                                onClick={this.handleSelectSearch}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RecentSearchList;

