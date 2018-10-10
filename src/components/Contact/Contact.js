import React from "react";

const Contact = () => {
  return (
    <section className='contact'  id="Contact">
      <div className="contact-wrap">
        <div className="contact-wrap__side-banner">
          <h2>Contact Me!</h2>
        </div>

        <div className="contact-wrap__form-heading-wrap">
          <h2>Let's Work Together!</h2>
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
              <label htmlFor="Details">Details</label>
              <input type="text" required name="Details" id="Details" />
            </div>
            <button type="submit" className="contact-wrap__submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
