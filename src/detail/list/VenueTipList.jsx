import React, {Component} from "react";

class VenueTipList extends Component {
  render() {
    return (
      <div className="venue-tip-list">
        <h1 className="venue-tip-list-name">TIPS</h1>
        <ul className="venue-tips">
          <li className="venue-tip">
            <div className="veneu-tip-user-detail">
              <img className="venue-tip-user-image"/>
              <span className="venue-tip-user-name">Arzu Şendağ</span>
            </div>
            <p className="venue-tip-text">Çok güzel mekan çok sevdim</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default VenueTipList;
