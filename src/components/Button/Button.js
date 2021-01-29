import React from "react";
import PropTypes from "prop-types";
import classes from "./Button.module.css";

export default function Button({ handleClick }) {
  return (
    <>
      <button type="button" onClick={handleClick} className={classes.button}>
        Load more ;)
      </button>
    </>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
