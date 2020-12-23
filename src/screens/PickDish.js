"use-strict";
import React, { useEffect, useState } from "react";
//import PropTypes from "prop-types";
import { makeStyles, Grid } from "@material-ui/core/";
import { connect } from "react-redux";
import fetchData from "../api/fetchData";
import Paragraph from "../components/Paragraph";
import OrderFlow from "../components/OrderFlow";
import SundownButton from "../components/SundownButton";
import { useHistory } from "react-router-dom";

function PickDish(props) {
  const style = useStyles();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const { order, setDish, drinks } = props;

  const getRandomDish = async () => {
    let orderCopy = { ...order };
    const dish = await fetchData(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );

    orderCopy.dish.idMeal = dish.meals[0].idMeal;
    orderCopy.dish.strMeal = dish.meals[0].strMeal;
    orderCopy.dish.strCategory = dish.meals[0].strCategory;
    orderCopy.dish.strMealThumb = dish.meals[0].strMealThumb;

    setDish(orderCopy);
    setLoading(false);
  };

  useEffect(() => {
    if (!order.orderDone) {
      getRandomDish();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToNext = () => {
    history.push("/drinks");
  };
  console.log(drinks);
  return (
    <Grid container>
      <Grid item xs={12} sm={8}>
        {!loading && (
          <img
            src={order.dish.strMealThumb}
            alt="dish"
            className={style.image}
          />
        )}
      </Grid>
      <Grid item xs={12} sm={4}>
        <OrderFlow
          title="Something"
          additionalText="Testing text if long"
          action={() => goToNext()}
        />
      </Grid>

      <Grid item xs={12} sm={8} className={style.dishInfo}>
        {!loading && (
          <Paragraph bold size={20}>
            {order.dish.strMeal}
          </Paragraph>
        )}

        <Paragraph>Add ingerdiences</Paragraph>
      </Grid>

      <Grid item xs={12} sm={8}>
        <SundownButton
          position="right"
          label="GENERATE NEW"
          action={() => getRandomDish()}
        />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  order: state.order.order,
  drinks: state.order,
});

const mapDispatchToProps = (dispatch) => ({
  setDish: (payload) => dispatch({ type: "SET_DISH", payload: payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(PickDish);

const useStyles = makeStyles((theme) => ({
  root: { background: "#CCC" },
  image: { width: "100%", height: 400, objectFit: "cover", overflow: "hidden" },
  dishInfo: { padding: 15 },
}));

//PickDish.defaultProps = {};
//PickDish.propTypes = {};
