import React from "react";
import "../src/CSS/Transaction.css";
import Avatar from "@mui/material/Avatar";
import { deepOrange, lightBlue } from "@mui/material/colors";

const Transaction = ({ paypal_data }) => {
  return (
    <div className="payment_details">
      <div className="avatar">
        <Avatar sx={{ bgcolor: lightBlue[500] }} alt="Remy Sharp">
          {paypal_data.name.slice(0, 1)}
        </Avatar>
      </div>
      <div className="details">
        <h1>{paypal_data?.name}</h1>
        <p>{paypal_data.date + " " + paypal_data.date} . Automatic Payment</p>
      </div>
      <div className="amount">
        {paypal_data?.mode === "sent" ? (
          <h1>{"- $" + paypal_data?.amount}</h1>
        ) : (
          <h1>{"+ $" + paypal_data?.amount}</h1>
        )}
      </div>
    </div>
  );
};

export default Transaction;
