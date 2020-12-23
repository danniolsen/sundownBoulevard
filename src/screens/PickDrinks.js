"use-strict";
import React, { useEffect, useState } from "react";
import { makeStyles, Grid } from "@material-ui/core/";
import fetchData from "../api/fetchData";
import OrderFlow from "../components/OrderFlow";
import { White, Primary } from "../components/Colors";
import Paragraph from "../components/Paragraph";
import Check from "../assets/check.svg";

const PickDrinks = (props) => {
  const style = useStyles();
  const [drinks, setDrinks] = useState([]);
  const [pickedDrinks, setPickedDrinks] = useState([]);

  const fetchDrinks = async () => {
    const result = await fetchData("https://api.punkapi.com/v2/beers");
    setDrinks(result);
  };

  useEffect(() => {
    fetchDrinks();
  }, []);

  const handleDrink = (drink) => {
    let pickedDrinksCopy = [...pickedDrinks];

    let newDrink = {
      id: drink.id,
      name: drink.name,
      image: drink.image_url,
    };

    const index = pickedDrinksCopy.findIndex(
      (drinkItem) => drinkItem.id === newDrink.id
    );
    let handleDrink =
      index === -1
        ? pickedDrinksCopy.push(newDrink)
        : pickedDrinksCopy.splice(index, 1);
    setPickedDrinks(pickedDrinksCopy);
    return handleDrink;
  };

  const isSelected = (drink, pickedDrinks) => {
    const result = pickedDrinks.find(({ id }) => id === drink.id);
    if (result) {
      return { border: "1px solid #F00" };
    }
    return null;
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
                onClick={() => handleDrink(drink)}
                className={style.drinkCon}
              >
                <div className={style.drink}>
                  {isSelected(drink, pickedDrinks) && (
                    <div className={style.checked}>
                      <img
                        className={style.checkMark}
                        src={Check}
                        alt="check mark"
                      />
                    </div>
                  )}
                  <div className={style.drinkImgCon}>
                    <img
                      className={style.drinkImg}
                      src={drink.image_url}
                      alt={drink.name}
                    />
                  </div>
                  <div className={style.drinkName}>
                    <Paragraph size={18}>
                      {drink.name.substring(0, 26)}
                    </Paragraph>
                  </div>

                  <div className={style.drinkAlc}>
                    <Paragraph>{`Alc ${drink.abv} %`}</Paragraph>
                  </div>
                </div>
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

export default PickDrinks;

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "row",
    display: "flex",
    marginBottom: 25,
  },
  drinkCon: {
    padding: 5,
  },
  drink: {
    width: "100%",
    paddingTop: "100%",
    position: "relative",
    background: White,
    cursor: "pointer",
    border: "1px solid #FFF",
    "&:hover": {
      border: `1px solid ${Primary}`,
    },
  },
  drinkImgCon: {
    position: "absolute",
    top: 0,
    left: 0,
    paddingTop: "10%",
    width: "100%",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  drinkImg: { height: 240 },
  drinkName: {
    position: "absolute",
    bottom: 15,
    left: 15,
    zIndex: 1000,
  },
  drinkAlc: {
    position: "absolute",
    bottom: 15,
    right: 15,
    zIndex: 1000,
  },
  checked: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2000,
    textAlign: "center",
    background: "rgba(255,255,255, 0.5)",
  },
  checkMark: {
    width: "20%",
    margin: "30% auto",
    display: "block",
  },
}));

/*
import PropTypes from "prop-types";
PickDrinks.defaultProps = {};
PickDrinks.propTypes = {};
*/
