import React, {useState, useEffect} from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api";

function EditDeck(){
    const [form, setForm] = useState({
        id: '',
        name: '',
        description: ''
    });
    const history = useHistory();
    const [deck,setDeck] = useState('');
    const deckId = useParams().deckId;

    function handleChange(event){
        setForm((oldValues) => {
            return {...oldValues, [event.target.name]: event.target.value}
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        updateDeck(form).then((response) => {
            setForm({
                id: '',
                name: '',
                description: ''
            });
            history.push("/decks/"+deckId);
        });
    }

    useEffect(() => {
        readDeck(deckId).then((response) => {
            setForm(response);
            setDeck(response.name);
        });
    },[]);

    return (
        <section>
            <div className="w-fit bg-light mb-4 p-3 rounded d-flex align-items-center">
                <p className="m-0"><Link className="text-info" to="/">Home</Link> / <span className="text-info">{deck}</span> /<span>Edit Deck</span></p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-4 d-flex flex-column">
                    <label>Name</label>
                    <input name="name" value={form.name} onChange={handleChange} className="form-control" type="text" placeholder="Deck Name"/>
                </div>
                <div className="mb-4 d-flex flex-column">
                    <label>Description</label>
                    <textarea name="description" value={form.description} onChange={handleChange} className="form-control" placeholder="Brief description of the deck"></textarea>
                </div>
                <div>
                    <Link to={`/decks/${deckId}`} className="btn btn-secondary mr-2">Cancel</Link>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </section>
    );
}

export default EditDeck;