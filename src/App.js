import React from "react";
import './App.css';
import SearchBar from "./Components/SearchBar";
import StateData from "./Data.json";

function App() {
  return <div className="App">
    <SearchBar placeholder="Look for ..." data={StateData} />
  </div>;
}

export default App;
