import React from 'react'
import Servicios from './Servicios'
import BanProductos from './BanProductos';
import Nosotros from './Nosotros';
import Banner from './Banner';


const All = () => {
    
    return (
        <div>
 
            <Banner/>
            
            <Nosotros  />

            <Servicios/> 

            <BanProductos/>

        </div>
    )
}

export default All