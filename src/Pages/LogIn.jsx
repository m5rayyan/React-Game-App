import React, { Component } from "react";
import { object, string } from "yup";
import { Link } from "react-router-dom";
import axios from "axios";
import Container from "../Components/Container";
import OrLine from "../Components/Or";
import Social from "../Components/Social";
import Input from "../Components/Input";
import Error from "../Components/Error";
import Btn from "../Components/Button";
import google from "./../assets/image/google.png";
import twitter from "./../assets/image/twitter.png";
import linkedin from "./../assets/image/linkedin.png";
import github from "./../assets/image/github.png";
import logo from "./../assets/image/logo2.png";
import img from "./../assets/image/img.png";
import showEye from "./../assets/image/eye.png";
import hideEye from "./../assets/image/hideEye.jpg";

export default class LogIn extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
    showPassword: false,
    isValid: false,
    isLoading: false,
  };

  schema = object().shape({
    email: string()
      .email("Invalid email address")
      .required("please enter your email"),
    password: string().required("please enter your password"),
  });

  //handle change inside input
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  //handle submit and stop refresh
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    this.schema
      .validate(
        {
          email: this.state.email,
          password: this.state.password,
        },
        { abortEarly: false }
      )
      .then(async ({ email, password }) => {
        const res = await axios.post(
          "https://react-tt-api.onrender.com/api/users/login",
          {
            email: email,
            password,
          }
        );
        console.log(res.data.email);
        if (res) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.name);
          localStorage.setItem("admin", res.data.isAdmin);
          if (res.data.isAdmin) {
            this.props.admin();
          }
          this.props.login();
        }
        this.setState({ isValid: true });
      })
      .catch((e) => {
        const validationErrors = {};
        e.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        this.setState({ errors: validationErrors });
        console.log("e");
        this.setState({ isValid: false });
      })
      .finally(() => this.setState({ isLoading: false }));
  };
  //when click on the eye show password
  toggleShowPassword = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };

  render() {
    const { email, isValid, errors, password, showPassword, isLoading } =
      this.state;

    return (
      <Container>
        <div className="left-section">
          <div className="left-section-content">
            <img src={logo} alt="logo" />
            <p>
              <span className="qoutiation">“</span>I always observe the people
              who pass by when I ride an escalator. I'll never see most of them
              again, so I imagine a lot of things about their lives... about the
              day ahead of them.
              <span className="signature">Hideo Kojima</span>
            </p>
            <div className="img-box">
              <img src={img} alt="img" />
            </div>
          </div>
        </div>

        <div className="right-section">
          <div>
            <h1>Join the game!</h1>
            <p>Go inside the best gamers social network!</p>
          </div>

          <div className="social-media-box">
            <Social img={google} title="google" />
            <Social img={twitter} title="twitter" />
            <Social img={linkedin} title="linkedin" />
            <Social img={github} title="github" />
          </div>

          <OrLine />

          <form onSubmit={this.handleSubmit}>
            <div className="form">
              <Input
                type="email"
                placeholder="Write your email"
                handleChange={this.handleChange}
                value={email}
                name="email"
              >
                Your email
              </Input>
              {errors.email && isValid === false ? (
                <Error className="errors">{errors.email}</Error>
              ) : null}

              <div className="pass-input">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="•••••••••"
                  value={password}
                  handleChange={this.handleChange}
                  name="password"
                >
                  Enter your password
                </Input>
                {errors.password && isValid === false ? (
                  <Error className="errors">{errors.password}</Error>
                ) : null}

                <div>
                  <img
                    src={showPassword ? hideEye : showEye}
                    alt="eye"
                    className="eye"
                    onClick={this.toggleShowPassword}
                  />
                </div>
              </div>

              <div className="login-btn">
                <Btn isValid={isValid} link="/dashboard">
                  {isLoading ? "Loading..." : "Login"}
                </Btn>
              </div>

              <p className="final-stat">
                Don’t have an account?
                <span>
                  <Link to="/signUp" style={{ color: "#1565d8" }}>
                    Register
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}
