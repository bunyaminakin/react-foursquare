import React, {Component} from "react";
import "./detail-header.scss";
import logo from "../../../img/logo.png";
import category from "../../../img/category.png";
import locationIcon from "../../../img/combined-shape.png";
import phoneIcon from "../../../img/shape.png";
import hereNowIcon from "../../../img/ic-01.png";
import priceIcon from "../../../img/ic-02.png";

class DetailHeader extends Component {
  imageSourceGeneration = (source) => {
    const SourceValue = source.bestPhoto;
    const imgSrc = [];

    imgSrc.push(SourceValue.prefix, SourceValue.width, "x", SourceValue.height, SourceValue.suffix);
    return (
        imgSrc.join("").toString()
    );
  };

  renderPriceBar = (i) => {
    const priceBars = [];

    for (let counter = 1; counter <= i; counter++) {
      const data = `detail-header-price-bar${counter}`;

      priceBars.push(<span key={data.toString()} className={data}></span>);
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
              <img className="detail-header-logo-image" src={logo}/>
              <img className="detail-header-category-image" src={category}/>
              <div className="detail-header-background">
                <img className="detail-header-background-image" src={this.imageSourceGeneration(details)}/>
              </div>
              <h1 className="detail-header-venue-name">
                {details.name}
              </h1>
              <div className="detail-header-venue-details">
                <div className="detail-header-venue-address">
                  <img className="detail-header-venue-address-logo" src={locationIcon}/>
                  <span className="detail-header-venue-address-text">
                    {details.location.address}
                  </span>
                </div>
                <div className="detail-header-venue-phone">
                  <img className="detail-header-venue-phone-logo" src={phoneIcon}/>
                  <span className="detail-header-venue-phone-text">
                    {details.contact.phone}
                  </span>
                </div>
                <div className="detail-header-venue-hereNow-count">
                  <img className="detail-header-venue-hereNow-count-logo" src={hereNowIcon}/>
                  <span className="detail-header-venue-hereNow-count-text">
                    {details.beenHere.count}
                  </span>
                </div>
                <div className="detail-header-venue-price">
                  <img className="detail-header-venue-price-logo" src={priceIcon}/>
                  <div className="detail-header-price-bar">
                    {this.renderPriceBar(`${details.price.tier}`)}
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

export default DetailHeader;
