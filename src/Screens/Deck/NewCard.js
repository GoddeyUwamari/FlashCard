import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";

function NewCard(){
    const [form, setForm] = useState({
        front: '',
        back: ''
    });
    const [deck, setDeck] = useState({});
    const deckId = useParams().deckId;

    function handleChange(event){
        setForm((oldValues) => {
            return {...oldValues, [event.target.name]: event.target.value}
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        createCard(deckId,form).then((response) => {
            setForm({
                front: '',
                back: ''
            });
        });
    }

    useEffect(() => {
        readDeck(deckId).then((response) => {
            setDeck(response);
        });
    },[]);

    return (
        <section>
            <div className="w-fit bg-light mb-4 p-3 rounded d-flex align-items-center">
                <p className="m-0"><Link className="text-info" to="/">Home</Link> / <span className="text-info">{deck.name}</span> /<span> Add Card</span></p>
            </div>

            <h2 className="mb-4">{deck.name}: Add Card</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4 d-flex flex-column">
                    <label>Front</label>
                    <textarea name="front" value={form.front} onChange={handleChange} className="form-control" type="text" placeholder="Front side of card"></textarea>
                </div>
                <div className="mb-4 d-flex flex-column">
                    <label>Back</label>
                    <textarea name="back" value={form.back} onChange={handleChange} className="form-control" type="text" placeholder="Back side of card"></textarea>
                </div>
                <div>
                    <Link to={`/decks/${deckId}`} className="btn btn-secondary mr-2">Done</Link>
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
        </section>
    );
}

export default NewCard;