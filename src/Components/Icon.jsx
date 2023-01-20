import React, { Component } from "react";

export default class Icon extends Component {
  render() {
    const icon = `./../assets/Icons/icons.svg#${this.props.moon}`;
    return (
      <svg className={this.props.className}>
        <use href={icon}></use>
      </svg>
    );
  }
}
