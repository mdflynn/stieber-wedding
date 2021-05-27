import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Rsvp.scss";

const Rsvp = () => {
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

      emailjs
        .send(
          "service_rygy3c1",
          "template_qgr3q7a",
          {
            name,
            guests,
            email,
            message,
          },
          "user_SWyu6G36NmjN0H1xzQ0Xc"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    } else {
      const errName = name ? "" : "Name";
      const errGuests = guests ? "" : "Number of Guests";
      const errEmail = email ? "" : "eMail";
      alert(
        `Please complete the fields: \n
        ${errName} \n
        ${errGuests} \n
        ${errEmail}`
      );
    }
  };

  return (
    <div className="form-div">
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
            placeholder="Total Adults Attending"
            value={guests}
            onChange={handleGuestChange}
          />
        </label>
        <label className="form-label">
          <input
            className="form-input"
            type="email"
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
    </div>
  );
};

export default Rsvp;
