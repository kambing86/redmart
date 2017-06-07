import React from "react";

const Filter = ({ filter, onClick }) => {
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
};

export default Filter;
