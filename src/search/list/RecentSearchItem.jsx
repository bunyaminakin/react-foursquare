import React, {Component} from "react";

class RecentSearchItem extends Component {


  handleClick = (e) => {
    e.preventDefault();
    this.props.onClick(this.props.recentSearch[0], this.props.recentSearch[1]);
  };

  render() {
    return (
      <a href="" onClick={this.handleClick} className="recent-search-item-link">
        {`${this.props.recentSearch[0]} in ${this.props.recentSearch[1]}`}
      </a>
    );
  }
}

export default RecentSearchItem;
