import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" required placeholder="abcd" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" required placeholder="abc@gmail.com" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <input
              type="text"
              required
              placeholder="Tell us ABout your Query...."
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
