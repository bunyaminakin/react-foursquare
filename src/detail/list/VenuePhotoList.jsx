import React, {Component} from "react";
import "./venue-photo-list.scss";

class VenuePhotoList extends Component {
    constructor(props){
        super(props);
    }
  render() {
    const {photoList} = this.props;

    return (
      <div className="venue-photo-list">
        <div className="venues-cards">
          <ul className="venue-photo-card-list">
            {
                photoList && (
                    photoList.map((photo, index) => (
                      <li key={photoList[index].id} className="venue-photo-cards">
                        <div className="venue-photo-card">
                          <img className="venue-photo-card-background-image" src={
                                  `${photoList[index].prefix}400x400${photoList[index].suffix}`
                              }/>
                          <div className="venue-photo-uplader">
                            <img className="venue-photo-uploader-image" src={
                                    `${photoList[index].user.photo.prefix}100x100${
                                        photoList[index].user.photo.suffix}`
                                }/>
                          </div>
                          <span className="venue-photo-uploader-name">
                            {`${photoList[index].user.firstName} ${photoList[index].user.lastName}`}
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
