import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import dreamCatcherImg from "../images/dreamCatcher.png";
import string from "../images/string.png";
import questionImg from "../images/question-image.png";
import welcomeImg from "../images/welcome-image-boy.png";
import plusImg from "../images/plus-sign.png";

function LandingPage() {
  const navigate = useNavigate();
  const handleCreateDreamClick = () => {
    navigate("/create-dream");
  };

  return (
    <div>
      <div className="landingPage">
        <div className="landingPage-container">
          <div className="right-container-lp">
            <div className="dreamCatcherImg-container-lp">
              <img
                src={dreamCatcherImg}
                alt="DreamCatcher"
                className="dreamCatcherImg"
              />
            </div>
            <div className="string-container">
              <img src={string} alt="dreamcatcher logo" className="stringImg" />
            </div>
            <div className="welcomeboard-container">
              <div className="welcome-board">
                <p className="first-paragraph">Welcome!</p>
              </div>
            </div>
            <div className="questionImg-container">
              <img
                src={questionImg}
                alt="did you have a dream last night?"
                className="question-image"
              />
            </div>
          </div>

          <div className="left-container">
            <div className="welcomeImgBoy-container">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
