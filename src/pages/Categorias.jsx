import React, { useEffect, useState } from 'react';
import ItemListContainer from '../components/ItemListContainer';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../index';

const Categorias = () => {
    const { IdCategoria } = useParams();


    const [productsData, setProductsData] = useState([]);

    useEffect(() => {

        const coleccion = collection(db, "productosDB");
        getDocs(coleccion)
            .then((resp) => {
                const filtroCategoria = resp.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setProductsData(
                    filtroCategoria.filter((products) => products.categoria === IdCategoria)
                );
            });
    }, [IdCategoria]);


    return (

        <div>
            <h1> {IdCategoria} </h1>
            <ItemListContainer productos={productsData} />
        </div>
    )
}

export default Categorias