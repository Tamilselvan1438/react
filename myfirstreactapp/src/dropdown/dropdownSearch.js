import React, { useState, useEffect } from "react";
import "./dropdown.css";

function DropdownSearch() {
  const animals = ["dog", "cat", "donkey", "monkey"];
  const [search, setSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState(animals);
  

  useEffect(() => {
    setFilterSearch(
      animals.filter((item) => item.includes(search))
    );
  }, [search, filterSearch]);

  const changeEvent = (element) => {
    setSearch(element.target.value);
  };

  return (
    <div>
      <input
        onChange={changeEvent}
        value={search}
        placeholder="Search-Bar"
      />
      {
        <ul>
          {filterSearch.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </ul>
      }
    </div>
  );
}
export default DropdownSearch;
