import React, { useEffect, useState } from 'react';


const Collections = () => {
    const [collections, setCollections] = useState([]);

    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setCollections(data));
    }, [])
    return (
        <div id="collection" className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'> Latest Collections</h1>
            <div className="collection-container">
            {
                collections.map(collection => <collection
                    collection={collection}
                    
                ></collection>)
            }
            </div>
            </div>
        </div>
    );
};

export default Collections;