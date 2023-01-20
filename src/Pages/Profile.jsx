import React, { Component } from "react";
import Nav from "../Sections/Nav";
import ProfileContent from "../Components/ProfileContent";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <Nav />
        <main>
          <ProfileContent />
        </main>
      </div>
    );
  }
}
