import React from "react";
import "../src/CSS/Filter.css";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

const Filter = () => {
  return (
    <div className="payment_details">
      <div className="content">
        <Avatar
          sx={{ bgcolor: deepOrange[500] }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        >
          B
        </Avatar>
        <div className="details"></div>
        <div className="details1">
          <p>
            Name.com Inc.
            <br />
            <span>June 22 . Automatic Payment</span>
          </p>
        </div>
        <div className="amount">
          <p>-$9.89</p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
