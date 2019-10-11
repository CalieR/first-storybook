import React from "react";
import PropTypes from "prop-types";

export default function Image({ image: { url, title } }) {
  return (
    <div>
      <img src={url} alt={title}></img>
    </div>
  );
}

Image.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
};
