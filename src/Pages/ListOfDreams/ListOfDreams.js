import React from "react";
import { useNavigate } from "react-router-dom";
import { useDreamContext } from "../../components/DreamContext";
import "./ListOfDreams.css";
import listDCLogo from "../images/dreamCatcher.png";
import listString from "../images/string.png";
import listDCImg from "../images/sit-dream.png";
import listCloud from "../images/cloudPic.png";

function ListOfDreams() {
  const { dreams } = useDreamContext();

  const navigate = useNavigate();
  const backToLogin = () => {
    navigate("/landingPage");
  };

  const createDream = () => {
    navigate("/create-dream");
  };

  return (
    <div>
      <div className="list-container">
        <div className="listLeft-container"></div>
        <div className="listLogo-container">
          <img src={listDCLogo} className="listDCLogo" alt="listDCLogo" />
        </div>
        <div className="white-background">
          <div className="listString-container">
            <img src={listString} className="listString" alt="string.." />
          </div>
          <div className="listInput-container">
            <input
              type="search"
              placeholder="Search a dream.."
              className="search-input"
            />
          </div>

          <div className="ul-list-container">
            <ul id="list-container" className="ul-list">
              {dreams.map((dream, index) => (
                <li key={index} className="list-div">
                  <h3 className="dream-title">{dream.title}</h3>
                  <p className="dream-date">{dream.date}</p>
                  <p className="dream-description">{dream.myTextarea}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="listRight-container">
          <div className="listButton-container">
            <button onClick={createDream} className="listCatch-a-dream">
              Catch a dream
            </button>
            <button onClick={backToLogin} className="listBack-to-home">
              Back to home
            </button>
          </div>
        </div>

        <img src={listDCImg} className="listDCImg" alt="catch a dream..." />
      </div>
      <img src={listCloud} alt="clouds.." className="listCloud1" />
      <img src={listCloud} alt="clouds" className="listCloud2" />
    </div>
  );
}

export default ListOfDreams;
