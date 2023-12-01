import React from "react";
import { useNavigate } from "react-router-dom";
import { useDreamContext } from "../../components/DreamContext";
import "./DreamDetails.css";

function DreamDetails() {
  const { selectedDream } = useDreamContext();
  const navigate = useNavigate();

  const goBackToList = () => {
    navigate("/list-dreams");
  };

  return (
    <div className="dream-details-container">
      <h2 className="list-description">What a dream!</h2>

      {selectedDream && (
        <div className="details-row">
          <div className="DDTitle-Date-container">
            <div className="details-item">
              <label className="DD-Title">Title:</label>
              <div>{selectedDream.title}</div>
            </div>

            <div className="details-item">
              <label className="DD-Date">Date:</label>
              <di className="DD-selectedDreamDate">{selectedDream.date}</di>
            </div>
          </div>

          <div className="details-item">
            <label className="DD-ABoutDream">About my Dream:</label>
            <div>{selectedDream.myTextarea}</div>
          </div>
        </div>
      )}
      <div className="DDButton-container">
        <button className="button-list" onClick={goBackToList}>
          Back to my dream list
        </button>
      </div>
    </div>
  );
}

export default DreamDetails;
