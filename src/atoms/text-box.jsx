import React from "react";
import PropTypes from "prop-types";

const TextBox = ({ tbFor, tbVal, tbOnChange, tbType }) => {
  return (
    <input
      type={tbType}
      htmlFor={tbFor}
      value={tbVal}
      onChange={e => tbOnChange(e)}
    />
  );
};

TextBox.defaultValues = {
  tbType: "text",
};

TextBox.propTypes = {
  tbFor: PropTypes.string,
  tbVal: PropTypes.string,
  tbOnChange: PropTypes.func,
  tbType: PropTypes.string,
};

export default TextBox;
