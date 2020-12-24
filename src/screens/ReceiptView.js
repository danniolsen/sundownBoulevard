"use-strict";
import React from "react";
import { makeStyles, Grid } from "@material-ui/core/";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import SundownButton from "../components/SundownButton";

function ReceiptView(props) {
  const style = useStyles();
  const history = useHistory();
  const { order } = props;

  const goHome = () => {
    history.push("/");
  };

  return (
    <Grid container className={style.root}>
      <SundownButton
        position="right"
        label="BACK TO HOME"
        action={() => goHome()}
      />
      <pre>{JSON.stringify(order, null, 2)}</pre>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  order: state.order.order,
});

export default connect(mapStateToProps, null)(ReceiptView);

const useStyles = makeStyles((theme) => ({
  root: {},
}));
