import React, {Component} from "react";
import PropTypes from "prop-types";

import VenueDetailHeader from "../header/VenueDetailHeader.jsx";
import VenuePhotoList from "../list/VenuePhotoList.jsx";
import VenueTipList from "../list/VenueTipList.jsx";
import Footer from "../../component/main/Footer.jsx";
import foursquareApi from "../../FoursquareApi.js";

import "./detail-page.scss";

const VENUE_PHOTO_LIMIT = 8;

class VenueDetailPage extends Component {
  static PropTypes = {
    handleClick: PropTypes.func.isRequired,
    details: PropTypes.array.isRequired,
    photos: PropTypes.array.isRequired,
    tipList: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      details: [],
      photos: [],
      tipList: []
    };
    this.handleClick(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    this.handleClick(nextProps.id);
  }

  handleClick = (id) => {
    this.getVenueDetails(id);
    this.getVenuePhotos(id);
    this.getVenueTips(id);
  };

  getVenueDetails = (id) => {
    const url = `https://api.foursquare.com/v2/venues/${id}`;
    const params = {
      client_id: foursquareApi.apiParams.client_id,
      client_secret: foursquareApi.apiParams.client_secret,
      v: foursquareApi.apiParams.v
    };

    foursquareApi.getVenues(url, params).then((data) => {
      this.setState({
        details: data
      });
    }, (err) => {
      console.log(err.message);
      this.setState({
        details: []
      });
    });

  };
  getVenuePhotos = (id) => {
    const url = `https://api.foursquare.com/v2/venues/${id}/photos`;
    const params = {
      client_id: foursquareApi.apiParams.client_id,
      client_secret: foursquareApi.apiParams.client_secret,
      v: foursquareApi.apiParams.v,
      limit: VENUE_PHOTO_LIMIT
    };

    foursquareApi.getVenuePhotos(url, params).then((data) => {
      this.setState({
        photos: data
      });
    }, (err) => {
      console.log(err.message);
      this.setState({
        photos: []
      });
    });

  };
  getVenueTips = (id) => {
    const url = `https://api.foursquare.com/v2/venues/${id}`;
    const params = {
      client_id: foursquareApi.apiParams.client_id,
      client_secret: foursquareApi.apiParams.client_secret,
      v: foursquareApi.apiParams.v
    };

    foursquareApi.getVenueTips(url, params).then((data) => {
      this.setState({
        tipList: data
      });
    }, (err) => {
      console.log(err.message);
      this.setState({
        tipList: []
      });
    });
  };

  render() {
    const {details, photos, tipList} = this.state;

    return (
      <div className="detail-page-header">
        {
              details.length !== 0 &&
              (
                <div className="detail-page-header-container">
                  <VenueDetailHeader details={details}/>
                </div>
              )
          }
        <div className="detail-page-lists">
          {
              photos.length !== 0 &&
              (
                <div className="detail-page-photo-list-container">
                  <VenuePhotoList photoList={photos}/>
                </div>
              )
          }
          {
              tipList.length !== 0 &&
              (
                <div className="detail-page-tip-list-container">
                  <VenueTipList tipList={tipList}/>
                </div>
              )
          }
        </div>
        <Footer/>
      </div>
    );
  }
}

export default VenueDetailPage;
