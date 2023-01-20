import React, { Component } from "react";
import Icon from "../Components/Icon";
export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="icons-box">
          <Icon className="svg-logo" moon="Logo" />
          <div className="mid-nav-icons">
            <Icon className="svg-like" moon="Like" />
            <Icon className="svg-settings" moon="Settings" />
            <Icon className="svg-puzzle" moon="Puzzle" />
          </div>
          <div className="mode-switch-box">
            <Icon className="svg-moon" moon="Moon" />
            <Icon className="svg-sun" moon="Sun" />
          </div>
        </div>
        <Icon className="svg-line" moon="Line" />
      </nav>
    );
  }
}
