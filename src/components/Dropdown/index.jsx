import React from "react";
import "./index.css";

const Dropdown = ({ data = [], handleClick }) => {
  return (
    <div className="Dropdown">
      {data.map((item) => (
        <div
          key={item.id}
          className="Dropdown-item"
          onClick={() => {
            handleClick(item);
          }}
        >
          <img
            className="Dropdown-img"
            alt={item.name}
            src={item.profile_photo_url}
          ></img>
          <span>{item.name}</span>
          <span>{item.email}</span>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
