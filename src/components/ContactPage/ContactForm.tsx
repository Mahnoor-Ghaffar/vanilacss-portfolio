import React from 'react';

export const ContactForm = () => {
  return (
    <section className="down-box" id="contact">
      <div className="contactSkills">
        <div className="contact-info">
          <div className="main-text">
            <h1 className="section-title"> <span>C</span>ontact Me</h1>
            <span>get in touch with me</span>
          </div>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea name="#" id="" cols={30} rows={10} placeholder="Message"></textarea>
            <div className="formBtn">
              <button type="submit" className="btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
