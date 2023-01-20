import React, { Component } from "react";
export default class Social extends Component {
  render() {
    const { img, title } = this.props;
    return <img src={img} alt={title} className="social-img" />;
  }
}
