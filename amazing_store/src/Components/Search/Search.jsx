import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <form className="searchBar">
      <i className="fas fa-search" />
      <input type="text" placeholder="Search products by SKU or name" />
    </form>
  );
};
export default Search;
