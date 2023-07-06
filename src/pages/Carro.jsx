import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ItemListContainer from '../components/ItemListContainer';

const Carro = () => {

    const { carrito } = useContext(CartContext);

    console.log(carrito);

    return (

        <div>

            <h1> Carrito </h1>
            <ItemListContainer productos={carrito} />

        </div>
    )
}

export default Carro