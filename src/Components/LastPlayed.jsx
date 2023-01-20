import React, { Component } from "react";

export default class LastPlayed extends Component {
  render() {
    const imgSrc = `/assets/images/${this.props.imgSrc}`;
    return (
      <div className="last-played">
        <figure className="last-play-figure">
          <img className="last-play-img" src={imgSrc} alt="Last Played" />
          <figcaption className="last-play-desc">
            {this.props.figcaption}
          </figcaption>
        </figure>
      </div>
    );
  }
}
