import React, { Component } from "react";

export default class MostRecentTrophy extends Component {
  render() {
    const { trophyReason, yourRate, bgSrc, trophyImg, gameType, lastTime } =
      this.props;
    const imgSrc = `/assets/images/${bgSrc}`;
    const trophySrc = `/assets/images/${trophyImg}`;
    return (
      <div className="most-recent-trophy">
        <p className="most-recent-trophy-title">most recent trophy</p>
        <div className="trophy-img-box">
          <div className="trophy-reason">
            <p className="reason-title">{trophyReason}</p>
            <p className="your-rate">you are in the {yourRate}</p>
          </div>
          <img
            className="most-recent-trophy-bg"
            src={imgSrc}
            alt="MostRecentTrophy"
          />
          <img
            className="most-recent-trophy-img"
            src={trophySrc}
            alt="MostRecentTrophy"
          />
          <div className="game-trophy-info">
            <p className="game-type">{gameType}</p>
            <p className="last-time-played">Last played: {lastTime}</p>
          </div>
        </div>
      </div>
    );
  }
}
