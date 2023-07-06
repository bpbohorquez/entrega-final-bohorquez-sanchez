import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from '../pages/Inicio';
import NavBar from '../components/NavBar';
import Categorias from '../pages/Categorias';
import Item from '../pages/Item';
import Carro from '../pages/Carro';



const MainRouter = () => {

    return (

        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/categorias/:IdCategoria' element={<Categorias />} />
                <Route path='/item/:IdItem' element={<Item />} />
                <Route path='/carro' element={<Carro />} />
            </Routes>
        </Router>
    )
}

export default MainRouter;