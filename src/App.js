import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Aboutus from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/about-us" component={Aboutus} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/contact-us" component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
