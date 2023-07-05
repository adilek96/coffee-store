import React from "react";
import "./searchForm.sass";

const SearchForm = () => {
  return (
    <div className="search">
      <label htmlFor="search">
        Lookiing for
        <input name="search" type="text" placeholder="Start typing here..." />
      </label>
      <label htmlFor="filter">
        Or filter
        <div className="btn-group">
          <button>Brazil</button>
          <button>Kenya</button>
          <button>Colubmia</button>
        </div>
      </label>
    </div>
  );
};

export default SearchForm;
