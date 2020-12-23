"use-strict";
import React from "react";
import { makeStyles, Grid, TextField } from "@material-ui/core/";
import { White } from "../components/Colors";
import Paragraph from "../components/Paragraph";
import SundownButton from "../components/SundownButton";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { connect } from "react-redux";

function OrderView(props) {
  const style = useStyles();

  const selectDate = (event) => {
    console.log(event);
  };

  const selectTime = (event) => {
    console.log(event.target.value);
    console.log(new Date());
  };

  return (
    <div className={style.root}>
      <Grid container>
        <Grid item xs={12} className={style.spacer}>
          <Paragraph bold size={20}>
            ORDER HEADER
          </Paragraph>
        </Grid>

        <Grid container>
          <Grid item xs={5} className={style.spacer}>
            <div className={style.title}>
              <Paragraph>PICK DATE AND TIME</Paragraph>
            </div>
            <Calendar
              className={style.box}
              minDate={new Date()}
              onChange={(event) => selectDate(event)}
            />
            <TextField
              className={style.inputTime}
              id="time"
              label="Alarm clock"
              type="time"
              defaultValue="12:00"
              onChange={(event) => selectTime(event)}
            />
          </Grid>
          <Grid item xs={7} className={style.box}>
            <div className={style.title}>
              <Paragraph>SELECT AMOUNT OF PEOPLE</Paragraph>
            </div>
            <div className={style.title}>
              <Paragraph>ENTER EMAIL</Paragraph>
            </div>
          </Grid>
        </Grid>

        <SundownButton label="ORDER" position="right" />
      </Grid>
    </div>
  );
}

export default connect(null, null)(OrderView);

const useStyles = makeStyles((theme) => ({
  root: { background: White, padding: 10 },
  spacer: { padding: 10, marginBottom: 10 },
  box: { width: "100%", padding: theme.spacing(1) },
  title: { marginBottom: 10 },
  inputTime: {
    padding: theme.spacing(1),
    width: "100%",
  },
}));
