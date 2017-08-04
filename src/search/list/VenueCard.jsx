import React, {Component} from "react";
import hereNowIcon from "../../../img/ic-01.png";
import priceIcon from "../../../img/ic-02.png";

class VenueCard extends Component {
  priceBar = (value) => {
    const priceBars = [];
    let counter = 1;

    for (counter = 1; counter <= value; counter++) {
      const data = `venue-card-price-bar${counter}`;

      priceBars.push(<span key={data.toString()} className={data}></span>);
    }
    return (
            priceBars
    );
  };


  handleClick = (e) => {
    e.preventDefault();
    this.props.onClick(this.props.venues.venue);
  };

  render() {
    const [venues] = [this.props.venues];

    return (
      <div className="venue-card" onClick={this.handleClick}>
        <img className="venue-card-backgroundImage"
             src={
               Boolean(venues.venue.photos.count) === !0 ? (`${venues.venue.photos.groups[0].items[0].prefix}${venues.venue.photos.groups[0].items[0].width}x${venues.venue.photos.groups[0].items[0].height}${venues.venue.photos.groups[0].items[0].suffix}`) : ""}/>
        <div className="venue-card-detail">
          <h1 className="venue-card-name">
            {venues.venue.name}
          </h1>
          <div className="venue-card-hereNow">
            <img className="venue-card-hereNow-icon" src={hereNowIcon}/>
            <span className="venue-card-hereNow-count">{venues.venue.hereNow.count}</span>
          </div>
          <div className="venue-card-price">
            <img className="venue-card-price-icon" src={priceIcon}/>
            <div className="venue-card-price-bar">
              {Boolean(venues.venue.price) === !0 ? (this.priceBar(`${venues.venue.price.tier}`)) : this.priceBar(0)}
            </div>
          </div>
        </div>
        <div className="venue-card-rate">
          <span className="venue-card-rate-value">
            {venues.venue.rating}
          </span>
        </div>
      </div>
    );
  }
}

export default VenueCard;
