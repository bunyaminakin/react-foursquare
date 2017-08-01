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
  }

  onSubmit = (query, location) => {
    this.setState({
        query:query,
        location:location
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query, this.state.location);
  };

  handleChangeQuerySearchFilter = (e) => {
      const search = Object.assign({}, this.state.search);
      search["query"] = e.target.value;
      this.setState({
          query: search["query"]
      });
  };

  handleChangeLocationSearchFilter = (e) => {
      const search = Object.assign({}, this.state.search);
      search["location"] = e.target.value;
      this.setState({
          location: search["location"]
      });
  };

  render() {
    return (
      <div className="search-form-header">
        <img className="logo" src={require("../../../img/logo-2@2x.png")}/>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input onChange={this.handleChangeQuerySearchFilter}
            type="text" placeholder="I'am looking for"
            className="search-form-query-bar"/>
          <input onChange={this.handleChangeLocationSearchFilter}
            type="text" placeholder="Istanbul"
            className="search-form-location-bar"/>
          <button type="submit" className="submit-button"
            style={ {backgroundImage: `url(${require("../../../img/shape.png")})`} }>
          </button>
        </form>
      </div>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: propTypes.func.isRequired
};

export default SearchForm;
