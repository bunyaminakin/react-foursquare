import React, {Component} from "react";
import DetailHeader from "../header/DetailHeader.jsx";
import VenuePhotoList from "../list/VenuePhotoList.jsx";
import VenueTipList from "../list/VenueTipList.jsx";
import Footer from "../../component/main/footer.jsx";

class DetailPage extends Component {
  render() {
    return (
        <div className="detail-page">
            <div className="detail-page-header">
                <DetailHeader/>
            </div>
            <div className="detail-page-venue-photo-list">
                <VenuePhotoList/>
            </div>
            <div className="detail-page-venue-tip-list">
                <VenueTipList/>
            </div>
            <Footer/>
        </div>
    );
  }
}

export default DetailPage;
