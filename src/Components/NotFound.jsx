import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <div class="gears right-gear">
          <div class="gears-container">
            <div class="gear-rotate"></div>
            <div class="gear-rotate-left"></div>
          </div>
        </div>
        <div className="not-found-content">
          <h1>Oops!!</h1>
          <p>404 - Page not found </p>
        </div>
        <div class="gears left-gear">
          <div class="gears-container">
            <div class="gear-rotate"></div>
            <div class="gear-rotate-left"></div>
          </div>
        </div>
      </div>
    );
  }
}
