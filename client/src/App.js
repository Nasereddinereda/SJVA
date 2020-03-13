import React , {Fragment} from 'react';
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home";
import Tryro from "./components/routing/Tryro";
import Login from "./components/auth/Login";
import AddItem from "./components/pages/addItem";
import "./App.css";
import "./utils.css";

function App() {

  return (
  <Fragment>
    <Navbar />
    <Router>
      <Switch>
          <Tryro exact path="/addItem" component={AddItem}></Tryro>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
      </Switch>
    </Router>
  </Fragment>
  );
}

export default App;
