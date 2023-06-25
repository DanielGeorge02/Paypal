import React from "react";
import "../src/CSS/Navbar.css";
import { useNavigate } from "react-router-dom";
import { RiSettings5Fill } from "react-icons/ri";
import { BiSolidBell } from "react-icons/bi";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="tab">
        <img src={require("./images/logo.png")} alt="logo"></img>
        <button onClick={() => navigate("/")}> Home</button>
        <button>Finances</button>
        <button>Send and Request</button>
        <button>Deals</button>
        <button>Wallet</button>
        <button
          onClick={() => navigate("/Activity")}
          style={{ backgroundColor: "rgb(39,64,155)" }}
        >
          Activity
        </button>
        <button>Help</button>
      </div>
      <div className="settings">
        <BiSolidBell style={{ margin: "10px", color: "white" }} />

        <RiSettings5Fill style={{ margin: "10px", color: "white" }} />
        <button>LOG OUT</button>
      </div>
    </nav>
  );
};

export default Navbar;
