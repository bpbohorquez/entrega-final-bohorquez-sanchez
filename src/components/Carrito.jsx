import React, { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Carrito = () => {
    const {cantidadCarrito} = useContext(CartContext);
    
    
    return (

        <div>
            
            <Link to="/carro" style={{ textDecoration: "none" }}>

            
                <FontAwesomeIcon icon={faCartShopping} style={{ color: "#e6e9ef", }} />
                <span style={{ color: "white" }}> {cantidadCarrito()} </span>
            </Link>
        </div>
    )
}

export default Carrito