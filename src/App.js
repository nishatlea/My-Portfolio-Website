import "./App.css";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./components/Footer";
import { AudioIntro } from "./components/AudioIntro";
import { Education } from "./components/Education";
import { Achievements } from "./components/Achievements";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <AudioIntro />
      <Footer />
    </div>
  );
}
export default App;
