import React from "react";
import "./App.scss";
import MainPage from "../MainPage/MainPage";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import Location from "../Location/Location";
import Rsvp from "../Rsvp/Rsvp";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/rsvp" component={Rsvp} />
        <Route path="/location" component={Location} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
