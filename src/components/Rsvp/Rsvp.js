import React, { useState } from "react";
import "./Rsvp.scss";

const Rsvp = () => {
  const [attend, setAttend] = useState(null);

  return (
    <form>
      <div className="segment">
        <h1>RSVP</h1>
      </div>
      <label className="form-label">
        <input className="form-input" type="text" placeholder="Name" />
      </label>
      <label className="form-label">
        <input className="form-input" type="number" min={0} placeholder="Number of Guests" />
      </label>
      <label className="form-label">
        <input className="form-input" type="text" placeholder="Email Address" />
      </label>
      <label className="form-label">
        <textarea rows="4" cols="50" placeholder="   Message (optional)"></textarea>
      </label>
      <button className="form-button" type="button">
        <i className="icon ion-md-lock"></i> Send
      </button>
    </form>
  );
};

export default Rsvp;
