import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../Sections/Nav";
import Header from "../Sections/Header";

export default function UserData() {
  const { id } = useParams();
  return <Data id={id} />;
}

class Data extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    admin: "",
    isLoading: true,
  };

  async componentDidMount() {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `https://react-tt-api.onrender.com/api/users/${this.props.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      this.setState({
        name: res.data.name,
        email: res.data.email,
        id: res.data._id,
        admin: res.data.isAdmin ? "Yes" : "No",
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { isLoading, id, name, email, admin } = this.state;
    return (
      <div className="user-details">
        <Nav />
        <Header />
        <main>
          {isLoading ? (
            <div
              style={{
                margin: "20% 40%",
                fontSize: "25px",
              }}
            >
              "Loading..."
            </div>
          ) : (
            <table>
              <tr>
                <th>id</th>
                <td>{id}</td>
              </tr>
              <tr>
                <th>name</th>
                <td>{name}</td>
              </tr>
              <tr>
                <th>email</th>
                <td>
                  <a href="mailto:">{email}</a>
                </td>
              </tr>
              <tr>
                <th>admin</th>
                <td>{admin}</td>
              </tr>
            </table>
          )}
        </main>
      </div>
    );
  }
}
// export default UserDetails;
