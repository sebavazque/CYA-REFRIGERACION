import React from 'react'
import Servicios from './Componentes/Servicios'
import Empresa from './Componentes/Empresa';
import Main from './Componentes/Main';
import BanProductos from './Componentes/BanProductos';



const All = () => {
    return (
        <div>

            <Main/>

            <Servicios/> 

            <BanProductos/>

            <Empresa/>

            

        </div>
    )
}

export default All