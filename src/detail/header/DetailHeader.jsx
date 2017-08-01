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
            <i className="detail-header-venue-address-logo">
                A
            </i>
            <span className="detail-header-venue-address-text">
                Caferağa Mh. Kadife Sk. No:15 Kadıköy
            </span>
          </div>
          <div className="detail-header-venue-phone">
            <i className="detail-header-venue-phone-logo">
                A
            </i>
            <span className="detail-header-venue-phone-text">
                0 (216) 345 67 78
            </span>
          </div>
          <div className="detail-header-venue-hereNow-count">
            <i className="detail-header-venue-hereNow-count-logo">
                A
            </i>
            <span className="detail-header-venue-hereNow-count-text">
                123
            </span>
          </div>
          <div className="detail-header-venue-price">
            <i className="detail-header-venue-price-logo">
                A
            </i>
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
