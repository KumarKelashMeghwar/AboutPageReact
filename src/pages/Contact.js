import "../components/Books.css";
import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const Contact =() => {

  const [name, setName] = useState('');
  const [emailAddress, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const isEmailValid = emailAddress => {
          const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return regex.test(String(emailAddress).toLowerCase());
}; // regular expressions to ensure valid email is entered 

  const submit =() => {
    if (name && emailAddress && message) {

        const serviceId = 'service_i3nxcla';
        const templateId = 'template_ycvurb8';
        const userId = 'cAuGuIWaSMgW0tjHj';
        const templateParams = {
            name,
            emailAddress,
            message
        };

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => console.log(response))
            .then(error => console.log(error));
       

        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(true);
    } else {
        alert('Please enter all fields.');
    }
      // email is sent only when all fields are entered 

}

    return (
        <div id="contact-form">
            <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)}/>
            <input type="email" placeholder="email-address" value={emailAddress} onChange={e => setEmail(e.target.value)} />
            <textarea placeholder="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <button onClick={submit}>Send</button> 
            <span className={emailSent ? 'visible' : null}>Thank you for your email</span>
        </div>
    );
};

// elements which triggers events are returned

export default Contact;
