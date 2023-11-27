import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import landingPage from "../images/landingPage.png";
import logoImg from "../images/dreamCatcher.png";
import holdAGlimpse from "../images/holdAGlimpse.png";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.username && formData.password) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setShowSuccessMessage(true);
        setTimeout(() => {
          navigate("/landingPage?username=$formData.username");
        }, 2000);
      } catch (error) {
        console.error("Error during registration", error);
      }
    } else {
      alert("Please fill out both username and password");
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="left-container">
          <div className="logo-img-container">
            <img src={logoImg} alt="dreamCatcher" className="logo-img" />
          </div>
          <div className="loginPage-img-container">
            <img src={landingPage} alt="dream" className="loginPage-img" />
          </div>
        </div>

        <div className="right-container">
          <div className="holdAGlipmse-img-container">
            <img
              src={holdAGlimpse}
              alt="Hold a glimpse"
              className="holdAGlimpse-img"
            />
          </div>
          <div className="create-account-txt">no account yet?</div>
          <div className="signUpButton-container">
            <button className="signUp-button">Sign up - Create Account</button>
          </div>
          <div className="border-container">
            <div className="or-text">or</div>
          </div>
          <div className="form-container">
            <form className="form-login" onSubmit={handleSubmit}>
              <h3 className="logInToYourAccount-txt">
                <span>Log in to your</span> dreamCatcher <span>Account</span>
              </h3>
              <input
                id="username"
                className="input-email"
                placeholder="username"
                onChange={handleChange}
              />
              <input
                id="password"
                className="input-password"
                placeholder="password"
                onChange={handleChange}
              />
              <button type="submit" className="log-in-button">
                Log in
              </button>
            </form>

            {showSuccessMessage && (
              <p
                style={{
                  color: "green",
                  position: "absolute",
                  top: "99%",
                  font: "8pxpx",
                }}
              >
                Log in successful!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
