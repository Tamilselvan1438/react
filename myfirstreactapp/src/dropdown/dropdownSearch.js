import React, { useState, useEffect, useMemo } from "react";
import "./dropdown.css";

const animals = ["dog", "cat", "donkey", "monkey"];

function DropdownSearch() {
  const [search, setSearch] = useState("");
  // const [filterSearch, setFilterSearch] = useState(animals);

  // useEffect(() => {
  //   setFilterSearch(animals.filter((item) => item.includes(search)));
  // }, [search, filterSearch]);
      
const filterSearch = useMemo(() => {
  return animals.filter((item) => item.includes(search));
}, [search]);

  const changeEvent = (element) => {
    setSearch(element.target.value);
  };

  return (
    <div>
      <input onChange={changeEvent} value={search} placeholder="Search-Bar" />
      {
        <ul>
          {filterSearch.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      }
    </div>
  );
}
export default DropdownSearch;
