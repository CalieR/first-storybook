import React from "react";
import PropTypes from "prop-types";

export default function Input({ input: { type, placeholder } }) {
  return (
    <div>
      <input type={type} placeholder={placeholder}></input>
    </div>
  );
}

Input.propTypes = {
  input: PropTypes.shape({
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
  })
};
