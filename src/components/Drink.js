"use-strict";
import React from "react";
import { makeStyles } from "@material-ui/core/";
import Check from "../assets/check.svg";
import Paragraph from "../components/Paragraph";
import { White, Primary } from "../components/Colors";

const Drink = (props) => {
  const { drink, order } = props;
  const style = useStyles();

  const isSelected = (drink, order) => {
    const result = order.drinks.find(({ id }) => id === drink.id);
    if (result) {
      return { border: "1px solid #F00" };
    }
    return null;
  };

  return (
    <div className={style.drink}>
      {isSelected(drink, order) && (
        <div className={style.checked}>
          <img className={style.checkMark} src={Check} alt="check mark" />
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
        <Paragraph size={18}>{drink.name.substring(0, 26)}</Paragraph>
      </div>

      <div className={style.drinkAlc}>
        <Paragraph>{`Alc ${drink.abv} %`}</Paragraph>
      </div>
    </div>
  );
};

export default Drink;

const useStyles = makeStyles((theme) => ({
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
}));
