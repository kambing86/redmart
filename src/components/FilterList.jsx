import React from "react";

import Filter from "./Filter.jsx";

import "./FilterList.scss";

class FilterList extends React.Component {
  render() {
    const { filters, onClearClick, onFilterClick } = this.props;
    const headerArray = filters.reduce((acc, filter) => {
      if (!acc.includes(filter.header)) {
        return acc.concat(filter.header);
      }
      return acc;
    }, []);
    const filterCategoryArray = headerArray.map((header, index) => {
      const valueArray =
        filters.filter(filter => filter.header == header)
          .map((filter, index2) => {
            return (
              <Filter key={index2} filter={filter} onClick={onFilterClick} />
            );
          });
      return (
        <div key={index}>
          <h3>{header}</h3>
          {valueArray}
        </div>
      );
    });
    return (
      <div className="col-100">
        {filterCategoryArray}
        <button className="btn-clear" onClick={() => {
          onClearClick();
        }}>Clear All</button>
      </div>
    );
  }
}

export default FilterList;
