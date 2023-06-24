import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Deck from "./Deck/Deck";
import {listDecks} from "../utils/api/index.js";

function Home(){
    const [decks, setDecks] = useState([]);

    useEffect(()=>{
        async function loadDecks(){
            const result = await listDecks();
            setDecks(result);
        }

        loadDecks();
    },[]);

    if(decks.length > 0){
        return (
            <section>
                <div className="mb-4">
                    <Link to="/decks/new" className="btn btn-secondary">Create Deck</Link>
                </div>
                <div>
                    {decks?.map((deck,index) => (<Deck data={deck} action={setDecks} key={index}/>))}
                </div>
            </section>
        );
    }

    return "Loading";
}

export default Home;