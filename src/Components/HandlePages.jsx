import React, { Component } from "react";
import Login from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";

export default class HandlePages extends Component {
  state = {
    currentPage: "signUp",
  };

  handlePages = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage === "signUp" ? "login" : "signUp",
    }));
  };

  render() {
    return (
      <div>
        {this.state.currentPage === "signUp" ? (
          <SignUp move={this.handlePages} />
        ) : (
          <Login move={this.handlePages} />
        )}
      </div>
    );
  }
}
