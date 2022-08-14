import React from 'react'
import './Nosotros.css'
import { useEffect } from 'react'

const Nosotros = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='containerAbout' id='nosotros'>
         
        <div className='aboutRow'>
           <h2>Conócenos!</h2>
            <p>En C&A nuestro mundo es la refrigeración, somos una empresa familiar nacida en Rosario con más de 35 años en el rubro del frío. </p>
            <p> Nos dedicamos  a la comercialización, distribución y puesta en marcha de cámaras de frigoríficas, heladeras y bateas de todo tipo, centrales de frío , aires comerciales, equipos de frío, chillers para cerveza , etc</p>
            <p>Contamos con clientes en San Lorenzo, Santa Fe, Parana , Buenos Aires , Cruz Alta , etc.</p>
            <p>Uno de nuestros fuertes es ofrecer la posibilidad de desarrollar la fabricación o modificación de proyectos especiales para cada uno de nuestros cliente</p>
            <p>Nuestra misión es ofrecer la mejor calidad en productos de refrigeración, heladeras, bateas, aires comerciales, equipos de frío, chillers para cerveza, etc.</p>
        </div>
    </div>
  )
}

export default Nosotros