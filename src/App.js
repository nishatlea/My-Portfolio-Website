import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Banner } from "./components/Banner";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
