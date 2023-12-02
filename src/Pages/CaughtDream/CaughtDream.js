import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CaughtDream.css";
import stringPoms from "../images/string-poms.png";

function CaughtDream() {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, date, description } = location.state || {};

  const handleReadMyDreamsClick = () => {
    navigate("/list-dreams", { state: { title, date, description } });
  };

  const handleBackToHomeClick = () => {
    navigate("/landingPage");
  };

  return (
    <div>
      <div className="caughtDream-container">
        <div>
          <img src={stringPoms} alt="Nice catch!" className="LDStringPoms" />
        </div>
        <div className="CDtext-container">
          <p className="CDtext">You've caught a dream!</p>

          {/* <img
            src={caughDreamImg}
            alt="caught a dream!"
            className="caughtDreamImg"
          /> */}
        </div>

        <div className="caughtDream-button-container">
          <button class="read-my-dreams" onClick={handleReadMyDreamsClick}>
            Read my dreams
          </button>
          <button class="back-to-home" onClick={handleBackToHomeClick}>
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
}

export default CaughtDream;
