import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { addToCart } from '@/redux/index';
import { connect } from 'react-redux';

function ProductCard({ product, addToCart }) {
    return (
        <div className="card m-3 shadow-lg">
            <div className="row g-0 p-2">
                <div className="col-md-4 p-2 border rounded shadow-lg">
                    <img
                        priority
                        src={product.image}
                        className="img-fluid"
                        height={250}
                        width={250}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">
                            {product.weight}
                        </p>
                        <button onClick={() => addToCart(product)} className="btn btn-outline-primary __float-right p-2">Add <FaPlus /> </button>
                        <h3 className="card-title ">{product.price}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch(addToCart(product))
    }
}


export default connect(null, mapDispatchToProps)(ProductCard);