import React from "react";
import "../src/CSS/Filter.css";
const Filter = ({ dropdown, setdropdown, setdisplaydata, paypal_data }) => {
  const today = new Date();

  return (
    <div className="filters">
      <h2>Filter by</h2>
      <div className="filter-btn">
        <select
          value={dropdown}
          onChange={(e) => {
            setdropdown(e.target.value);
            const priordate = new Date(
              new Date().setDate(today.getDate() - e.target.value)
            );
            setdisplaydata(
              paypal_data.filter((item) => {
                const itemDate = new Date(item.date);
                return itemDate > priordate;
              })
            );
          }}
        >
          <option value={365}>Date:Last 1 year</option>
          <option value={90}>Date:Last 90 days</option>
          <option value={60}>Date:Last 60 days</option>
          <option value={30}>Date:Last 30 days</option>
          <option value={14}>Date:Last 2 weeks</option>
          <option value={7}>Date:Last 1 week</option>
          <option value={1}>Date:Last 1 day</option>
        </select>
        <button>Type</button>
        <button>Status</button>
      </div>
      <h1>Completed</h1>
      <h2 style={{ color: "rgb(112, 111, 111)" }}>This week</h2>
    </div>
  );
};

export default Filter;
