"use-strict";
import { makeStyles, Grid, TextField } from "@material-ui/core/";
import { White } from "../components/Colors";
import Paragraph from "../components/Paragraph";
import SundownButton from "../components/SundownButton";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function OrderView(props) {
  const style = useStyles();
  const history = useHistory();
  const { order, orderDis, allOrders, allOrderDis } = props;

  const selectDate = (event) => {
    let orderCopy = { ...order };
    orderCopy.date = event;
    orderDis(orderCopy);
  };

  const selectTime = (event) => {
    let orderCopy = { ...order };
    orderCopy.time = event.target.value;
    orderDis(orderCopy);
  };

  const handleGuests = (guests) => {
    let orderCopy = { ...order };
    if (guests <= 10 && guests >= 1) {
      orderCopy.guests = guests;
      orderDis(orderCopy);
    }
  };

  const enterEmail = (email) => {
    let orderCopy = { ...order };
    orderCopy.email = email.target.value;
    orderDis(orderCopy);
  };

  const createOrder = () => {
    let allOrdersCopy = { ...allOrders };

    const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,2}$/;
    if (regex.test(order.email)) {
      allOrdersCopy.orderlist.push(order);
      allOrderDis(allOrdersCopy);
      history.push("/receipt");
    }
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
              defaultValue={new Date(order.date)}
              onChange={(event) => selectDate(event)}
            />
            <TextField
              className={style.inputTime}
              id="time"
              label="Pick time"
              type="time"
              value={order.time}
              onChange={(event) => selectTime(event)}
            />
          </Grid>
          <Grid item xs={7} className={style.box}>
            <div className={style.title}>
              <Paragraph>SELECT AMOUNT OF PEOPLE</Paragraph>
              <p onClick={() => handleGuests(order.guests + 1)}>+</p>
              <p onClick={() => handleGuests(order.guests - 1)}>-</p>
              <p>{order.guests}</p>
            </div>

            <div className={style.title}>
              <Paragraph>ENTER EMAIL</Paragraph>
              <TextField
                type="email"
                variant="outlined"
                size="small"
                value={order.email}
                onChange={(email) => enterEmail(email)}
                placeholder="Enter email"
              />
            </div>
          </Grid>
        </Grid>

        <SundownButton
          action={() => createOrder()}
          label="ORDER"
          position="right"
        />
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => ({
  allOrders: state.allOrders,
  order: state.order.order,
});

const mapDispatchToProps = (dispatch) => ({
  orderDis: (payload) => dispatch({ type: "SET_DISH", payload: payload }),
  allOrderDis: (payload) =>
    dispatch({ type: "SET_ALL_ORDERS", payload: payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderView);

const useStyles = makeStyles((theme) => ({
  root: { background: White, padding: 10 },
  spacer: { padding: 10, marginBottom: 10 },
  box: { width: "100%", padding: theme.spacing(1) },
  title: { marginBottom: 10 },
  inputTime: {
    padding: theme.spacing(1),
    width: "100%",
    marginTop: 15,
  },
}));
