import React, {Component} from "react";

import "./SearchForm.scss";

import logo from "../../../img/logo-2@2x.png";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: this.props.query,
      location: this.props.location
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query, this.state.location);
  };

  handleChangeQuerySearchFilter = (e) => {
    this.setState({
      query: e.target.value
    });
  };

  handleChangeLocationSearchFilter = (e) => {
    this.setState({
      location: e.target.value
    });
  };
  render() {
    return (
      <form className="search-form" type="submit" onSubmit={this.handleSubmit}>
        <img className="logo" src={logo} alt="Logo"/>
        <input onChange={this.handleChangeQuerySearchFilter}
               type="text"
               placeholder="I'am looking for"
               className="search-form-query-bar"/>
        <input onChange={this.handleChangeLocationSearchFilter}
                type="text"
                placeholder="Istanbul"
                className="search-form-location-bar"/>
        <button type="submit" className="submit-button">
        </button>
      </form>
    );
  }
}

export default SearchForm;
