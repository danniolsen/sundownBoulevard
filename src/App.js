import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/";
import { Home, DishView, DrinksView, OrderView } from "./screens";

const App = () => {
  const style = useStyles();

  return (
    <div className="App">
      <Router>
        <Header />

        <div className={style.mainContent}>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/dishes" component={() => <DishView />} />
            <Route exact path="/drinks" component={() => <DrinksView />} />
            <Route exact path="/order" component={() => <OrderView />} />
            <Route exact path="/receipt" component={() => <p>receipt</p>} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

const useStyles = makeStyles((theme) => ({
  mainContent: { margin: "30px 0px", background: "#FFF", paddingBottom: 10 },
}));
//FuncName.defaultProps = {};
//FuncName.propTypes = {};
