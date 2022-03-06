import React from 'react';
import './contact.css';
import {MdMailOutline} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0zj7oo8', 'template_13k29sg', form.current, 'LU0uMW7JkgOMBF7C0')

    e.target.reset()
      
      };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>imalsham092@gmail.com</h5>
            <a href="mailto:imalsham092@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Imalsha Ranepura</h5>
            <a href="https://www.facebook.com/" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+123456789234567</h5>
            <a href="https://api.whatsapp.com/send?phone+2333786688" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Massage</button>

        </form>
      </div>
    </section>
  )
}

export default Contact