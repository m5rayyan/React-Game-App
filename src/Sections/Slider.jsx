import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    return (
      <div className="slider">
        <h2 className="slider-title">{this.props.sliderTitle}</h2>
        <div className="slider-content">{this.props.children}</div>
      </div>
    );
  }
}
