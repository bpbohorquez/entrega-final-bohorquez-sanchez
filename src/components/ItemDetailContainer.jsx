import React from 'react';
import CartaProducto from '../components/CartaProducto';

const ItemDetailContainer = ({ productos }) => {
    return (
        <div className='itemList'>
            {productos.map((product) => {
                return <CartaProducto key={product.id} datosProducto={product} />;
            })}
        </div>
    )
}


export default ItemDetailContainer;