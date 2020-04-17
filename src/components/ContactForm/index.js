import React from "react";
import { ImageCard, BasicCard } from "../Card";
import Container from "../Container/index";


const ContactForm = () => {

  return (
    <div>
      <h2>Get In Touch!</h2>
      <h5>Drop me a message and i'll get back to you soon!</h5>
      <form>
        <div className="form-group">
          <label for="nameInput">Name</label>
          <input type="name" className="form-control" id="nameInput" placeholder="your name"></input>
        </div>
        <div className="form-group">
          <label for="emailAddressInput">Email address</label>
          <input type="email" className="form-control" id="emailAddressInput" placeholder="name@example.com"></input>
        </div>
        <div className="form-group">
          <label for="messageTextArea">Leave your message here</label>
          <textarea className="form-control" id="messageTextArea" rows="3"></textarea>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
