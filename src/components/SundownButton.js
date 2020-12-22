"use-strict";
import React from "react";
import { Primary, White } from "./Colors";
import { makeStyles } from "@material-ui/core/";
import PropTypes from "prop-types";

const SundownButton = (props) => {
  const style = useStyles();
  const { label, action, position, disabled } = props;

  const handleButtonAction = () => {
    action();
  };

  return (
    <div className={style.root} style={{ textAlign: position }}>
      <button
        className={style.button}
        disabled={disabled}
        onClick={() => handleButtonAction()}
      >
        {label}
      </button>
    </div>
  );
};

export default SundownButton;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    bottom: 15,
    [theme.breakpoints.down("sm")]: {
      position: "initial",
    },
  },
  button: {
    width: "100%",
    maxWidth: 250,
    padding: 15,
    border: "none",
    background: Primary,
    color: White,
    borderRadius: 20,
    cursor: "pointer",
    opacity: "0.9",
    textTransform: "uppercase",
    "&:hover": {
      opacity: 1,
    },
  },
  "&:active": {
    background: "#DED",
  },
}));

SundownButton.defaultProps = {
  label: "NEXT",
  position: "left",
  disabled: false,
  action: () => console.log("Button pressed"),
};

SundownButton.propTypes = {
  label: PropTypes.string,
  position: PropTypes.string,
  disabled: PropTypes.bool,
  action: PropTypes.func,
};
