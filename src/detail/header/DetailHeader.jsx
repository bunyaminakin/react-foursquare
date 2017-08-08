import React, {Component} from "react";
import "./detail-header.scss";
import logo from "../../../img/logo.png";
import category from "../../../img/category.png";
import combinedShape from "../../../img/combined-shape.png";
import shape from "../../../img/shape.png";
import ic01 from "../../../img/ic-01.png";
import ic02 from "../../../img/ic-02.png";

class DetailHeader extends Component {
  constructor(props){
    super(props);
  }
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

  imageSourceGeneration = (source) => {
    const SourceValue = source.bestPhoto;
    const imgSrc = [];

    imgSrc.push(SourceValue.prefix, SourceValue.width, "x", SourceValue.height, SourceValue.suffix);
    return (
            imgSrc.join("").toString()
    );
  };

  render() {
    const {venueDetails} = this.props;

    return (
      <div className="detail-header">
        {
            venueDetails && (
            <div>
              <img className="detail-header-logo-image" src={logo}/>
              <img className="detail-header-category-image" src={category}/>
              <div className="detail-header-background">
                <img className="detail-header-background-image" src={this.imageSourceGeneration(venueDetails)}/>
              </div>
              <h1 className="detail-header-venue-name">
                {venueDetails.name}
              </h1>
              <div className="detail-header-venue-details">
                <div className="detail-header-venue-address">
                  <img className="detail-header-venue-address-logo" src={combinedShape}/>
                  <span className="detail-header-venue-address-text">
                    {venueDetails.location.address}
                  </span>
                </div>
                <div className="detail-header-venue-phone">
                  <img className="detail-header-venue-phone-logo" src={shape}/>
                  <span className="detail-header-venue-phone-text">
                    {venueDetails.contact.phone}
                  </span>
                </div>
                <div className="detail-header-venue-hereNow-count">
                  <img className="detail-header-venue-hereNow-count-logo" src={ic01}/>
                  <span className="detail-header-venue-hereNow-count-text">
                    {venueDetails.beenHere.count}
                  </span>
                </div>
                <div className="detail-header-venue-price">
                  <img className="detail-header-venue-price-logo" src={ic02}/>
                  <div className="detail-header-price-bar">
                    {this.renderPriceBar(`${venueDetails.price.tier}`)}
                  </div>
                </div>
                <div className="detail-header-venue-rating">
                  <span className="detail-header-venue-rating-text">
                    {venueDetails.rating}
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
