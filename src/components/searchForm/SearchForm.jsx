import React, { Component } from "react";
import "./searchForm.sass";

export default class SearchForm extends Component {
  render() {
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
  }
}
