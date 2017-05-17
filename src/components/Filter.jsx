import React from "react";

class Filter extends React.Component {
  render() {
    const { filter, onClick } = this.props;
    const { name, value, checked } = filter;
    return (
      <div onClick={() => {
        onClick({ name, value });
      }}>
        <input type="checkbox" name={name} value={value} checked={checked} readOnly />
        <label>{value}</label>
      </div>
    );
  }
}

export default Filter;
