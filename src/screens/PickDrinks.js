"use-strict";
import React, { useEffect, useState } from "react";
import { makeStyles, Grid } from "@material-ui/core/";
import fetchData from "../api/fetchData";
import OrderFlow from "../components/OrderFlow";
import { connect } from "react-redux";
import Drink from "../components/Drink";

const PickDrinks = (props) => {
  const style = useStyles();
  const { order, drinksDis } = props;
  const [drinks, setDrinks] = useState([]);

  const fetchDrinks = async () => {
    const result = await fetchData("https://api.punkapi.com/v2/beers");
    setDrinks(result);
  };

  useEffect(() => {
    fetchDrinks();
  }, []);

  const handleDrinks = (drink) => {
    let orderCopy = { ...order };

    let newDrink = {
      id: drink.id,
      name: drink.name,
      image: drink.image_url,
    };

    const index = orderCopy.drinks.findIndex(
      (drinkItem) => drinkItem.id === newDrink.id
    );

    let handleDrink =
      index === -1
        ? orderCopy.drinks.push(newDrink)
        : orderCopy.drinks.splice(index, 1);
    drinksDis(orderCopy);
    return handleDrink;
  };

  return (
    <Grid container>
      <Grid item sm={12} md={8}>
        <Grid container>
          {drinks.map((drink) => {
            return (
              <Grid
                xs={12}
                sm={6}
                md={6}
                item
                key={drink.id}
                onClick={() => handleDrinks(drink)}
                className={style.drinkCon}
              >
                <Drink order={order} drink={drink} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item sm={12} md={4}>
        <OrderFlow action={() => console.log("go now")} />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  order: state.order.order,
});
const mapDispatchToProps = (dispatch) => ({
  drinksDis: (payload) => dispatch({ type: "SET_DISH", payload: payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(PickDrinks);

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "row",
    display: "flex",
    marginBottom: 25,
  },
  drinkCon: {
    padding: 5,
  },
}));

/*
import PropTypes from "prop-types";
PickDrinks.defaultProps = {};
PickDrinks.propTypes = {};
*/
