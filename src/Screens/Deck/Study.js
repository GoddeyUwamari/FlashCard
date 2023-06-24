import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import Card from "./Card";

function Study(){
    const deckId = useParams().deckId;
    const [deck, setDeck] = useState(null);

    useEffect(() => {
        readDeck(deckId).then((response) => {
            setDeck(response);
        });
    },[]);

    if(deck){
        let content;
        if(deck.cards.length > 2){
            content = (
                <Card data={deck.cards}/>
            );
        }
        else{
            content = (
                <section>
                    <h2 className="mb-2">Not enough cards</h2>
                    <p className="mb-2">You need at least 3 cards to study. There are {deck.cards.length} cards in this deck.</p>
                    <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">Add Cards</Link>
                </section>
            );
        }

        return (
            <section>
                <div className="w-fit bg-light mb-4 p-3 rounded d-flex align-items-center">
                    <p className="m-0"><Link className="text-info" to="/">Home</Link> / <span className="text-info">{deck.name} /</span><span> Study</span></p>
                </div>

                <h1 className="mb-4">Study: {deck.name}</h1>
                
                {content}
            </section>
        );
    }

    return "Loading";
}

export default Study;