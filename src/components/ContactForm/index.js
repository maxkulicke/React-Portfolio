import React from "react";
import Card from "./Card";
import Container from "../Container";


const Form = () => {

  return (
    <Container
      body={
        <div>
          <Card
            title="Get In Touch!"
            text="Drop me a message and i'll get back to you soon!"
          />
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
      }
    />
  );
}

export default Form;
