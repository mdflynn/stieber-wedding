import React, { useState } from "react";
import "./Rsvp.scss";

const Rsvp = () => {
  // const [attend, setAttend] = useState(null);
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGuestChange = (e) => {
    setGuests(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    if (name && guests && email) {
      e.preventDefault();
      // add emailJS
      alert("damn");
    } else {
      const errName = name ? '' : 'Name'
      const errGuests = guests ? '' : 'Number of Guests'
      const errEmail = email ? '' : 'eMail'
      alert(
        `Please complete the fields: \n
        ${errName} \n
        ${errGuests} \n
        ${errEmail}`
      );
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="segment">
        <h1 className="shimmer">RSVP</h1>
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
          value={message}
          onChange={handleMessageChange}
        ></textarea>
      </label>
      <button className="form-button icon" type="submit">
        Send
      </button>
    </form>
  );
};

export default Rsvp;
