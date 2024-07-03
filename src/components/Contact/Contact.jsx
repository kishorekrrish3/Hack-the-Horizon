import React, { useState } from "react";

const Contact = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="contact">
      <h1 className="contact-title">GET IN TOUCH</h1>
      <form action="submit" className="contact-form">
        <div className="form-line-1">
          <input
            className="form-input-1 contact-form-input"
            type="text"
            placeholder="Name"
          />
          <input
            className="form-input-2 contact-form-input"
            type="number"
            placeholder="Phone"
          />
        </div>
        <div className="form-line-2">
          <input
            className="form-input-3 contact-form-input"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="form-line-3">
          <textarea
            id="textarea"
            value={text}
            onChange={handleChange}
            rows="8"
            cols="100"
            placeholder="Message"
            className="form-input-4 contact-form-textarea"
          ></textarea>
        </div>
        <button className="contact-form-btn" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Contact;
