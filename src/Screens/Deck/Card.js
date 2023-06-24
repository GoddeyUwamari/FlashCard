import React, {useState} from "react";

function Card({data: cards}){
    const [selectedCard, setSelectedCard] = useState(0);
    const [side, setSide] = useState('front');

    function handleSelectedCard(current){
        setSelectedCard(current);
        setSide('front');
    }

    function handleNext(){
        let current = selectedCard + 1;
        current < cards.length && handleSelectedCard(current);
    }

    return (
        <section className="border rounded mb-2 p-4">
            <h3>Card {selectedCard + 1} of {cards.length}</h3>
            <h5 className="mb-4">{cards[selectedCard][side]}</h5>
            <button className="btn btn-secondary mr-2" onClick={() => setSide('back')}>Flip</button>
            {(side === 'back') && <button onClick={handleNext} className="btn btn-primary">Next</button>}
        </section>
    );
}

export default Card;