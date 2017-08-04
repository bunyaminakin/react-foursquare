import React, {Component} from "react";
import "./venue-card-list.scss";
import PropTypes from "prop-types";
import VenueCard from "./VenueCard.jsx";

class VenueCardList extends Component {
  static PropTypes = {
    venues: PropTypes.array.isRequired
  };

  handleSelectVenue = (venue) => {
    console.log(venue);
  };

  render() {
    const [venues] = [this.props.venues];

    return (
      <div className="venues">
        {
            Boolean(venues.length) === !0 ? (<ul className="venue-card-list">
              {venues.map((cv, i) => (
                <li key={venues[i].venue.id} className="venue-card-list-item" >
                  <VenueCard venues={venues[i]} onClick={this.handleSelectVenue}/>
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
