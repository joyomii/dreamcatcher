import React from "react";
import { useNavigate } from "react-router-dom";
import { useDreamContext } from "../../components/DreamContext";
import "./ListOfDreams.css";
import listDCLogo from "../images/dreamCatcher.png";
import listString from "../images/string.png";
// import listDreamyPic from "../images/sit-dream.png";
import dandelion from "../images/dandelions.png";
// import listVerticalDesign from "../images/ListVertical-design.png";

function ListOfDreams() {
  const { dreams, setSelectedDream } = useDreamContext();
  const navigate = useNavigate();

  const backToLogin = () => {
    navigate("/landingPage");
  };

  const createDream = () => {
    navigate("/create-dream");
  };

  const navigateToDreamDetails = (event, dream) => {
    event.preventDefault();
    setSelectedDream(dream);
    navigate("/dream-details");
  };

  return (
    <div>
      <div className="list-container">
        <div className="listLeft-container">
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
                  <li
                    key={index}
                    className="list-div"
                    onClick={(event) => navigateToDreamDetails(event, dream)}
                  >
                    <h3 className="dream-title" maxlength="50">
                      {dream.title}
                    </h3>
                    <p className="dream-date">{dream.date}</p>
                    <p className="dream-description">{dream.myTextarea}</p>
                  </li>
                ))}
              </ul>
            </div>
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
      </div>
      {/* <img src={listDreamyPic} alt="Dreamy.." className="listDreamyPic" />
      <img src={dandelion} alt="dandelion" className="dandelion1" /> */}
      <img src={dandelion} alt="dandelion2" className="dandelion2" />
      {/* <img
        src={listVerticalDesign}
        alt="happy dream?"
        className="listVertical-design"
      /> */}
    </div>
  );
}

export default ListOfDreams;
