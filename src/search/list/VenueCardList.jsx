import React, {Component} from "react";
import "./venue-card-list.scss";
import propTypes from "prop-types";

class VenueCardList extends Component {
  static propTypes = {
      venues:propTypes.array.isRequired
  };
  constructor(props) {
    super(props);
  }

  handleSelectVenue = (venue) => {
    console.log(`selectVenue${JSON.stringify(venue)}`);
  };

  priceBar = (i) => {
    const priceBars = [];
    let counter = 1;

    for (counter = 1; counter <= i; counter++) {
      const data = `venue-card-price-bar${counter}`;

      priceBars.push(<span key={data.toString()} className={data}></span>);
    }
    return (
      priceBars
    );
  };

  render() {
    const venues = this.props.venues;
    return (
      <div className="venues">
        {venues.length !== 0 ?
          (<ul className="venue-card-list">
            {venues.map((cv, i) => (
              <li key={venues[i].venue.id} className="venue-card-list-item" >
                <a onClick={(e) => { e.preventDefault() & this.handleSelectVenue(cv)}} href="#">
                  <div>
                    <div className="venue-card">
                      <img className="venue-card-backgroundImage" src={
                        venues[i].venue.photos.count !== 0 ?
                          `${venues[i].venue.photos.groups[0].items[0].prefix}${venues[i].venue.photos.groups[0].items[0].width}x${venues[i].venue.photos.groups[0].items[0].height}${
                            venues[i].venue.photos.groups[0].items[0].suffix}` : ""}/>
                      <div className="venue-card-detail">
                        <h1 className="venue-card-name">
                          {venues[i].venue.name}
                        </h1>
                        <div className="venue-card-hereNow">
                          <img className="venue-card-hereNow-icon" src={require("../../../img/ic-01.png")}/>
                          <span className="venue-card-hereNow-count">{venues[i].venue.hereNow.count}</span>
                        </div>
                        <div className="venue-card-price">
                          <img className="venue-card-price-icon" src={require("../../../img/ic-02.png")}/>
                          <div className="venue-card-price-bar">
                            {venues[i].venue.price !== undefined ? this.priceBar(`${venues[i].venue.price.tier}`) : this.priceBar(0)}
                          </div>
                        </div>
                      </div>
                      <div className="venue-card-rate">
                        <span className="venue-card-rate-value">
                          {venues[i].venue.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                </a>
              </li>
            ))}
          </ul>
          ) : <h1 className="venue-card-list-error-msg">No Result</h1>}
      </div>
    );
  }
}

export default VenueCardList;
