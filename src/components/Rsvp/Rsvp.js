import React, { useState } from "react";
import "./Rsvp.scss";

const Rsvp = () => {
  const [attend, setAttend] = useState(null);

  return (
    <form>
      <div class="segment">
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
        <textarea rows="4" cols="50"></textarea>
      </label>
      <button class="red" type="button">
        <i class="icon ion-md-lock"></i> Send
      </button>
    </form>
  );
};

export default Rsvp;
