import React from 'react'
import AIRE from './imagen/AIRE.jpg'
import camara from './imagen/camara.jpeg'
import proyecto from './imagen/proyecto.jpeg'
import central from './imagen/central.jpg'
import {Link,} from 'react-router-dom'

const BanProductos = () => {
  return (
    
    <div className='s3'>
        <h2>Algunos de nuestros productos</h2>
        <div className='content'>

            <div className='imgs'>
            <Link to="/productos" ><img id='img' src= {AIRE} /></Link>
            <Link to="/productos" ><img id='img' src= {camara} /></Link>
            <Link to="/productos" ><img id='img' src={proyecto} /></Link>
            <Link to="/productos" ><img id='img' src={central} /></Link>
            </div>
        </div>
        <div  className='verMas' >
            <Link to="/productos" >Ver mas productos</Link>
        </div>
    </div>

  )
}

export default BanProductos