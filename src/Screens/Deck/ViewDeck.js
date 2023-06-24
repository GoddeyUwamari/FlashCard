import React, {useState, useEffect} from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, deleteDeck } from "../../utils/api";
import Card from "./CardFace";

function ViewDeck(){

    const deckId = useParams().deckId;
    const [deck, setDeck] = useState(null);
    const history = useHistory();

    function handleDelete(){
        const result = window.confirm("Delete this Deck!");
        if(result){
            deleteDeck(deckId).then(()=>{
                history.push("/");
            });
        }
    }

    useEffect(() => {
        readDeck(deckId).then((response) => {
            setDeck(response);
        });
    },[]);

    if(deck){
        return (
            <section>
                <div className="w-fit bg-light mb-4 p-3 rounded d-flex align-items-center">
                    <p className="m-0"><Link className="text-info" to="/">Home</Link> / <span className="text-info">{deck.name}</span></p>
                </div>

                <h4 className="mb-4">{deck.name}</h4>
                <p className="mb-4">{deck.description}</p>

                <div className="d-flex justify-content-between mb-4">
                    <div>
                        <Link to={`/decks/${deckId}/edit`} className="btn btn-secondary mr-2">Edit</Link>
                        <Link to={`/decks/${deckId}/study`} className="btn btn-primary mr-2">Study</Link>
                        <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">Add Cards</Link>
                    </div>
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>  

                <h2 className="my-4">Cards</h2>
                {deck.cards.map((card,index) => {
                    return (<Card data={card} action={setDeck} key={index}/>);
                })}
            </section>
        );
    }

    return "Loading";
}

export default ViewDeck;