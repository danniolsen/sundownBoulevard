"use-strict";
import React, { useState } from "react";
import { makeStyles, Grid, TextField } from "@material-ui/core/";
import Paragraph from "./Paragraph";
import SundownButton from "./SundownButton";

function FindOrder(props) {
  const style = useStyles();
  const [inputEmail, setInputEmail] = useState("");

  const findOrderByEmail = (email) => {
    // validate email is valid
    // activate button when email is valid
  };

  return (
    <Grid container className={style.root}>
      <Grid item md={12} className={style.title}>
        <Paragraph bold uppercase>
          Find your order
        </Paragraph>
      </Grid>

      <Grid item md={12} className={style.label}>
        <Paragraph uppercase>Enter email</Paragraph>
      </Grid>

      <Grid item md={11}>
        <TextField
          className={style.input}
          placeholder="Enter your email"
          id="standard-full-width"
          defaultValue={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          fullWidth
          variant="outlined"
          size="small"
        />

        <SundownButton
          position="right"
          action={() => findOrderByEmail(inputEmail)}
        />
      </Grid>
    </Grid>
  );
}

export default FindOrder;

const useStyles = makeStyles((theme) => ({
  title: { marginBottom: 30 },
  label: { marginBottom: 10 },
  input: { marginBottom: 20 },
}));

/*
<Paragraph bold uppercase>
  Find your order
</Paragraph>

<Paragraph uppercase>Enter email</Paragraph>
<input type="email" placeholder="Enter your email" />
<SundownButton label="Find" />
*/

/*
import PropTypes from "prop-types";
FindOrder.defaultProps = {};
FindOrder.propTypes = {};*/
