import React, {Component} from "react";
import PropTypes from "prop-types";

import "./venue-photo-list.scss";

class VenuePhotoList extends Component {
  static PropTypes = {
    photoList: PropTypes.array.isRequired
  };

  render() {
    const {photoList} = this.props;

    return (
      <div className="venue-photo-list">
        <div className="venues-cards">
          <ul className="venue-photo-card-list">
            {
                photoList && (
                    photoList.map((photo, index) => (
                      <li key={photo.id} className="venue-photo-card-list-item">
                        <div className="venue-photo-card">
                          <img className="venue-photo-card-background-image" src={
                                  `${photo.prefix}400x400${photo.suffix}`
                              }
                          alt="Venue Background Photo"
                          />
                          <div className="venue-photo-uplader">
                            <img className="venue-photo-uploader-image" src={
                                    `${photo.user.photo.prefix}100x100${
                                        photo.user.photo.suffix}`
                                }
                            alt="User Photo"
                            />
                          </div>
                          <span className="venue-photo-uploader-name">
                            {`${photo.user.firstName} ${photo.user.lastName}`}
                          </span>
                        </div>
                      </li>
                      )
                    )
                )
              }
          </ul>
        </div>
      </div>
    );
  }
}

export default VenuePhotoList;
