import React, {Component} from "react";
import "./recent-search-list.scss";
import propTypes from "prop-types";

class RecentSearchList extends Component {
  static propTypes = {
      recentSearch:propTypes.array.isRequired
  };
  constructor(props) {
    super(props);
  }

  newSearch = (query, location) => {
    this.setState({
      query,
      location
    }, () => {
      this.props.newSearch(this.state.query, this.state.location);
    });
  };

  render() {
    const recentSearchHeader = "RECENT SEARCH";
    const recentSearch = this.props.recentSearch;
    return (
      <div className="recent-search">
        <h3 className="recent-search-header">{recentSearchHeader}</h3>
        <ul className="recent-search-items">
          {recentSearch.map((cv, i) => (
            <li key={recentSearch[i] + i.toString()} className="recent-search-item">
              <a href="" onClick={e => (e.preventDefault() & this.newSearch(recentSearch[i][0], recentSearch[i][1]))} className="recent-search-item-link">
                {`${recentSearch[i][0]} in ${recentSearch[i][1]}`}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RecentSearchList;

