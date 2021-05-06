import React, { useState } from "react";
import "./Rsvp.scss";

const Rsvp = () => {
  const [attend, setAttend] = useState(null);
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(0);
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGuestChange = (e) => {
    setGuests(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

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
        <input
          className="form-input"
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={handleEmailChange}
        />
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
