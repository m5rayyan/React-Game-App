import React, { Component } from "react";

export default class Input extends Component {
  render() {
    const { type, children, placeholder, handleChange, value, name, id } =
      this.props;
    return (
      <div className="Input-box">
        <label htmlFor={type}>{children}</label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          name={name}
        />
      </div>
    );
  }
}
