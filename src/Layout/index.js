import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "../Screens/Home";
import Deck from "../Screens/Deck";
import NotFound from "./NotFound";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/decks">
            <Deck/>
          </Route>
          <Route>
            <NotFound/> 
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
