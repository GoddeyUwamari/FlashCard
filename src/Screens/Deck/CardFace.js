import React from "react";
import { Link } from "react-router-dom";
import { deleteCard } from "../../utils/api";

function Card({data: card, action: setDeck}){
    function handleDelete(){
        const result = window.confirm("Delete this Card!");
        if(result){
            deleteCard(card.id).then(() => {
                setDeck(deck => {
                    return {
                        ...deck, 
                        cards: deck.cards.filter((c) => c.id !== card.id)
                    }
                });
            });
        }
    }
    return (
        <section className="border rounded mb-1 p-4">
            <div className="d-flex justify-content-between">
                <p>{card.front}</p>
                <p>{card.back}</p>
            </div>
            <div>
                <Link to={`/decks/${card.deckId}/cards/${card.id}/edit`} className="btn btn-secondary mr-2">Edit</Link>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>
        </section>
    );
}

export default Card;