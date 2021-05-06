import React, { useState } from "react";
import "./Rsvp.scss";

const Rsvp = () => {
  const [attend, setAttend] = useState(null);
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGuestChange = event => {
      setGuests(event.target.value)
  }

  return (
    <form>
      <div className="segment">
        <h1>RSVP</h1>
      </div>
      <label className="form-label">
        <input
          className="form-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="form-label">
        <input
          className="form-input"
          type="number"
          min={0}
          placeholder="Number of Guests"
          value={guests}
          onChange={handleGuestChange}
        />
      </label>
      <label className="form-label">
        <input className="form-input" type="text" placeholder="Email Address" />
      </label>
      <label className="form-label">
        <textarea
          rows="4"
          cols="50"
          placeholder="   Message (optional)"
        ></textarea>
      </label>
      <button className="form-button" type="button">
        <i className="icon ion-md-lock"></i> Send
      </button>
    </form>
  );
};

export default Rsvp;
