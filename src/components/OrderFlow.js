"use-strict";
import React from "react";
import { makeStyles, Grid } from "@material-ui/core/";
import PropTypes from "prop-types";
import Paragraph from "./Paragraph";
import SundownButton from "./SundownButton";
import { connect } from "react-redux";

const OrderFlow = (props) => {
  const style = useStyles();
  const { title, btnLabel, action } = props;
  const { dish, drinks } = props.order;

  const goToView = () => {
    action();
  };

  return (
    <Grid container className={style.root}>
      <Paragraph bold>{title}</Paragraph>

      <div className={style.buttonCon}>
        <div className={style.orderListCon}>
          <Paragraph>{dish.strMeal}</Paragraph>

          {drinks.map((drink) => {
            return (
              <Paragraph size={13} key={drink.id}>
                - {drink.name}
              </Paragraph>
            );
          })}
        </div>
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

const mapStateToProps = (state) => ({
  order: state.order.order,
});

export default connect(mapStateToProps, null)(OrderFlow);

const useStyles = makeStyles((theme) => ({
  root: { padding: 10 },
  buttonCon: {
    width: "100%",
    flexDirection: "column",
    height: 220,
    padding: 20,
  },
  orderListCon: {
    minHeight: 200,
  },
}));

OrderFlow.defaultProps = {
  title: "Order flow",
  btnLabel: "NEXT",
};

OrderFlow.propTypes = {
  title: PropTypes.string,
  btnlabel: PropTypes.string,
};
