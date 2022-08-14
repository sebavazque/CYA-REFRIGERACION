import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <div >
            <Fade bottom>
                    <div className='row'>
                        <div className='presu'>
                            
                            <h2>Pedinos tu presupuesto sin compromiso!</h2>
                            
                    
                    
                    <Link to='/contacto' ><button className='btnPresu'>Solicitar presupuesto</button></Link>
                    </div>
                    
            </div>
        <footer>

            <div className='footer'>
                
                <ul className='iconsFoot'>
                    <li><a href="https://www.facebook.com/HnosVazquezRefrigeracion"> <AiFillFacebook/> </a></li>
                    <li><a href="https://www.instagram.com/carefrigeracion/"> <AiFillInstagram/> </a></li>
                </ul>
                <ul className='menuFoot'>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/productos'>Productos</Link></li>
                <li><Link to='/galeria'>Galeria</Link></li>
                <li><Link to='/contacto'>Contacto</Link></li>
                </ul>
                <p>© 2022 C&A Refrigeración.</p>
                <p className='p'>By Seba Vazquez</p>
            </div>
        </footer>
        </Fade>
        </div>
    )
}

export default Footer