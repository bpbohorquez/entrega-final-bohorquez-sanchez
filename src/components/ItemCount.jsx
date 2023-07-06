import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';

const ItemCount = ({ item }) => {

    const { carrito, setCarrito } = useContext(CartContext);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    }

    const handleSumar = () => {
        setCantidad(cantidad + 1);
    }

    const handleAgregar = () => {
        const productoAgregado = { ...item, cantidad };
        const arrayCarrito = [...carrito];
        const productoExiste = arrayCarrito.find((producto) => producto.id === productoAgregado.id);

        if (productoExiste) {
            productoExiste.cantidad = productoExiste.cantidad + cantidad;
            setCarrito(arrayCarrito);
        } else {
            arrayCarrito.push(productoAgregado);
            setCarrito(arrayCarrito);
        }

    }


    return (
        
        <div>
            <div className='botonesCantidad'>

                <Button variant="primary" onClick={handleRestar}> - </Button>
                <p> {cantidad} </p>
                <Button variant="primary" onClick={handleSumar}> + </Button>
            </div>
            <Button variant="success" onClick={handleAgregar}> Agregar al carrito </Button>
        </div>
    )
}


export default ItemCount