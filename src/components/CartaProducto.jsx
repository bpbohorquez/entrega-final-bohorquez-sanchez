import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useLocation } from 'react-router-dom';
import ItemCount from './ItemCount';

const CartaProducto = ({ datosProducto }) => {

    const location = useLocation();


    return (

        <Card style={{ width: '18rem' }}>
    
            <Card.Img variant="top" src={datosProducto.img} />
            <Card.Body>
                <Card.Title>{datosProducto.nombre}</Card.Title>
                <Card.Text>{datosProducto.precio}</Card.Text>

                {location.pathname.includes("/item") && (<Card.Text>{datosProducto.descripcion}</Card.Text>)}

                {location.pathname === "/carro" ? <Card.Text> Cantidad: {datosProducto.cantidad} </Card.Text> : <ItemCount item={datosProducto} />}
            
                {!location.pathname.includes("/item") && <Link to={`/item/${datosProducto.id}`}> Detalles </Link>}

            </Card.Body>
        </Card>

    )
}

export default CartaProducto