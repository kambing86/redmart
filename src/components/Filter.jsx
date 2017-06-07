import React from "react";

class Filter extends React.Component {
  render() {
    const { filter, onClick } = this.props;
    const { name, value, checked } = filter;
    return (
      <div
        onClick={() => {
          onClick({ name, value });
        }}
        role="presentation"
      >
        <input type="checkbox" id={name} name={name} value={value} checked={checked} readOnly />
        <label htmlFor={name}>{value}</label>
      </div>
    );
  }
}

export default Filter;
