import React, { Component } from "react";
import Menu from "../Components/Menu";

import avatar from "../assets/image/avatar.png";

export default class Header extends Component {
  state = {
    showMenu: false,
    name: "",
  };
  componentDidMount() {
    const name = localStorage.getItem("name");
    this.setState({ name: name });
  }
  toggleShowMenu = () => {
    this.setState((prevState) => ({ showMenu: !prevState.showMenu }));
  };
  render() {
    return (
      <header>
        <div className="user" onClick={this.toggleShowMenu}>
          <p>
            Welcome back,<span>{this.state.name}</span>
          </p>
          <img src={avatar} alt="avatar" />
        </div>
        {this.state.showMenu ? <Menu logout={this.props.logout} /> : ""}
      </header>
    );
  }
}
