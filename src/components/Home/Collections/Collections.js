import React, { useEffect, useState } from 'react';
import './Collections.css';
import Product from './Product';


const Collections = () => {
    const [collections, setCollections] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setCollections(data));
    }, [])
    return (
        <div id="collection" className='container'>
            <div className="">
            <h1 className='text-primary text-center mt-5'> Latest Collections</h1>
            <div className="content mi-5">
            {
                collections.map(product => <Product
                    key={product.key}
                    product={product}
                ></Product>)
                
            }
            </div>
            </div>
        </div>
    );
};

export default Collections;