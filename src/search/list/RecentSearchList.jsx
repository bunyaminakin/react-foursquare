import React, {Component} from "react";
import "./recent-search-list.scss";

class RecentSearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentSearch: []
    };
  }


  render() {
    const recentSearchHeader = "RECENT SEARCH";

    return (
      <div className="recent-search">
        <h3 className="recent-search-header">{recentSearchHeader}</h3>
        <ul className="recent-search-items">
          {this.props.recentSearch.map((cv, i) => (
            <li key={this.props.recentSearch[i] + i.toString()} className="recent-search-item">
              <a href="" className="recent-search-item-link">
                {this.props.recentSearch[i]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RecentSearchList;

