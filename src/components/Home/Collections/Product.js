import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
        const {image, name, price, details} = product;

        const navigate = useNavigate();
        const checkout = id =>{
            navigate(`/Manage/${id}`)
    }

    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img className='con-img' src={image} alt="Shoes" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{price}</p>
                    <p>{details}</p>
                    <div class="card-actions">
                        <button onClick={()=> checkout(product)} class="btn btn-primary w-100">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;