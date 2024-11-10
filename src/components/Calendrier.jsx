import React, { useState } from 'react';
import { DatePicker } from 'react-responsive-calendar-picker';
import 'react-responsive-calendar-picker/dist/index.css';
import './Calendrier.css'; // Assurez-vous d'importer le fichier CSS

function Calendrier({ open, onClose }) {
  const [dates, setDates] = useState({
    checkin: new Date(),
    checkout: new Date(new Date().setDate(new Date().getDate() + 1)),
  });

  if (!open) return null; // Masque le calendrier si open est false

  return (
    <div className="calendar-modal"> {/* Utilisation de la classe CSS pour le modal */}
      <DatePicker
        dates={dates}
        setDates={setDates}
        open={open}
        setOpen={onClose} // Ferme le calendrier lors de la sélection de dates
        mobile={window.innerWidth <= 800}
      />
    </div>
  );
}

export default Calendrier;
