import React from "react";
import Navbar from "./Navbar";

import "../src/CSS/Navbar.css";
import Filter from "./Filter";

const Activity = () => {
  return (
    <div className="activity">
      <Navbar />
      <Filter />
    </div>
  );
};

export default Activity;
