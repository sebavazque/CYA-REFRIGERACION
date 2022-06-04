import React from 'react'

import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';
import { useRef } from 'react';


const Contacto = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_bt76p1l', 'template_vl66jly', form.current, '_znAlsAEcMoJbuDWP')
        .then(result => toast.success(result.message))
        .catch(err => toast.error(err.message))
        .finally(() => {
            form.current.reset();
        })
    };


    return (
        <section className='secForm'>
            <div className='containerForm'>
                <div className='contactInfo'>
                    <div>
                        <h2>Nuestra info!</h2>
                        <ul className='info'>
                            <li>
                                <span></span>
                                <span>Rosario , Santa Fe</span>
                            </li>

                            <li>
                                <span></span>
                                <span>cyarefrigeracion9@gmail.com</span>
                            </li>

                            <li>
                                <span></span>
                                <span> 341 693 1872 </span>
                            </li>
                        </ul>
                    </div>

                    <ul className='sci'>
                        <li><a href="https://www.facebook.com/HnosVazquezRefrigeracion"> <AiFillFacebook/> </a></li>
                        <li><a href="https://www.instagram.com/carefrigeracion/"> <AiFillInstagram/> </a></li>
                    </ul>
                </div>       
                <div className='contactForm'>
                    <form ref={form} onSubmit={sendEmail} >
                    <h2>Contactanos</h2>
                    
                    <div className='formBox'>
                        
                        <div className='inputBox' id='w50'>
                            <input type="text" name='userName' required />
                            <span>Nombre y apellido </span>
                        </div>

                        <div className='inputBox' id='w50'>
                            <input type="email" name='userEmail' required />
                            <span>Correo</span>
                        </div>
                        <div className='inputBox' id='w50'>
                            <input type="text" name='userCel' required />
                            <span>Celular</span>
                        </div>
                        <div className='inputBox' id='w100'>
                            <textarea name='userMensaje' required></textarea>
                            <span>Escriba su mensaje</span>
                        </div>
                        <div className='inputBox' id='w100'>
                        <input type="submit" value="Enviar" />
                        </div>
                        
                    </div>
                    </form>
                </div>  
            </div>




        </section>
    )
}

export default Contacto