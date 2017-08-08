import React, {Component} from "react";
import DetailHeader from "../header/DetailHeader.jsx";
import VenuePhotoList from "../list/VenuePhotoList.jsx";
import VenueTipList from "../list/VenueTipList.jsx";
import Footer from "../../component/main/footer.jsx";
import superagent from "superagent";
import "./detail-page.scss";

const apiParams = {
  client_id: "V131V0IPODZOAI4DH0TXB0W1VF4R1QCAHASGHJI35D3KJLWK",
  client_secret: "L5RZFRA1K2KPH33H12BFD3MECOJKEBIJSLP14KXYRYW3A5AF",
  v: "20170802"
};

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venueDetails: [],
      photos: [],
      tipList: []
    };
    this.handleClick(this.props.id);
    console.log("cons çalışıyo");
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
      client_id: apiParams.client_id,
      client_secret: apiParams.client_secret,
      v: apiParams.v
    };

    superagent
        .get(url)
        .query(params)
        .set("Accept", "application/json")
        .then((data) => {
          this.setState({
            venueDetails: data.body.response.venue
          });
        }, (err) => {
          console.log(`OPS ${err.message}`);
          this.setState({
            venueDetails: []
          });
        });
  };
  getVenuePhotos = (id) => {
    const url = `https://api.foursquare.com/v2/venues/${id}/photos`;
    const params = {
      client_id: apiParams.client_id,
      client_secret: apiParams.client_secret,
      v: apiParams.v,
      limit: "8"
    };

    superagent
        .get(url)
        .query(params)
        .set("Accept", "application/json")
        .then((data) => {
          this.setState({
            photos: data.body.response.photos.items
          });
        }, (err) => {
          console.log(`OPS ${err.message}`);
          this.setState({
            photos: []
          });
        });
  };
  getVenueTips = (id) => {
    const url = `https://api.foursquare.com/v2/venues/${id}`;
    const params = {
      client_id: apiParams.client_id,
      client_secret: apiParams.client_secret,
      v: apiParams.v
    };

    superagent
        .get(url)
        .query(params)
        .set("Accept", "application/json")
        .then((data) => {
          this.setState({
            tipList: data.body.response.venue.tips.groups[0].items
          });
        }, (err) => {
          console.log(`OPS ${err.message}`);
          this.setState({
            tipList: []
          });
        });
  };

  render() {
    const {venueDetails} = this.state;
    const {photos} = this.state;
    const {tipList} = this.state;

    console.log("Venue Detail "+(venueDetails.length));

    return (
      <div className="detail-page">
        {
              venueDetails.length === 0 ? "" : (
                <div className="detail-page-header">
                  <DetailHeader venueDetails={this.state.venueDetails}/>
                </div>
              )
          }
        <div className="detail-page-lists">
          {
              photos.length === 0 ? "" : (
                <div className="detail-page-venue-photo-list">
                  <VenuePhotoList photoList={this.state.photos}/>
                </div>
              )
          }
          {
              tipList.length === 0 ? "" : (
                <div className="detail-page-venue-tip-list">
                  <VenueTipList tipList={this.state.tipList}/>
                </div>
              )
          }
        </div>
        <Footer/>
      </div>
    );
  }
}

export default DetailPage;
