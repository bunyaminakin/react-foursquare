import React, {Component} from "react";

class VenuePhotoList extends Component {
  render() {
    return (
      <div className="venue-photo-list">
        <ul className="venue-photo-card-list">
          <li className="venue-photo-card">
            <img className="venue-photo-card-background-image"/>
            <div className="venue-photo-uplader">
              <img className="venue-photo-uploader-image"/>
              <span className="venue-photo-uploader-name">
                  Cem Ekici
              </span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default VenuePhotoList;
