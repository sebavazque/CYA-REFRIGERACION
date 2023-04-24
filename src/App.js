import React from 'react'
import Header from './Componentes/Header'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Componentes/Footer';
import All from './Componentes/All';
import ListaProductos from './Componentes/ListaProductos';
import Contacto from './Componentes/Contacto';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import Galeria from './GaleriaComp/Galeria';


function App () {
    return (
        <BrowserRouter>
            
                <Header />
                <Routes>
                    <Route path="/" element={<All />} />
                    <Route path="/productos" element={<ListaProductos/>} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/:categoria/:itemId" element={<ItemDetailContainer/>}/>
                    <Route path="/galeria" element={<Galeria/>} />
                </Routes>
                
                <Footer />
                
        </BrowserRouter>

        
        
    )
}

export default App