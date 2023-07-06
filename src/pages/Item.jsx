import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../index';

const Item = () => {
    const { IdItem } = useParams();


    const [productsData, setProductsData] = useState([]);

    useEffect(() => {

        const coleccion = doc(db, "productosDB", IdItem);
        getDoc(coleccion)
            .then((resp) => {
                setProductsData([{ id: resp.id, ...resp.data() }]);
            });
    }, [IdItem]);



    return <ItemDetailContainer productos={productsData} />
}

export default Item