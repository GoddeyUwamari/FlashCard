import React from "react";
import { Link } from "react-router-dom";
import {deleteDeck} from "../../utils/api/index.js";

function Deck({data: deck, action: setDecks}){
    function handleDelete(id){
        const result = window.confirm("You will not be able to recover it.");
        if(result){
            deleteDeck(id).then(()=>{
                setDecks(oldValues => {
                    return oldValues.filter((value) => value.id !== id);
                });
            });
        }
    }
    return (
        <section className="border rounded mb-2 p-4">
            <header className="d-flex justify-content-between">
                <h4>{deck.name}</h4>
                <span>{deck.cards.length > 1 ? deck.cards.length + ' cards' : deck.cards.length + ' card'}</span>
            </header>
            <article>
                <p>{deck.description}</p>
            </article>
            <div className="d-flex justify-content-between">
                <div>
                    <Link to={ `/decks/${deck.id}`} className="btn btn-secondary mr-1">View</Link>
                    <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">Study</Link>
                </div>
                <button type="button" className="btn btn-danger" onClick={() => handleDelete(deck.id)}>Delete</button>
            </div>
        </section>
    );
}

export default Deck;