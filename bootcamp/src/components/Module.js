import React from 'react';
import '../App.css';

const Module = (props) => {
    const data = props.Data;
    const done = props.Done

    let active = "";
    if (props.currentActivity == data.id) active = " active";
    console.log("props.currentActivity: " + props.currentActivity);

    let colouredDate = "";
    if (data.id == 0) colouredDate = " today" // Monday

    return (
        <div className={"activity-button"+active} onClick={props.Click}>
          <div className="activity-button-text">
            <div className="activity-button-date">
              <div className={"activity-button-date-dow" + colouredDate}>{data.dow}</div>
              <div className={"activity-button-date-dd" + colouredDate}>{data.dd}</div>
            </div>
            <div className="activity-button-separator"></div>
            <div className="activity-button-details">
              <div className="activity-button-title">{data.title}</div>
              <div className="activity-button-subtitle">{data.subtitle}<span className="live">{data.live_start}</span></div>
            </div>
          </div>
          <div className="activity-button-icons">
            <div className="activity-button-complete"></div>
          </div>
        </div>
    )
}

export default Module;