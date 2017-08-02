import React, {Component} from "react";

class DetailHeader extends Component {
  render() {
    return (
      <div className="detail-header">
        <img className="detail-header-logo-image"/>
        <img className="detail-header-category-image"/>
        <img className="detail-header-background-image"/>
        <h1 className="detail-header-venue-name">Name of Cafe</h1>
        <div className="detail-header-venue-details">
          <div className="detail-header-venue-address">
            <img className="detail-header-venue-address-logo" src="" />
            <span className="detail-header-venue-address-text">
                Caferağa Mh. Kadife Sk. No:15 Kadıköy
            </span>
          </div>
          <div className="detail-header-venue-phone">
            <img className="detail-header-venue-phone-logo" src="" />
            <span className="detail-header-venue-phone-text">
                0 (216) 345 67 78
            </span>
          </div>
          <div className="detail-header-venue-hereNow-count">
            <img className="detail-header-venue-hereNow-count-logo" src="" />
            <span className="detail-header-venue-hereNow-count-text">
                123
            </span>
          </div>
          <div className="detail-header-venue-price">
            <img className="detail-header-venue-price-logo" src="" />
            <span>-</span>
            <span>-</span>
            <span>-</span>
            <span>-</span>
          </div>
          <div className="detail-header-venue-rating">
            <span className="detail-header-venue-rating-text">
                8.8
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailHeader;
