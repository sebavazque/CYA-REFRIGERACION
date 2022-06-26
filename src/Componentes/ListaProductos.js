import React from 'react'
import camara from './imagen/camara.jpeg'
import proyecto from './imagen/proyecto.jpeg'
import batea1 from './imagen/batea1.jpg'
import h1 from './imagen/h1.jpeg'
import AIRE from './imagen/AIRE.jpg'
import central from './imagen/central.jpg'
import { Link } from 'react-router-dom'
import { BsChevronDoubleDown } from "react-icons/bs";


const ListaProductos = ({producto}) => {
    return (
    <div className='bannerContainer'>
        <div className='bannerProd' >
            <div className='bannerCont'>
                <h2>Nuestros productos</h2>
            </div>
        </div>       
        <hr className='iconBan' />
        <div className='iconItem'>
        <BsChevronDoubleDown />
        </div>

        <div className='productos'>
                    <div className='productContent'>
                        <img src={camara} />
                        <h2>Camaras Frigorificas</h2>
                        <Link to='/camara/1'>Ver mas detalles</Link>
                    </div>


                    <div className='productContent'>
                        <img src={batea1} />
                        <h2>Bateas</h2>
                        <Link to='/batea/6' >Ver mas detalles</Link>
                    </div>

                    <div className='productContent'>
                        <img src={h1} />
                        <h2>Heladeras</h2>
                        <Link to='/heladera/2' >Ver mas detalles</Link>
                    </div>


                    <div className='productContent'>
                        <img src={central} />
                        <h2>Centrales de Frio</h2>
                        <Link to='/central/4' >Ver mas detalles</Link>
                    </div>

                    <div className='productContent'>
                        <img src={AIRE} />
                        <h2>Aires Acondicionados</h2>
                        <Link to='/aire/3' >Ver mas detalles</Link>
                    </div> 



        </div>
    
    </div>
    
    )
}

export default ListaProductos