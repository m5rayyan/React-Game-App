import React, { Component } from "react";

export default class SliderCard extends Component {
  render() {
    const imgSrc = `/assets/images/${this.props.imgSrc}`;
    return (
      <div className="slider-card-box">
        <figure className="slider-card">
          <img className="slider-img" src={imgSrc} alt="slider card" />
          <figcaption>{this.props.figcaption}</figcaption>
        </figure>
      </div>
    );
  }
}
