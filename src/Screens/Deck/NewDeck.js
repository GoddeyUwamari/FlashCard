import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";

function NewDeck(){
    const [form, setForm] = useState({
        name: '',
        description: ''
    });
    const history = useHistory();

    function handleChange(event){
        setForm((oldValues) => {
            return {...oldValues, [event.target.name]: event.target.value}
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        createDeck(form).then((response) => {
            setForm({
                name: '',
                description: ''
            });
            history.push("/decks/"+response.id);
        });
    }

    return (
        <section>
            <div className="w-fit bg-light mb-4 p-3 rounded d-flex align-items-center">
                <p className="m-0"><Link className="text-info" to="/">Home</Link> / <span className="text-info">Create Deck</span></p>
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
                    <Link to="/" className="btn btn-secondary mr-2">Cancel</Link>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </section>
    );
}

export default NewDeck;