import React from 'react'
import { Link } from 'react-router-dom';
import camara2 from './GaleriaComp/galeria/camaras/camara2.jpeg'
import batea1 from './GaleriaComp/galeria/bateas/batea1.jpg'
import heladera1 from './GaleriaComp/galeria/heladeras/heladera1.jpg'
import proyecto4 from './GaleriaComp/galeria/proyectos/proyecto4.jpg'

const Nosotros = () => {




    return (
        <div className='aboutContainer'>
            <h2>Un poco sobre nosotros...</h2>
            <div className='textContainer'>
                <div class="aboutText">
                        
                        <h3> En C&A  nuestro mundo es la refrigeración, somos una empresa familiar nacida en Rosario con más de 35 años en el rubro del frío. </h3>
                        <h3>Contamos con clientes en San Lorenzo, Santa Fe, Parana , Buenos Aires , Cruz Alta , etc.</h3>
                    

                        <p> Nos dedicamos  a la comercialización, distribución y puesta en marcha de cámaras de frigoríficas, heladeras y bateas de todo tipo, centrales de frio , aires comerciales, equipos de frio, chillers para cerveza , etc</p> 
                                    
                        <p> Uno de nuestros fuertes es ofrecer la posibilidad de desarrollar la fabricacion o modificacion de proyectos especiales para cada uno de nuestros cliente </p>    
                    
                        <p> Nuestro mayor capital son nuestros clientes asique trabajamos permanentemente para superarnos  y  adecuándonos a su demanda asesorando sus necesidades para lograr juntos el mejor resultado. </p>
                </div>
            </div>
            <h2>Algunos de nuestros trabajos...</h2>
        <div className='gallery'>
                    <div className='galeContent'>
                        <img src={camara2} />
                        <p>Camaras Frigorificas!</p> 
                        <Link to="/galeria/camaras" ><button>Ver mas fotos</button></Link>
                    </div>

                    <div className='galeContent'>
                        <img src={batea1} />
                        <p>Bateas!</p> 
                        <Link to="/galeria/bateas" ><button>Ver mas fotos</button></Link>
                    </div>

                    <div className='galeContent'>
                        <img src={heladera1} />
                        <p>Heladeras!</p> 
                        <Link to="/camaras" ><button>Ver mas fotos</button></Link>
                    </div>


        </div>

        </div>
    )
}

export default Nosotros