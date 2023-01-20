import React, { Component } from "react";

export default class Progress extends Component {
  render() {
    return (
      <div className="progressGroup" style={this.props.style}>
        <div score={this.props.score} id="progress">
          <div
            className={
              this.props.score === 0
                ? "bad "
                : this.props.score === 1
                ? "weak"
                : this.props.score === 2
                ? "medium"
                : this.props.score === 3
                ? "strong"
                : ""
            }
          ></div>
        </div>
        <p
          className={
            this.props.score === 0
              ? "worse address"
              : this.props.score === 1
              ? "notBad address"
              : this.props.score === 2
              ? "better address"
              : this.props.score === 3
              ? "TheBest address"
              : ""
          }
        ></p>
      </div>
    );
  }
}
