import React from "react";
import Filter from "../Filter/Filter";
import Stars from "../Stars/Stars";
import "./header.css";

const Header = ({ setFilterText, setFilterRate, filterRate }) => {
  return (
    <div className="header">
      <h1> Find Your Movie </h1>

      <div className="filter">
        <Filter isEdit={true} setFilterText={setFilterText} />
        <Stars
          myclass="stars-edit"
          setFilterRate={setFilterRate}
          filterRate={filterRate}
        />
      </div>
    </div>
  );
};

export default Header;
