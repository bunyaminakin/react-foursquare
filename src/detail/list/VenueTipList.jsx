import React, {Component} from "react";
import "./venue-tip-list.scss";

class VenueTipList extends Component {
  render() {
    const {tipList} = this.props;
    const tipListLimit = 4;

    return (
      <div className="venue-tip-list">
        {
          tipList && (
            <div>
              <h1 className="venue-tip-list-name">{"TIPS"}</h1>
              <ul className="venue-tips">
                {
                  tipList.map((tip, index) => {
                    if (index < tipListLimit) {
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
