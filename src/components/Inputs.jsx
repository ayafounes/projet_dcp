import React from 'react';
import './Inputs.css';

function Inputs({ onOpenCalendar }) {
  return (
    <div className="inputs-container">
      <input type="text" name="destination" placeholder="Où allez-vous ?" />
      <input
        type="text"
        name="dates"
        placeholder="Date d'arrivée / Date de départ"
        onFocus={onOpenCalendar} // Ouvre le calendrier lorsqu'on clique sur ce champ
      />
      <input type="text" name="guests" placeholder="Combien de personnes ?" />
      <button>Rechercher</button>
    </div>
  );
}

export default Inputs;
