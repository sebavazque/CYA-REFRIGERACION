import React from 'react'
import Header from './Componentes/Header'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Componentes/Footer';
import All from './All';
import ListaProductos from './ListaProductos';
import Nosotros from './Nosotros';
import Contacto from './Contacto';
import Camaras from './GaleriaComp/Camaras';
import Bateas from './GaleriaComp/Bateas';
import ItemDetailContainer from './ItemDetailContainer';


function App () {
    return (
        <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<All />} />
                    <Route path="/productos" element={<ListaProductos/>} />
                    <Route path="/nosotros" element={<Nosotros/>} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/galeria/camaras" element={<Camaras />} />
                    <Route path="/galeria/bateas" element={<Bateas />} />
                    <Route path="/:categoria/:itemId" element={<ItemDetailContainer/>}/>
                </Routes>
                
                <Footer/>
        </BrowserRouter>

        
        
    )
}

export default App