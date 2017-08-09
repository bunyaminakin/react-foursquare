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
    this.props.onClick(venue.id);
  };

  render() {
    const {venue} = this.props;

    return (
      <div className="venues">
        {
            venue.length > 0 ? (<ul className="venue-card-list">
              {venue.map((venueValue, index) => (
                <li key={venue[index].referralId}
                    className="venue-card-list-item" >
                  <VenueCard venues={venue[index]}
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
