import React from "react";
import "./App.scss";
import MainPage from "../MainPage/MainPage";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import Rsvp from "../Rsvp/Rsvp";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/gallery" component={Gallery} />
        <Router path="/rsvp" component={Rsvp} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
