import React from 'react';
import './ProductCard.scss';

const ProductCard = (props) => {
    return (
        <div className="product-card">
            {props.children}
        </div>
    );
};

export default ProductCard;