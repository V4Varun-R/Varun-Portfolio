import React, { useState } from 'react'
import './Contact.scss'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../../Components/Button/Button';

export default function Contact() {
  const form = useRef();
  const [username , setusername]=useState("");
  const [useremail , setuseremail]=useState("");
  const [usermessage,setusermessage]=useState("");
  const [nameerror , setnameerror] = useState(false);
  const [emailerror , setemailerror] = useState(false);
  const [messageerror , setmessageerror] = useState(false);
  const setname = (e) =>{
    setusername(e.target.value);
    if(username != ""){
      setnameerror(false);
    }
  }
  const setemail = (e) => {
    setuseremail(e.target.value);
    if(useremail != ""){
      setemailerror(false);
    }
  }
  const setmessage = (e) => {
    setusermessage(e.target.value);
    if(useremail != ""){
      setmessageerror(false);
    }
  }
  const sendEmail = (e) => {
    e.preventDefault();
    if(usermessage==""){
      console.log("Enter User Name");
      setnameerror(true);
    }
    if(useremail==""){
    console.log("Enter Email");
    setemailerror(true);
    }
    if(usermessage==""){
      console.log("Enter Message");
      setmessageerror(true);
      }
    else{
      emailjs.sendForm('service_btmu8xi', 'template_dzwwcaj', form.current, 'gVGf4bvayrdO3loVA')
        .then((result) => {
            console.log("message sent");
            clearfield();
        }, (error) => {
            console.log(error.text);
        });
    }
  };
  const clearfield = () => {
    setusername("");
    setuseremail("");
    setusermessage("");
  }
  return (
    <div>
      <div className="contact-page container">
        <div className='contact-details'>
          <h1>Contact Me</h1>
          <div className='personal-details'>
            <div className="contact-content">
              <i className="bi bi-envelope-fill"></i>
              <span>iamvarooney@gmail.com</span>
            </div>
            <div className="contact-content">
              <i className="bi bi-telephone-fill"></i>
              <span>0123456799</span>
            </div>
          </div>
          <div className="social-media">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter"></i>
          </div>
        </div>
        <div className='form-content'>
        {/* <h2>Get in Touch</h2> */}
          <form ref={form} onSubmit={sendEmail} className='contact-form'>
            <div className='input-field'>
            <label>Full Name</label>
            <input type="text" name="user_name" onChange={setname}/>
            {nameerror ? <span>Please Enter the Name</span> : ""}
            </div >
            <div className='input-field'>
            <label>Email</label>
            <input type="email" name="user_email" onChange={setemail}/>
            {emailerror ? <span>Please Enter the Email</span> : ""}
            </div>
            <div className='input-field'>
            <label>Message</label>
            <textarea name="message" rows="5" onChange={setmessage}/>
            {messageerror ? <span>Please Enter the Message</span> : ""}
            </div>
            {/* <button type="submit" className="">Send</button> */}
            <Button name="Send" type="submit"></Button>
          </form>
        </div> 
      </div> 
    </div>
  )
}
