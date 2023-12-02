import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import dreamCatcherImg from "../images/dreamCatcher.png";
import questionImg from "../images/question-image.png";
import welcomeImg from "../images/welcome-image-boy.png";
import plusImg from "../images/plus-sign.png";

function LandingPage() {
  const navigate = useNavigate();
  const handleCreateDreamClick = () => {
    navigate("/create-dream");
  };

  const handleReadMyDreamsClick = () => {
    navigate("/list-dreams");
  };

  return (
    <div>
      <div className="lp-logo-container">
        <img
          src={dreamCatcherImg}
          alt="DreamCatcher"
          className="dreamCatcherImg"
        />
      </div>
      <div className="landingPage-container">
        <div className="left-container-landingPage">
          <div className="lp-welcomeBoard-container">
            <div className="welcome-board">
              <p className="first-paragraph">Welcome!</p>
            </div>
          </div>
          <div className="lp-questionImg-container">
            <img
              src={questionImg}
              alt="did you have a dream last night?"
              className="question-image"
            />
          </div>
        </div>

        <div className="right-container-landingPage">
          <div sclassName="welcomeImgBoy-container">
            <img
              src={welcomeImg}
              alt="welcome!"
              className="welcome-image-boy"
            />
          </div>
          <div className="landingPage-button-container">
            <button
              className="landingPage-button"
              onClick={handleCreateDreamClick}
            >
              <img src={plusImg} alt="add a dream" className="plus-sign" />
              Create a dream
            </button>
            <button class="read-my-dreams" onClick={handleReadMyDreamsClick}>
              Read my dreams
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
