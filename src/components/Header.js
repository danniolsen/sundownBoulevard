"use-strict";
import React from "react";
import { makeStyles } from "@material-ui/core/";
import { useHistory } from "react-router-dom";
import Logo from "../assets/beach.svg";
import Paragraph from "./Paragraph";
import { connect } from "react-redux";

function Header(props) {
  const style = useStyles();
  const history = useHistory();
  const { orderDis } = props;

  const goHome = () => {
    orderDis();
    history.replace("/");
  };

  return (
    <header>
      <nav className={style.navBar}>
        <div className={style.navItem}>
          <img
            className={style.logo}
            onClick={() => goHome()}
            src={Logo}
            alt="sundown logo"
          />
        </div>

        <div className={style.navItem}>
          <Paragraph primary>RESTAURANTER</Paragraph>
        </div>

        <div className={style.navItem}>
          <Paragraph primary>PRODUKTER</Paragraph>
        </div>

        <div className={style.navItem}>
          <Paragraph primary>NYHEDSBREV</Paragraph>
        </div>

        <div className={style.navItem}>
          <Paragraph primary>KONTAKT</Paragraph>
        </div>
      </nav>
    </header>
  );
}

const mapDispatchToProps = (dispatch) => ({
  orderDis: (payload) => dispatch({ type: "CLEAR_ORDER" }),
});

export default connect(null, mapDispatchToProps)(Header);

const useStyles = makeStyles((theme) => ({
  navBar: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: { width: 50, cursor: "pointer" },
  navItem: {
    width: "20%",
    textAlign: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.8",
    },
  },
}));
