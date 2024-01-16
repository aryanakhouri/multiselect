import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown";
import data from "../../data/users.json";
import "./index.css";

const MultiSelect = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [allItems, setAllItems] = useState(data.users);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelect = (item) => {
    setInputValue("");
    setSelectedItems((pre) => [...pre, item]);
    setAllItems((pre) => {
      return pre.filter((ele) => ele.id !== item.id);
    });
  };

  const handleRemoveItem = (item) => {
    setAllItems((pre) => [...pre, item]);
    setSelectedItems((pre) => {
      return pre.filter((ele) => ele.id !== item.id);
    });
  };
  useEffect(() => {
    const filteredItems = data.users.filter((item) => {
      if (selectedItems.map((item) => item.id).includes(item.id)) {
        return false;
      }
      if (item.name.toLowerCase().includes(inputValue.toLowerCase())) {
        return true;
      }
      return false;
    });
    setAllItems(filteredItems);
  }, [inputValue]);

  return (
    <div className="MultiSelect">
      <h1>Pick User</h1>
      <div className="MultiSelect-search-bar">
        {!!selectedItems.length && (
          <div className="MultiSelect-selected">
            {selectedItems.map((item) => (
              <div
                className="MultiSelect-selected-item"
                key={item.id}
                onClick={() => {
                  handleRemoveItem(item);
                }}
              >
                <img
                  className="Dropdown-img"
                  alt={item.name}
                  src={item.profile_photo_url}
                ></img>
                <span>{item.name}</span> X
              </div>
            ))}
          </div>
        )}
        <input
          placeholder="add new user"
          className="MultiSelect-input"
          value={inputValue}
          onChange={handleInput}
          type="text"
        ></input>
      </div>
      <Dropdown data={allItems} handleClick={handleSelect} />
    </div>
  );
};

export default MultiSelect;
