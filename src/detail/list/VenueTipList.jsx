import React, {Component} from "react";
import PropTypes from "prop-types";

import "./venue-tip-list.scss";

const TIP_LIST_LIMIT = 4;

class VenueTipList extends Component {
  static PropTypes = {
    tipList: PropTypes.array.isRequired
  };

  render() {
    const {tipList} = this.props;

    return (
      <div className="venue-tip-list-panel">
        {
          tipList && (
            <div>
              <h1 className="venue-tip-list-name">{"TIPS"}</h1>
              <ul className="venue-tips">
                {
                  tipList.map((tip, index) => {
                    if (index < TIP_LIST_LIMIT) {
                      return (
                        <li key={tipList[index].id} className="venue-tip">
                          <div className="venue-tip-user-detail">
                            <img className="venue-tip-user-image" src={
                                    `${tipList[index].user.photo.prefix}100x100${tipList[index].user.photo.suffix}`
                            }/>
                          </div>
                          <span className="venue-tip-user-name">
                            {`${tipList[index].user.firstName} ${tipList[index].user.lastName}`}
                          </span>
                          <p className="venue-tip-text">
                            {tipList[index].text}
                          </p>
                        </li>
                      );
                    }
                    return false;
                  }
                  )
                }
                <li className="venue-tip-all">
                  <a className="venue-tip-link">{"All Tips"}</a>
                </li>
              </ul>
            </div>)
        }
      </div>
    );
  }
}

export default VenueTipList;
