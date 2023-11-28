// DreamContext.js
import React, { createContext, useContext, useState } from "react";

const DreamContext = createContext();

export const useDreamContext = () => {
  return useContext(DreamContext);
};

export const DreamProvider = ({ children }) => {
  const [dreams, setDreams] = useState([]);
  const [selectedDream, setSelectedDream] = useState(null);

  const addDream = (dream) => {
    setDreams((prevDreams) => [...prevDreams, dream]);
  };

  return (
    <DreamContext.Provider
      value={{ dreams, addDream, selectedDream, setSelectedDream }}
    >
      {children}
    </DreamContext.Provider>
  );
};
