import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Menu extends Component {
  state = {
    admin: false,
  };
  async componentDidMount() {
    const token = localStorage.getItem("token");
    const res = await axios.get(
      "https://react-tt-api.onrender.com/api/users/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res.data.isAdmin);
    this.setState({ admin: res.data.isAdmin });
  }

  render() {
    return (
      <div className="settings-menu">
        <div className="setting-menu-inner">
          <div className="setting-links">
            <Link to="/dashboard">Home</Link>
          </div>
          <div className="setting-links">
            <Link to="/dashboard/profile">Profile</Link>
          </div>
          {this.state.admin ? (
            <div className="setting-links">
              <Link to="/dashboard/userList">UserList</Link>
            </div>
          ) : (
            ""
          )}
          <div className="setting-links">
            <Link to="/logIn" onClick={this.props.logout}>
              Logout
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
