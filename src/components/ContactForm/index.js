import React, { useState } from "react";
import Card from "../Card";
import Container from "../Container/index";
import Button from "../Button/index"


function ContactForm() {

  // const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(event);

    fetch('http://localhost:3002/send',{
        method: "POST",
        body: JSON.stringify(formObject),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
    	(response) => (response.json())
       ).then((response)=>{
      if (response.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.status === 'fail'){
        alert("Message failed to send.")
      }
    })
    // if (formObject.title && formObject.author) {
    //   API.saveBook({
    //     title: formObject.title,
    //     author: formObject.author,
    //     synopsis: formObject.synopsis
    //   })
    //     .then(res => console.log("woof"))
    //     .catch(err => console.log(err));
    // }
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  return (
    <div>
      <h2>Get In Touch!</h2>
      <h5>Drop me a message and i'll get back to you soon!</h5>
      <form>
        <div className="form-group">
          <input
            type="name"
            className="form-control"
            id="nameInput"
            placeholder="your name (required)"
            onChange={handleInputChange}
            name="Name"
          ></input>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="emailAddressInput"
            onChange={handleInputChange}
            name="email"
            placeholder="email (required)"
          ></input>
        </div>
        <div className="form-group">
          <textarea
            className="form-control" id="messageTextArea" rows="3"
            onChange={handleInputChange}
            name="message"
            placeholder="leave your message here"
          ></textarea>
        </div>
        <Button onClick={handleFormSubmit}>Send</Button>
      </form>
    </div>
  );
}

export default ContactForm;
