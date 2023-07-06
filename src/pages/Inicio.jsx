import React, { useEffect, useState } from 'react';
import ItemListContainer from '../components/ItemListContainer';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../index';


const Inicio = () => {
    const [productsData, setProductsData] = useState([]);

    
    useEffect(() => {

        const coleccion = collection(db, "productosDB");
    
        getDocs(coleccion)
            .then((resp) => {
                setProductsData(
                    resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                );
            });
    }, []);

    return (
        <div>
            <h1> Tienda Musical </h1>
            <ItemListContainer productos={productsData} />
        </div>
    )
}

export default Inicio








