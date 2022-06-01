import React from 'react'
import { BsArrowDown} from "react-icons/bs";

const Empresa = () => {
    return (
    
        <div className='s4' id='empresa'>
            
            <h2>Sobre nosotroso...</h2>
            <div className='bs'>
                <BsArrowDown/>
            </div>
            <div class="boxTex">
                
                <h3> En C&A Refrigeración nuestro mundo es la refrigeración, somos una empresa familiar nacida en Rosario con más de 35 años en el rubro del frío. Contamos con clientes en San Lorenzo, Santa Fe, Parana , Buenos Aires , Cruz Alta , etc.</h3>
            
                <p> Nos dedicamos  a la comercialización, distribución y puesta en marcha de cámaras de frigoríficas, heladeras y bateas de todo tipo, centrales de frio , aires comerciales, equipos de frio, chillers para cerveza , etc</p> 
                            
                <p> Uno de nuestros fuertes es ofrecer la posibilidad de desarrollar la fabricacion o modificacion de proyectos especiales para cada uno de nuestros cliente </p>    
            
                <p> Nuestro mayor capital son nuestros clientes asique trabajamos permanentemente para superarnos  y  adecuándonos a su demanda asesorando sus necesidades para lograr juntos el mejor resultado. </p>

            </div>
        </div>
    )
}

export default Empresa