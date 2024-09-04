import React from "react";
import SideMenu from "./layouts/SideMenu";
import MainRouter from "./layouts/MainRouter";
import "./styles/App.css"
import DialogProvider from "./layouts/DialogProvider";
import TestButton from "./components/TestButton";

function App() {
  return (
    <div className="App">
      {/*<DialogProvider>*/}
      {/*  <MainRouter/>*/}
      {/*</DialogProvider>*/}
      <TestButton/>
    </div>
  );
}

export default App;
