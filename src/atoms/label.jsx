import PropTypes from "prop-types";

const Label = ({ lblName, lblFor }) => {
  return <label htmlFor={lblFor}>{lblName} </label>;
};

Label.propTypes = {
  lblName: PropTypes.string,
  lblFor: PropTypes.string,
};

export default Label;
