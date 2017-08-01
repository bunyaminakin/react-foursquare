import React, {Component} from "react";
import "./SearchForm.scss";
import propTypes from "prop-types";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      location: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  updateSearchFilters(field, e) {
    const search = Object.assign({}, this.state.search);

    search[field] = e.target.value;

    if (field === "query") {
      this.setState({
        query: search[field]
      });
    } else {
      this.setState({
        location: search[field]
      });
    }
  }

  onSubmit(query, location) {
    this.state.query;
    this.state.location;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.query, this.state.location);
  }

  render() {
    return (
      <div className="search-form-header">
        <img className="logo" src={require("../../../img/logo-2@2x.png")}/>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input onChange={this.updateSearchFilters.bind(this, "query")}
            type="text" placeholder="I'am looking for"
            className="search-form-query-bar"/>
          <input onChange={this.updateSearchFilters.bind(this, "location")}
            type="text" placeholder="Istanbul"
            className="search-form-location-bar"/>
          <button type="submit" className="submit-button"
            style={ {
              backgroundImage: `url(${require("../../../img/shape.png")})`
            } }></button>
        </form>
      </div>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: propTypes.func.isRequired
};

export default SearchForm;
