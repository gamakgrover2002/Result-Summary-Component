import React from "react";
import "./App.css";
import Score from "./components/Score";
import Stats from "./components/Stats";
function App() {
  return (
    <div className="container">
      <Score />
      <Stats />
    </div>
  );
}

export default App;
