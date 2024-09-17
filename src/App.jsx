import React from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
function App() {
  return (
    <div className="bg-gray-900 font-poppins">
      <Header />
      <Landing />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
