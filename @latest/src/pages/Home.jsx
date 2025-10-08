

import React from "react";
import Navbar from "../components/NavBar";
import Home from "../components/Home";
import "../scss/Home.scss";

function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default HomePage;

