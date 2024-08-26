import React from "react";
import SideMenu from "./layouts/SideMenu";
import MainRouter from "./layouts/MainRouter";
import "./styles/App.css"

function App() {
  return (
    <div className="App">
      <SideMenu/>
      <MainRouter/>
    </div>
  );
}

export default App;
