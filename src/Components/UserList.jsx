import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "../Sections/Nav";
import details from "../assets/image/details.png";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default class UserList extends Component {
  state = {
    users: [],
    admin: "",
    isLoading: true,
    isDeleting: false,
  };

  token = localStorage.getItem("token");
  async componentDidMount() {
    try {
      const res = await axios.get(
        "https://react-tt-api.onrender.com/api/users",
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );

      this.setState({ users: res.data });
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }

  handleDelete = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure want to delete this user",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            await axios.delete(
              `https://react-tt-api.onrender.com/api/users/${id}`,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
            this.setState({
              users: this.state.users.filter((user) => user._id !== id),
            });
          },
        },
        {
          label: "No",
          onClick: () => "",
        },
      ],
    });
  };

  render() {
    return (
      <div className="userList">
        <Nav />
        <main>
          <div className="user-list">
            <h2>USERS LIST</h2>
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
              <div className="user-list-box">
                <table>
                  <tr>
                    <th>id</th>
                    <th>username</th>
                    <th>Admin</th>
                    <th>user details</th>
                    <th>delete</th>
                  </tr>

                  {this.state.users.map((user, index) => (
                    <tr key={user._id}>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.isAdmin ? "Yes" : "No"}</td>
                      <td>
                        <Link to={`/usersList/${user._id}`}>
                          <img src={details} alt="details" width="25px" />
                          user details
                        </Link>
                      </td>
                      <td>
                        <button
                          className="delete"
                          onClick={() => this.handleDelete(user._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  }
}
