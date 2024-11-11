import React, { useState } from 'react';
import './Inputs.css';

function Inputs({ onOpenCalendar }) {
  // État pour gérer la liste de villes visible ou non
  const [showCities, setShowCities] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [showGuests, setShowGuests] = useState(false); // Affiche ou masque la liste des invités
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const cities = [
    "Tunis", "Sfax", "Sousse", "Gabès", "Bizerte", "Nabeul", "Kairouan",
    "Ariana", "Gafsa", "Monastir", "Ben Arous", "Mahdia", "Kasserine",
    "Médenine", "Béja", "Jendouba", "Zaghouan", "Sidi Bouzid", "Kébili",
    "Siliana", "Tozeur", "Manouba", "Tataouine", "Le Kef"
  ];

  // Fonction pour gérer la sélection d'une ville
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setShowCities(false); // Masquer la liste des villes après sélection
  };

  // Fonction pour incrémenter ou décrémenter un nombre
  const handleIncrement = (setter, value, increment) => {
    setter(value + increment);
  };

  // Fonction pour fermer le champ des invités uniquement lorsque "Terminer" est cliqué
  const handleFinish = () => {
    setShowGuests(false); // Fermer la fenêtre des invités
  };

  return (
    <div className="inputs-container">
      <label>Sélectionner une ville</label>
      <input
        type="text"
        placeholder="Où allez-vous ?"
        value={selectedCity}
        onClick={() => setShowCities(!showCities)} // Afficher ou masquer la liste des villes au clic
        readOnly // Empêcher la modification manuelle
      />

      {/* Afficher la liste des villes uniquement si showCities est vrai */}
      {showCities && (
        <ul className="city-list">
          {cities.map((city) => (
            <li key={city} onClick={() => handleCitySelect(city)}>
              📍 {city}
            </li>
          ))}
        </ul>
      )}

      <input
        type="text"
        name="dates"
        placeholder="Date d'arrivée / Date de départ"
        onFocus={onOpenCalendar} // Ouvre le calendrier lorsqu'on clique sur ce champ
      />

      {/* Zone pour afficher et gérer les invités */}
      <div className="guests-input" onClick={() => setShowGuests(true)}>
        <input
          type="text"
          placeholder={`Adulte: ${adults} · Enfant: ${children} · Chambre: ${rooms}`}
          readOnly
        />

        {showGuests && (
          <div className="guests-dropdown">
            <div className="guests-row">
              <label>Adultes</label>
              <button onClick={() => handleIncrement(setAdults, adults, -1)}>-</button>
              <span>{adults}</span>
              <button onClick={() => handleIncrement(setAdults, adults, 1)}>+</button>
            </div>
            <div className="guests-row">
              <label>Enfants</label>
              <button onClick={() => handleIncrement(setChildren, children, -1)}>-</button>
              <span>{children}</span>
              <button onClick={() => handleIncrement(setChildren, children, 1)}>+</button>
            </div>
            <div className="guests-row">
              <label>Chambres</label>
              <button onClick={() => handleIncrement(setRooms, rooms, -1)}>-</button>
              <span>{rooms}</span>
              <button onClick={() => handleIncrement(setRooms, rooms, 1)}>+</button>
            </div>
            {/* Bouton Terminer pour fermer la fenêtre */}
            <button className="finish-button" onClick={handleFinish}>
              Terminer
            </button>
          </div>
        )}
      </div>

      <button>Rechercher</button>
    </div>
  );
}

export default Inputs;
