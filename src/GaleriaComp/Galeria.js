import React from 'react'
import './galeria.css'
import { useState } from 'react';
import { BsFillBackspaceFill} from "react-icons/bs";
import batea2 from './galeria/bateas/batea2.jpg'
import batea3 from './galeria/bateas/batea3.jpg'
import batea4 from './galeria/bateas/batea4.jpg'
import batea5 from './galeria/bateas/batea5.jpg'
import batea6 from './galeria/bateas/batea6.jpg'
import batea7 from './galeria/bateas/batea7.jpg'
import camara1 from './galeria/camaras/camara1.jpg'
import camara2 from './galeria/camaras/camara2.jpeg'
import camara3 from './galeria/camaras/camara3.jpg'
import camara4 from './galeria/camaras/camara4.jpg'
import camara5 from './galeria/camaras/camara5.jpeg'
import camara6 from './galeria/camaras/camara6.jpeg'
import camara7 from './galeria/camaras/camara7.jpeg'
import camara8 from './galeria/camaras/camara8.jpeg'
import h1 from './galeria/heladeras/h1.jpeg'
import h3 from './galeria/heladeras/h3.jpeg'
import mostrador1 from './galeria/heladeras/mostrador1.jpeg'
import mostrador2 from './galeria/heladeras/mostrador2.jpeg'
import pozo from './galeria/heladeras/pozo.jpeg'
import proyecto1 from './galeria/heladeras/proyecto1.jpeg'
import proyecto2 from './galeria/heladeras/proyecto2.jpeg'
import proyecto3 from './galeria/heladeras/proyecto3.jpeg'
import proyecto4 from './galeria/heladeras/proyecto4.jpg'
import h4 from './galeria/heladeras/h4.jpeg'
import h5 from './galeria/heladeras/h5.jpeg'
import h6 from './galeria/heladeras/h6.jpeg'
import h7 from './galeria/heladeras/h7.jpeg'
import freezer from './galeria/heladeras/freezer.jpeg'
import { useEffect } from 'react'

const GaleCompleta = () => {

    let dataB = [
        {
            id: 2,
            imgSrc: batea2,
        },
        {
            id: 3,
            imgSrc: batea3,
        },
        {
            id: 4,
            imgSrc: batea4,
        },
        {
            id: 5,
            imgSrc: batea5,
        },
        {
            id: 6,
            imgSrc: batea6,
        },
        {
            id: 7,
            imgSrc: batea7,
        },
        {
            id: 8,
            imgSrc: camara1,
        },
        {
            id: 9,
            imgSrc: camara2,
        },
        {
            id: 10,
            imgSrc: camara3,
        },
        {
            id: 11,
            imgSrc: camara4,
        },
        {
            id: 12,
            imgSrc: camara5,
        },
        {
            id: 13,
            imgSrc: camara6,
        },
        {
            id: 14,
            imgSrc: camara7,
        },
        {
            id: 15,
            imgSrc: camara8,
        },       
        {
          id: 16,
          imgSrc: h1,
      },
      {
          id: 17,
          imgSrc: h3,
      },
      {
          id: 18,
          imgSrc: mostrador1,
      },
      {
          id: 19,
          imgSrc: mostrador2,
      },
      {
          id: 20,
          imgSrc: pozo,
      },
      {
          id: 21,
          imgSrc: proyecto1,
      },
      {
          id: 22,
          imgSrc: proyecto2,
      },
      {
          id: 23,
          imgSrc: proyecto3,
      },
      {
          id: 24,
          imgSrc: proyecto4,
      },
      {
          id: 25,
          imgSrc: h4,
      },
      {
          id: 26,
          imgSrc: h5,
      },       
      {
          id: 27,
          imgSrc: h6,
      },
        {
            id: 28,
            imgSrc: h7,
        },
        {
            id: 29,
            imgSrc: freezer,
        }
    ]

    
    const [model, setModel] = useState(false)
    const [tempimgSrc , setTempimgSrc] = useState('')
    const getImg = (imgSrc) =>{
            setTempimgSrc(imgSrc)
            setModel(true)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return ( 
        <div className='galeryCont'>
                
        
                <div className={model? "model open" : "model"}>
                    <img src={tempimgSrc} style={{width:'80%'}} alt="" />
                    <BsFillBackspaceFill onClick={() => setModel(false)}/>
                </div>
                <div className='bannerGaleria'>
                    <div className='banner-container' >
                         <div className='bannerContenido'>
                            <h2>Nuestra galeria!</h2>
                            <p>Te mostramos una pequeña galería de fotos dónde podrás ver nuestros trabajos, si hay alguno que te guste solo tienes que contactarnos!</p>
                        </div>
                    </div>
                </div>
                <div className='galery'>
                    
                    {dataB.map((item, index) => {
                        return (
                            <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} alt="" />
                            </div>
                            )
                        })} 
                </div> 
             
        </div>
        
) 

    }
export default GaleCompleta
