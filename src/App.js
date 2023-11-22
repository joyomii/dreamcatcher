import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/style/globalStyles.css";
import Login from "./Pages/Login/Login.js";
import LandingPage from "./Pages/LandingPage/LandingPage.js";
import CreateDream from "./Pages/CreateDream/CreateDream.js";
import CaughtDream from "./Pages/CaughtDream/CaughtDream.js";
import ListOfDreams from "./Pages/ListOfDreams/ListOfDreams.js";
import ReReadDreams from "./Pages/ReReadDreams/ReReadDreams.js";
import { DreamProvider } from "./components/DreamContext.js";

function App() {
  return (
    <div className="App">
      <Router>
        <DreamProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/landingPage" element={<LandingPage />} />
            <Route path="/create-dream" element={<CreateDream />} />
            <Route path="/caught-dream" element={<CaughtDream />} />
            <Route path="/list-dreams" element={<ListOfDreams />} />
            <Route path="/reread-dreams" element={<ReReadDreams />} />
          </Routes>
        </DreamProvider>
      </Router>
    </div>
  );
}

export default App;
