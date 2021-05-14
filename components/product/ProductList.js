import React from 'react';
import ProductCard from './ProductCard'

function ProductList({ products }) {
    return (
        <>
            {
                products.map(product => {
                    return <div className="col-lg-6 col-12 ">
                        <ProductCard product={product} />
                    </div>
                })
            }
        </>
    );
}

export default ProductList;