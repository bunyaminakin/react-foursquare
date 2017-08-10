import React, {Component} from "react";

import hereNowIcon from "../../../img/ic-01.png";
import priceIcon from "../../../img/ic-02.png";

class VenueCard extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.onClick(this.props.venues.venue);
  };

  imageSourceGeneration = (source) => {
    const SourceValue = source.venue.photos.groups[0].items[0];
    const imgSrc = `${SourceValue.prefix}${SourceValue.width}x${SourceValue.height}${SourceValue.suffix}`;

    return (
        imgSrc
    );
  };

  renderPriceBars = (value) => {
    const priceBars = [];

    for (let counter = 1; counter <= value; counter++) {
      const data = `venue-card-price-bar${counter}`;

      priceBars.push(<span key={data.toString()} className={data}></span>);
    }
    return (
            priceBars
    );
  };


  render() {
    const {venues} = this.props;

    return (
      <div className="venue-card"
           onClick={this.handleClick}>
        <img className="venue-card-background-image"
             src={
               venues.venue.photos.count > 0 ? (this.imageSourceGeneration(venues)) : ""}
              alt="Venue Image"
        />
        <div className="venue-card-detail">
          <h1 className="venue-card-name">
            {venues.venue.name}
          </h1>
          <div className="venue-card-here-now">
            <img className="venue-card-here-now-icon"
                 src={hereNowIcon}
                 alt="Here Been Icon"/>
            <span className="venue-card-here-now-count">
              {venues.venue.hereNow.count}
            </span>
          </div>
          <div className="venue-card-price">
            <img className="venue-card-price-icon"
                 src={priceIcon}
                 alt="Price Icon"/>
            <div className="venue-card-price-bar">
              {venues.venue.price === undefined ? this.renderPriceBars(0) : (this.renderPriceBars(`${venues.venue.price.tier}`))}
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
