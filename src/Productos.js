import React from 'react'
import camara from './imagen/camara.jpeg'
import proyecto from './imagen/proyecto.jpeg'
import batea from './imagen/batea.jpg'
import hela from './imagen/hela.jpeg'
import AIRE from './imagen/AIRE.jpg'
import puerta from './imagen/puerta.jpg'
import central from './imagen/central.jpg'
import { Link } from 'react-router-dom'



const Productos = () => {
    return (
        <div className='productos'>
                    <div className='productContent'>
                        <img src={camara} />
                        <p>Camaras Frigorificas!</p> 
                        <Link to="/camaras" ><button>Ver mas fotos</button></Link>
                    </div>

                    <div className='productContent'>
                        <img src={proyecto} />
                        <p>Camaras Frigorificas!</p> 
                        <Link to="/camaras" ><button>Ver mas fotos</button></Link>
                    </div>

                    <div className='productContent'>
                        <img src={batea} />
                        <p>Camaras Frigorificas!</p> 
                        <Link to="/camaras" ><button>Ver mas fotos</button></Link>
                    </div>

                    <div className='productContent'>
                        <img src={hela} />
                        <p>Camaras Frigorificas!</p> 
                        <Link to="/camaras" ><button>Ver mas fotos</button></Link>
                    </div>

                    <div className='productContent'>
                        <img src={puerta} />
                        <p>Camaras Frigorificas!</p> 
                        <Link to="/camaras" ><button>Ver mas fotos</button></Link>
                    </div>

                    <div className='productContent'>
                        <img src={central} />
                        <p>Camaras Frigorificas!</p> 
                        <Link to="/camaras" ><button>Ver mas fotos</button></Link>
                    </div>

                    <div className='productContent'>
                        <img src={AIRE} />
                        <p>Camaras Frigorificas!</p> 
                        <Link to="/camaras" ><button>Ver mas fotos</button></Link>
                    </div>



        </div>
    )
}

export default Productos