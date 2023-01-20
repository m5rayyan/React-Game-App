import React, { Component } from "react";
export default class Error extends Component {
  render() {
    const { className, children } = this.props;
    return <div className={className}>{children}</div>;
  }
}
