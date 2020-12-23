"use-strict";
import React, { useEffect, useState } from "react";
import { makeStyles, Grid } from "@material-ui/core/";
import fetchData from "../api/fetchData";
import OrderFlow from "../components/OrderFlow";
import { connect } from "react-redux";
import Drink from "../components/Drink";
import { useHistory } from "react-router-dom";

const DrinksView = (props) => {
  const style = useStyles();
  const { order, drinksDis } = props;
  const [drinks, setDrinks] = useState([]);
  const history = useHistory();

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

  const goToOrder = () => {
    history.push("/order");
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
        <OrderFlow action={() => goToOrder()} />
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

export default connect(mapStateToProps, mapDispatchToProps)(DrinksView);

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "row",
    display: "flex",
    marginBottom: 25,
  },
  drinkCon: {
    padding: "0px 5px 10px 5px",
  },
}));

/*
import PropTypes from "prop-types";
DrinksView.defaultProps = {};
DrinksView.propTypes = {};
*/
