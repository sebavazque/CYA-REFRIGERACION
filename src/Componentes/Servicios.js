import React from 'react'
import Lottie from 'react-lottie';
import herra from './Animaciones/herra.json'
import hand from './Animaciones/hand.json'
import ideas from './Animaciones/idea.json'
import Fade from 'react-reveal/Fade';

const herraData = {loop: true, autoplay: true, animationData: herra}
const handData = {loop: true, autoplay: true, animationData: hand}
const ideaData = {loop: true, autoplay: true, animationData: ideas}

const Servicios = () => {
  return (

    <div className='s2'>
      <Fade bottom>
    <h2>Servicios</h2>


    <div className='cards'>
        <div className='card'>
            <Lottie options={herraData} height={200} width={200}/>
            <h4>Mantenimiento</h4>
            <span>Nuestro equipo esta capacitado para poder resolver cualquier tipo de problemas, estamos siempre listos para actuar lo antes posible.</span>
        </div>
        <div className='card'>
            <Lottie options={ideaData} height={200} width={200}/>
            <h4>Creatividad</h4>
            <span>Contamos con un equipo de asesoramiento y asistencia técnica desde su consulta hasta el mantenimiento de los equipos.</span>
        </div>
        <div className='card'>
          <Lottie options={handData} height={200} width={200}/>
            <h4>Compromiso</h4>
            <span>Nuestros clientes son nuestra mayor fuente de crecimiento por lo que nos comprometemos a entregar siempre nuestros trabajos a tiempo y con la calidad que se merecen</span>
        </div>
    </div>
    </Fade>
    </div>

  )
}

export default Servicios