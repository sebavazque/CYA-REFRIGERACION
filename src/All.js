import React from 'react'
import idea from './imagen/idea.png'
import compromiso from './imagen/compromiso.png'
import engranaje from './imagen/engranaje.png'
import { BsChevronDoubleDown } from "react-icons/bs";
import { BsArrowDown} from "react-icons/bs";
import AIRE from './imagen/AIRE.jpg'
import camara from './imagen/camara.jpeg'
import proyecto from './imagen/proyecto.jpeg'
import batea from './imagen/batea.jpg'
import moto from './imagen/moto.jpg'
import {Link,} from 'react-router-dom'
import { IoSnowOutline } from "react-icons/io5";
import { AiOutlineDoubleLeft,AiOutlineDoubleRight } from "react-icons/ai";



const All = () => {
    return (
        <div>

        <div className='s1'>

        <div className='sliderContent'>
            <div className='mainImage'>
                <h2>Bienvenidos!</h2>
                <div className='ver'>
                <Link to="/productos">Ver productos</Link>
                </div>
                
            </div>
        </div>





        </div>

        <div className='s2'>
        <h2>Servicios</h2>
        <div className='bs'><BsChevronDoubleDown/></div>


        <div className='cards'>
            <div className='card'>
                <img id='img1'  src={engranaje}  />
                <h4>Mantenimiento</h4>
                <span>Nuestro equipo esta capacitado para poder resolver cualquier tipo de problema, estamos siempre listos para actuar lo antes posible.</span>
            </div>
            <div className='card'>
                <img src={idea} />
                <h4>Creatividad</h4>
                <span>Contamos con un equipo de asesoramiento y asistencia técnica desde su consulta hasta el mantenimiento de los equipos.</span>
            </div>
            <div className='card'>
                <img id='img1' src={compromiso}  />
                <h4>Compromiso</h4>
                <span>Nuestros clientes son nuestra mayor fuente de crecimiento por lo que nos comprometemos a entregar siempre nuestros trabajos a tiempo y con la calidad que se merecen</span>
            </div>
        </div>
        </div>
    

        <div className='s3'>
            <h2>Algunos de nuestros productos</h2>
            <div className='content'>
                <div>
                <Link to="/productos" ><img id='img1' src= {batea} /></Link>
                </div>
                <div className='imgs'>
                <Link to="/productos" ><img id='img' src= {AIRE} /></Link>
                <Link to="/productos" ><img id='img' src= {camara} /></Link>
                <Link to="/productos" ><img id='img' src={proyecto} /></Link>
                <Link to="/productos" ><img id='img' src={moto} /></Link>
                </div>
            </div>
            <div  className='verMas' >
                <Link to="/productos" >Ver mas productos</Link>
            </div>
        </div>

        <div className='s4' id='empresa'>
            
            <h2>Sobre nosotros...</h2>
            <div className='bs'>
                <BsArrowDown/>
            </div>
            <div class="boxTex">
                
                <h3> En C&A  nuestro mundo es la refrigeración, somos una empresa familiar nacida en Rosario con más de 35 años en el rubro del frío. </h3>
                <h3>Contamos con clientes en San Lorenzo, Santa Fe, Parana , Buenos Aires , Cruz Alta , etc.</h3>

                
                <p> Nos dedicamos  a la comercialización, distribución y puesta en marcha de cámaras de frigoríficas, heladeras y bateas de todo tipo, centrales de frio , aires comerciales, equipos de frio, chillers para cerveza , etc</p> 
                            
                <p> Uno de nuestros fuertes es ofrecer la posibilidad de desarrollar la fabricacion o modificacion de proyectos especiales para cada uno de nuestros cliente </p>    
            
                <p> Nuestro mayor capital son nuestros clientes asique trabajamos permanentemente para superarnos  y  adecuándonos a su demanda asesorando sus necesidades para lograr juntos el mejor resultado. </p>

                <div className='botonContact'>                
                    <h3>Tenes algun proyectos en mente?</h3>
                    <h3>Nosotros podemos hacerlo realidad!</h3>
                    
                </div>
                <Link to="/contacto"  >Contactanos!</Link>

                
                <div className='iconText'>
                    <AiOutlineDoubleLeft className='flecha'/> <IoSnowOutline/> <AiOutlineDoubleRight className='flecha'/> 
                </div>
            </div>
        </div>

        </div>
    )
}

export default All