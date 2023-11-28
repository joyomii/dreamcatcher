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
          <div className="details-item">
            <label>Title:</label>
            <div>{selectedDream.title}</div>
          </div>

          <div className="details-item">
            <label>Date:</label>
            <div>{selectedDream.date}</div>
          </div>

          <div className="details-item">
            <label>My Dream:</label>
            <div>{selectedDream.myTextarea}</div>
          </div>
        </div>
      )}
      <button className="button-list" onClick={goBackToList}>
        Back to my dream list
      </button>
    </div>
  );
}

export default DreamDetails;
