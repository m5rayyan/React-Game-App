import { useNavigate } from "react-router-dom";

import GoogleLogo from "../assets/image/google-login.svg";

function LogInButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/logIn");
  }

  return (
    <button className="login-btn" onClick={handleClick} type="button">
      <img src={GoogleLogo} alt="logo" />

      <span>login</span>
    </button>
  );
}

export default LogInButton;
