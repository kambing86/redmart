import React from "react";

class Filter extends React.Component {
  render() {
    const { filter, onClick } = this.props;
    const { name, value, checked } = filter;
    const id = name + value;
    return (
      <div>
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={checked}
          readOnly
          onClick={() => {
            onClick({ name, value });
          }}
        />
        <label htmlFor={id}>{value}</label>
      </div>
    );
  }
}

export default Filter;
