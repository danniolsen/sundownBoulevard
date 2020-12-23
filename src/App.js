import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/";
import { Home, PickDish, PickDrinks } from "./screens";

const App = () => {
  const style = useStyles();

  return (
    <div className="App">
      <Router>
        <Header />

        <div className={style.mainContent}>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/dishes" component={() => <PickDish />} />
            <Route exact path="/drinks" component={() => <PickDrinks />} />
            <Route exact path="/order" component={() => <p>order</p>} />>
            <Route exact path="/receipt" component={() => <p>receipt</p>} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

const useStyles = makeStyles((theme) => ({
  mainContent: { margin: "30px 0px" },
}));
//FuncName.defaultProps = {};
//FuncName.propTypes = {};
