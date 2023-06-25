import React, { useState } from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import "../src/CSS/Activity.css";
import Transaction from "./Transaction";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import { BiSearch } from "react-icons/bi";
import { RiDownload2Fill } from "react-icons/ri";
import paypal_data from "./data/paypal_dataset.json";

const Activity = () => {
  const Iconstyle = { color: "rgb(0, 48, 135)", fontSize: "1.5em" };

  const [dropdown, setdropdown] = useState(365);

  const [displaydata, setdisplaydata] = useState(paypal_data);

  paypal_data.sort((a, b) => new Date(b.date) - new Date(a.date)); //sort the transaction by date

  const displayTrans = () => {
    if (displaydata?.length > 0) {
      return displaydata?.map((data) => {
        return <Transaction key={data.id} paypal_data={data} />; //Filter the transaction
      });
    } else {
      return <h1>No Transactions found</h1>;
    }
  };

  return (
    <div className="activity">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="search">
        <TextField
          placeholder="Search by name or email"
          type="text"
          variant="standard"
          InputProps={{
            disableUnderline: true,

            style: { color: "black", fontWeight: "600" },
            startAdornment: (
              <InputAdornment position="start">
                <BiSearch />
              </InputAdornment>
            ),
          }}
        />

        <div className="download">
          <RiDownload2Fill style={Iconstyle} />
        </div>
      </div>
      <div className="filter">
        <Filter
          dropdown={dropdown}
          setdropdown={setdropdown}
          setdisplaydata={setdisplaydata}
          paypal_data={paypal_data}
        />
      </div>
      <div className="transactions-list">{displayTrans()}</div>
    </div>
  );
};

export default Activity;
