import React, { Component } from "react";
import LastPlayed from "./LastPlayed";

export default class LastPlayedList extends Component {
  render() {
    return (
      <div className="last-played-list">
        <p className="last-played-title">last played</p>
        <LastPlayed
          imgSrc="last-played-1.png"
          figcaption="Hogwarts Legacy 50%"
        />
        <LastPlayed
          imgSrc="last-played-2.png"
          figcaption="God Of War: Ragnarök 72.5%"
        />
        <LastPlayed
          imgSrc="last-played-3.png"
          figcaption="Crash Bandicoot N. Sane Trilogy 34%"
        />
        <LastPlayed
          imgSrc="last-played-4.png"
          figcaption="Dying Light 2 Stay Human 100%"
        />
      </div>
    );
  }
}
