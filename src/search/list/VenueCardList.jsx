import React, {Component} from "react";

import PropTypes from "prop-types";

import VenueCard from "./VenueCard.jsx";

import "./venue-card-list.scss";

class VenueCardList extends Component {
  static PropTypes = {
    venues: PropTypes.array.isRequired
  };

  handleSelectVenue = (venue) => {
    console.log(venue);
  };

  render() {
    const {venues} = this.props;

    return (
      <div className="venues">
        {
            Boolean(venues.length) === !0 ? (<ul className="venue-card-list">
              {venues.map((currentValue, index) => (
                <li key={venues[index].referralId}
                    className="venue-card-list-item" >
                  <VenueCard venues={venues[index]}
                             onClick={this.handleSelectVenue}/>
                </li>
                  ))
                }
            </ul>) : <h1 className="venue-card-list-error-msg"> {"No Results"} </h1>
        }
      </div>
    );
  }
}

export default VenueCardList;
