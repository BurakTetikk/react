import React from 'react';
import ProductCard from "./ProductCard";

const Products = () => {
    return (
        <div>
            <ProductCard>
                <h2>Monster Computer</h2>
                <p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae culpa cum cumque delectus distinctio eius est, ipsa iure libero nobis officiis, quae quaerat, quas quisquam ratione repellendus sunt voluptatibus!</span>
                </p>
            </ProductCard>

            <ProductCard>
                <h2>Akbank Software</h2>
                <p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae culpa cum cumque delectus distinctio eius est, ipsa iure libero nobis officiis, quae quaerat, quas quisquam ratione repellendus sunt voluptatibus!</span>
                </p>
            </ProductCard>
        </div>
    );
};

export default Products;