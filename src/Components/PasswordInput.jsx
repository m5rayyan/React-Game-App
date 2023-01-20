import React, { Component } from "react";

export default class PasswordInput extends Component {
  render() {
    const { placeholder, value } = this.props;
    return (
      <div className="block">
        <input type="password" placeholder={placeholder} value={value} />
      </div>
    );
  }
}
