import NotFound from "./Components/NotFound";
import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Profile from "./Pages/Profile";
import CheckRoute from "./Components/CheckRoute";
import UserData from "./Components/UserData";
import UsersList from "./Components/UserList";

export default class App extends Component {
  state = {
    isAuthorized: false,
    isAdmin: false,
  };
  login = () => {
    this.setState({ isAuthorized: true });
  };
  logout = () => {
    this.setState({ isAuthorized: false });
    localStorage.clear();
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.setState({ isAuthorized: true });
    }
    const admin = localStorage.getItem("admin");
    if (admin === "true") this.setState({ isAdmin: true });
  }
  admin = () => {
    this.setState({ isAdmin: true });
  };

  render() {
    const { isAuthorized, isAdmin } = this.state;
    const { login, logout, admin } = this;
    return (
      <div className="App">
        <Routes>
          <Route index="true" element={<Navigate to="/logIn" />} />
          <Route
            path="/dashboard"
            element={<CheckRoute isAuthorized={isAuthorized} logout={logout} />}
            children={[
              <Route index="true" element={<Home />} />,
              <Route path="userList" element={<UsersList />} />,
              <Route path="profile" element={<Profile />} />,
            ]}
          />
          <Route
            path="UsersList/:id"
            element={isAdmin ? <UserData /> : <Navigate to="/dashboard" />}
          />

          <Route
            path="/logIn"
            element={
              <>
                {isAuthorized ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <LogIn login={login} admin={admin} />
                )}
              </>
            }
          />

          <Route
            path="/signUp"
            element={
              isAuthorized ? (
                <Navigate to="/dashboard" />
              ) : (
                <SignUp login={login} />
              )
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}
