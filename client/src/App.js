import React , {Fragment} from 'react';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home";
// import Page from "./components/pages/page";
import Tryro from "./components/routing/Tryro";
import Login from "./components/auth/Login";
import AddItem from "./components/pages/addItem";
import PageItem from "./components/items/pageItem";
import pageEvent from "./components/events/pageEvent";
import Registration from "./components/pages/Registration";
import RegistrationAdmins from "./components/registration/RegistrationPage";
import AboutUs from "./components/pages/aboutUs";
import "./App.css";
import "./utils.css";
import "./mobile.css";
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {



  return (
  <Fragment>
    <Router>
      <Navbar />
      <Switch>
          <Tryro exact path="/addItem" component={AddItem}></Tryro>
          <Tryro exact path="/Admins/Registration" component={RegistrationAdmins}></Tryro>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/page/:id" component={PageItem}></Route>
          <Route exact path="/event/:id" component={pageEvent}></Route>
          <Route exact path="/Registration" component={Registration}></Route>
          <Route exact path="/aboutUs" component={AboutUs}></Route>
      </Switch>
      <Footer />
    </Router>
  </Fragment>
  );
}

export default App;
