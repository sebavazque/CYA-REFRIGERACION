import React from 'react'
import pozo from './imagen/pozo.jpeg'
import batea from './imagen/batea.jpg'
import AIRE from './imagen/AIRE.jpg'
import camara6 from './imagen/camara6.jpeg'
import central from './imagen/central.jpg'
import freezer from './imagen/freezer.jpeg'
import {Link,} from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const BanProductos = () => {
  return (
    
    <div className='s3'>
      <Fade bottom>
        <h2>Algunás fotos</h2>
        <div className='content'>

            <div className='imgs'>
              <img id='img' src= {AIRE} alt="" />
              <img id='img' src= {camara6} alt="" />
              <img id='img' src={freezer} alt="" />
              <img id='img' src={central}  alt=""/>
              <img id='img' src= {batea} alt="" />
              <img id='img' src={pozo} alt="" />
            </div>
        </div>
         <div  className='verMas' >
            <Link to="/galeria" >Ver más fotos</Link>
        </div> 
        </Fade>
    </div>

  )
}

export default BanProductos