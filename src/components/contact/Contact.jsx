import React from 'react'
import './contact.css'
import {BiMailSend, BiLogoWhatsapp} from 'react-icons/bi'
import ContactOption from './ContactOption'

import emailjs from 'emailjs-com';
import { useRef } from 'react'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_2xerr0h", "template_nx6rqje", form.current, "rN2xNPghh5SCTtz44")
      .then((result) => {
        window.alert("Mensagem Enviada! Agradeço o contato, responderei o mais breve possível.")
        e.target.reset()
          
      }, (error) => {
          console.log(error.text);
      });
  };

  const mailtoRef = useRef('mailto:333.erick@gmail.com');
  const whatsappRef = useRef('https://wa.me/5531992855944');

  return (
    <section id='contact'>
      <h5>se quiser falar comigo, aqui estão alguns dos</h5>
      <h2>Meus Contatos</h2>

      <div className="container contact__container">

        <div className="contact__options">

          <ContactOption icon={<BiMailSend className='contact__option-icon'/>} title="Email" content="333.erick@gmail.com" link={mailtoRef}/>
          <ContactOption icon={<BiLogoWhatsapp className='contact__option-icon'/>} title="WhatsApp" content="(31) 9 9285-5944" link={whatsappRef}/>

        </div>


        <form ref={form} onSubmit={sendEmail}>
          <h4>Enviar uma mensagem direta</h4>
          <input type="text" name='name' placeholder='Como eu posso te chamar' required />
          <input type="email" name='email' placeholder='Seu Email' required />
          <textarea name="message"  rows="7" placeholder='Conteúdo da sua mensagem' required></textarea>
          
          <button type='submit' className='btn btn-primary'>
            Enviar mensagem direta
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contact