import React from "react";

const Contact = () => {
  return (
    <section className="contact-wrap" id="Contact">
      <h2>Let's Get In Touch!</h2>
      <form>
        <div className="contact-wrap__input-wrap">
          <label htmlFor="firstName">First Name</label>
          <input type="text" required name="firstName" id="firstName" />
        </div>
        <div className="contact-wrap__input-wrap">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" required name="lastName" id="lastName" />
        </div>
        <div className="contact-wrap__input-wrap">
          <label htmlFor="subject">Subject</label>
          <input type="text" required name="subject" id="subject" />
        </div>
        <div className="contact-wrap__input-wrap">
          <label htmlFor="Message">Message</label>
          <textarea type="text" required name="Message" id="Message" />
        </div>
        <button type="submit" className="contact-wrap__submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
