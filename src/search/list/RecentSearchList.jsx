import React, {Component} from "react";
import "./recent-search-list.scss";
import propTypes from "prop-types";

class RecentSearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentSearch: []
    };
    this.newSearch = this.newSearch.bind(this);
  }

  newSearch(query, location) {
    console.log(this);
    this.setState({
      query,
      location
    }, () => {
      this.props.newSearch(this.state.query, this.state.location);
    });
  }

  render() {
    const recentSearchHeader = "RECENT SEARCH";

    return (
      <div className="recent-search">
        <h3 className="recent-search-header">{recentSearchHeader}</h3>
        <ul className="recent-search-items">
          {this.props.recentSearch.map((cv, i) => (
            <li key={this.props.recentSearch[i] + i.toString()} className="recent-search-item">
              <a href="" onClick={e => (e.preventDefault(), this.newSearch(this.props.recentSearch[i][0], this.props.recentSearch[i][1]))} className="recent-search-item-link">
                {`${this.props.recentSearch[i][0]} in ${this.props.recentSearch[i][1]}`}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

RecentSearchList.propTypes = {
  newSearch: propTypes.func.isRequired
};

export default RecentSearchList;

