import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDreamContext } from "../../components/DreamContext";
import "./CreateDream.css";
import cloudPic from "../images/cloudPic.png";
import plusImg from "../images/plus-sign.png";

function CreateDream() {
  const navigate = useNavigate();
  const { addDream } = useDreamContext();

  const [dreamData, setDreamData] = useState({
    title: "",
    date: "",
    myTextarea: "",
  });

  const handleCaughtDreamClick = () => {
    if (dreamData.title && dreamData.date && dreamData.myTextarea) {
      addDream(dreamData);
      navigate("/caught-dream", { state: dreamData });
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setDreamData((prevData) => ({ ...prevData, [id]: value }));
  };

  return (
    <div className="createDream-container">
      <div className="title-date-container">
        <input
          type="text"
          id="title"
          className="title-date"
          placeholder="Click to enter a title..."
          maxlength="20"
          value={dreamData.title}
          onChange={handleChange}
        />
        <input
          type="date"
          id="date"
          className="title-date"
          placeholder="Date..."
          value={dreamData.date}
          onChange={handleChange}
        />
      </div>
      <div className="myTextarea-container">
        <textarea
          id="myTextarea"
          className="myTextarea"
          placeholder="Click to enter your dream..."
          rows={5}
          cols={50}
          maxlength="1000"
          value={dreamData.myTextarea}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="CDButton-container">
        <button className="imgButton" onClick={handleCaughtDreamClick}>
          <img src={plusImg} className="plusImg" alt="plus sign" />
        </button>
      </div>
      <div>
        <img src={cloudPic} className="cloud1" alt="clouds..." />
        <img src={cloudPic} className="cloud2" alt="clouds..." />
        <img src={cloudPic} className="cloud3" alt="clouds..." />
        <img src={cloudPic} className="cloud4" alt="clouds..." />
      </div>
    </div>
  );
}

export default CreateDream;
