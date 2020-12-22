"use-strict";
import React from "react";
import { makeStyles, Grid } from "@material-ui/core/";
import PropTypes from "prop-types";
import Paragraph from "./Paragraph";
import SundownButton from "./SundownButton";

const OrderFlow = (props) => {
  const style = useStyles();
  const { title, additionalText, btnLabel, action } = props;

  const goToView = () => {
    action();
  };

  return (
    <Grid container className={style.root}>
      <Paragraph bold>{title}</Paragraph>

      <div className={style.buttonCon}>
        <Paragraph>{additionalText}</Paragraph>
        <SundownButton
          label={btnLabel}
          primary
          position="center"
          action={() => goToView()}
        />
      </div>
    </Grid>
  );
};

export default OrderFlow;

const useStyles = makeStyles((theme) => ({
  root: { padding: 10 },
  buttonCon: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 220,
    padding: 20,
  },
}));

OrderFlow.defaultProps = {
  title: "Order flow",
  additionalText: "",
  btnLabel: "NEXT",
};

OrderFlow.propTypes = {
  title: PropTypes.string,
  additionalText: PropTypes.string,
  btnlabel: PropTypes.string,
};
