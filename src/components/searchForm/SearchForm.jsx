import React, { useState } from "react";
import "./searchForm.sass";

const SearchForm = ({ onSortingTriggerChange, onFindTriggerChange }) => {
  const [inputValue, setInputValue] = useState("");
  // при нажатии на  сортировку name записывается стейт в компоненте SecondPage
  const sort = (e) => {
    onSortingTriggerChange(e.target.name);
  };
  // при введения текста в поле поиска value записывается в стейт и передается в SecondPage
  const find = (e) => {
    setInputValue(e.target.value);
    onFindTriggerChange(e.target.value);
  };

  return (
    <section>
      <div className="search">
        <label htmlFor="search">
          <p>Lookiing for</p>
          <input
            name="search"
            type="text"
            placeholder="Start typing here..."
            onInput={find}
            value={inputValue}
          />
        </label>
        <label htmlFor="filter">
          <p>Or filter</p>
          <div className="btn-group">
            <button name="All" onClick={sort}>
              All
            </button>
            <button name="Brazil" onClick={sort}>
              Brazil
            </button>
            <button name="Kenya" onClick={sort}>
              Kenya
            </button>
            <button name="Colombia" onClick={sort}>
              Colobmia
            </button>
          </div>
        </label>
      </div>
    </section>
  );
};

export default SearchForm;
