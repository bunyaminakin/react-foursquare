import React, {Component} from "react";
import "./venue-card-list.scss";
import propTypes from "prop-types";

class VenueCardList extends Component {
  constructor(props) {
    super(props);
  }
  selectVenue = (venue, event) => {
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
    return (
      <div className="venues">
        {this.props.venues.length !== 0 ?
          (<ul className="venue-card-list">
            {this.props.venues.map((cv, i) => (
              <li key={this.props.venues[i].venue.id} className="venue-card-list-item" >
                <a onClick={this.selectVenue.bind(this, cv)} href="#">
                  <div>
                    <div className="venue-card">
                      <img className="venue-card-backgroundImage" src={
                        this.props.venues[i].venue.photos.count !== 0 ?
                          `${this.props.venues[i].venue.photos.groups[0].items[0].prefix}${this.props.venues[i].venue.photos.groups[0].items[0].width}x${this.props.venues[i].venue.photos.groups[0].items[0].height}${
                            this.props.venues[i].venue.photos.groups[0].items[0].suffix}` : ""}/>
                      <div className="venue-card-detail">
                        <h1 className="venue-card-name">
                          {this.props.venues[i].venue.name}
                        </h1>
                        <div className="venue-card-hereNow">
                          <i className="venue-card-hereNow-icon">
                            {"A"}
                          </i>
                          <span className="venue-card-hereNow-count">{this.props.venues[i].venue.hereNow.count}</span>
                        </div>
                        <div className="venue-card-price">
                          <i className="venue-card-price-icon">
                            {"A"}
                          </i>
                          <div className="venue-card-price-bar">
                            {this.props.venues[i].venue.price !== undefined ? this.priceBar(`${this.props.venues[i].venue.price.tier}`) : this.priceBar(0)}
                          </div>
                        </div>
                      </div>
                      <div className="venue-card-rate">
                        <span className="venue-card-rate-value">
                          {this.props.venues[i].venue.rating}
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

VenueCardList.propTypes = {
  venues: propTypes.array.isRequired
};

export default VenueCardList;
