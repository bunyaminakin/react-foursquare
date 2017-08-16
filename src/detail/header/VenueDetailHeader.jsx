import React, {Component} from "react";
import PropTypes from "prop-types";
import "./venue-detail-header.scss";

import logo from "../../../img/logo.png";
import category from "../../../img/category.png";
import locationIcon from "../../../img/combined-shape.png";
import phoneIcon from "../../../img/shape.png";
import hereNowIcon from "../../../img/ic-01.png";
import priceIcon from "../../../img/ic-02.png";

class VenueDetailHeader extends Component {
  static PropTypes = {
    imageSourceGeneration: PropTypes.func.isRequired,
    renderPriceBar: PropTypes.func.isRequired,
    detail: PropTypes.array.isRequired
  };

  imageSourceGeneration = (source) => {
    const SourceValue = source.bestPhoto;
    const imgSrc = `${SourceValue.prefix}${SourceValue.width}x${SourceValue.height}${SourceValue.suffix}`;

    return (
        imgSrc
    );
  };

  renderPriceBar = (i) => {
    const priceBars = [];

    for (let counter = 1; counter <= i; counter++) {
      const data = `detail-header-price-bar${counter}`;

      priceBars.push(<span key={data} className={data}></span>);
    }
    return (
        priceBars
    );
  };

  render() {
    const {details} = this.props;

    return (
      <div className="detail-header">
        {
            details && (
            <div>
              <img className="detail-header-logo-image" src={logo} alt="Logo"/>
              <img className="detail-header-category-image" src={category} alt="Category"/>
              <div className="detail-header-background">
                <img className="detail-header-background-image"
                     src={this.imageSourceGeneration(details)}
                alt="Background"/>
              </div>
              <h1 className="detail-header-venue-name">
                {details.name}
              </h1>
              <div className="detail-header-venue-details">
                <div className="detail-header-venue-address">
                  <img className="detail-header-venue-address-logo"
                       src={locationIcon}
                    alt="Location"/>
                  <span className="detail-header-venue-address-text">
                    {details.location.address}
                  </span>
                </div>
                <div className="detail-header-venue-phone">
                  <img className="detail-header-venue-phone-logo"
                       src={phoneIcon}
                    alt="Phone"/>
                  <span className="detail-header-venue-phone-text">
                    {details.contact.phone}
                  </span>
                </div>
                <div className="detail-header-venue-hereNow-count">
                  <img className="detail-header-venue-hereNow-count-logo"
                       src={hereNowIcon}
                    alt="Here Now Count"/>
                  <span className="detail-header-venue-hereNow-count-text">
                    {details.beenHere.count}
                  </span>
                </div>
                <div className="detail-header-venue-price">
                  <img className="detail-header-venue-price-logo"
                       src={priceIcon}
                    alt="Price"/>
                  <div className="detail-header-price-bar">
                    { details.price.tier === undefined ? this.renderPriceBars(0) : this.renderPriceBar(`${details.price.tier}`)}
                  </div>
                </div>
                <div className="detail-header-venue-rating">
                  <span className="detail-header-venue-rating-text">
                    {details.rating}
                  </span>
                </div>
              </div>
            </div>
            )
        }
      </div>
    );
  }
}

export default VenueDetailHeader;
