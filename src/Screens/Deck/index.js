import React from "react";
import { Route, Switch } from "react-router-dom";
import Study from "./Study";
import NewDeck from "./NewDeck";
import EditDeck from "./EditDeck";
import ViewDeck from "./ViewDeck";
import NewCard from "./NewCard";
import EditCard from "./EditCard";

function Deck(){
    return (
        <Switch>
          <Route path="/decks/new">
            <NewDeck/>
          </Route>
          <Route exact path="/decks/:deckId">
            <ViewDeck/>
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck/>
          </Route>
          <Route path="/decks/:deckId/study">
            <Study/>
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <NewCard/>
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard/>
          </Route>
        </Switch>
    );
}

export default Deck;