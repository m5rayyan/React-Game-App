import React, { Component } from "react";
import Friends from "../Components/Friends";
import LastPlayedList from "../Components/LastPlayedList";
import MostRecentTrophy from "../Components/MostRecentTrophy";

export default class AccountStatus extends Component {
  render() {
    return (
      <div className="account-status">
        <LastPlayedList />
        <MostRecentTrophy
          trophyReason="perfect KILL streak"
          yourRate="0.5%"
          bgSrc="last-trophy.png"
          trophyImg="gold-trophy.png"
          gameType="assassin's creed odyssey"
          lastTime="34 hours ago"
        />
        <Friends />
      </div>
    );
  }
}
