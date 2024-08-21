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
      <input className="view" onChange={changeEvent} value={search} placeholder="Search-Bar" />
      {
        <ul className="border">
          {filterSearch.map((item, i) => (
            <button className="view" key={i}>{item}</button>
          ))}
        </ul>
      }
    </div>
  );
}
export default DropdownSearch;
