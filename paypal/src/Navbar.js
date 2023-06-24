import React from "react";
// import logo from "./images/logo.png";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={require("./images/logo.png")} alt="logo"></img>
      </div>
      <button> Home</button>
      <button>Finances</button>
      <button>Send and Request</button>
      <button>Deals</button>
      <button>Wallet</button>
      <button>Activity</button>
      <button>Help</button>
    </nav>
  );
};

export default Navbar;
