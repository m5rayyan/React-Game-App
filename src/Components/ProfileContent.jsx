import React, { Component } from "react";
import axios from "axios";

import sms from "./../assets/image/sms.png";
import frame from "./../assets/image/frame.png";

import PasswordInput from "./PasswordInput";

export default class ProfileContent extends Component {
  state = {
    name: "",
    email: "",
    isAdmin: false,
    isLoading: true,
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
    this.setState({
      name: res.data.name,
      email: res.data.email,
      isAdmin: res.data.isAdmin ? "yes" : "no",
      isLoading: false,
    });
  }

  render() {
    return (
      <div className="Profile-Content">
        <h2>MY PROFILE</h2>
        {this.state.isLoading ? (
          <div
            style={{
              margin: "20% 40%",
              fontSize: "25px",
            }}
          >
            "Loading..."
          </div>
        ) : (
          <div className="profile-box">
            <div>
              <div className="account-information">
                <div className="left-block">
                  <h3>Account information</h3>
                  <div className="block email-block">
                    <img src={sms} alt="sms" className="left-img" />
                    <input type="email" value={this.state.email} />
                  </div>
                  <div>
                    <h3>Old Password</h3>
                    <PasswordInput placeholder="*****" />
                  </div>
                </div>
                <div>
                  <div className="pass-block">
                    <PasswordInput placeholder="Enter new password" />
                  </div>
                  <div className="pass-block">
                    <PasswordInput placeholder="repeat new password" />
                  </div>
                </div>
              </div>
              <button>update password</button>
            </div>

            <div>
              <h3>Personal Information</h3>
              <div className="personal-information">
                <div>
                  <div className="block">
                    <h4>First Name</h4>
                    <img src={frame} alt="frame" className="left-img user" />
                    <input type="text" value={this.state.name} />
                  </div>
                </div>

                <div>
                  <div className="block">
                    <h4>Admin</h4>
                    <input type="text" value={this.state.isAdmin} />
                  </div>
                </div>
              </div>
              <button>Save Change</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
