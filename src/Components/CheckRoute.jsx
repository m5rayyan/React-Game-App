import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../Sections/Header";

export default class CheckRoute extends Component {
  render() {
    const { isAuthorized, logout } = this.props;
    return (
      <div>
        {isAuthorized ? (
          <>
            <Header logout={logout} />
            <Outlet />
          </>
        ) : (
          <Navigate to="/logIn" />
        )}
      </div>
    );
  }
}
