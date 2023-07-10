import React, { useEffect, useState } from "react";

import "./searchForm.sass";

const SearchForm = ({ onSortingTriggerChange, onFindTriggerChange }) => {
  const [inputValue, setInputValue] = useState("");

  const [searchActive, setSearchActive] = useState("");
  const [sortActive, setSortActive] = useState("btn-group");
  // при нажатии на  сортировку name записывается стейт в компоненте SecondPage
  const sort = (e) => {
    onSortingTriggerChange(e.target.name);
  };
  // при введения текста в поле поиска value записывается в стейт и передается в SecondPage
  const find = (e) => {
    setInputValue(e.target.value);
    onFindTriggerChange(e.target.value);
  };

  const onTapFind = (e) => {
    if (searchActive === "" && sortActive === "btn-group") {
      setSearchActive("active");
    } else {
      setSearchActive("");
    }
  };

  const onTapSort = (e) => {
    if (sortActive === "btn-group" && searchActive === "") {
      setSortActive("btn-group sort-active");
    } else {
      setSortActive("btn-group");
    }
  };

  return (
    <section>
      <div className="search">
        <label htmlFor="search">
          <p>Lookiing for</p>
          <input
            className={searchActive}
            name="search"
            type="text"
            placeholder="Start typing here..."
            onInput={find}
            value={inputValue}
          />
        </label>
        <label htmlFor="filter">
          <p>Or filter</p>
          <div className={sortActive}>
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
        <div className="icon-bar">
          <button onClick={onTapSort}>
            <img src="../img/filter-circle.svg" alt="sort" />
          </button>
          <button onClick={onTapFind}>
            <img src="../img/search.svg" alt="search" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
