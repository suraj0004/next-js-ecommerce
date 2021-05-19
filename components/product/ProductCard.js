import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { addToCart } from '@/redux/index';
import { connect } from 'react-redux';

function ProductCard({ product, addToCart }) {
    return (
        <div className="card shadow-lg m-0 p-0 m-3 ">
            <div className="row m-0 p-0 product">
                <div className="col-md-4 text-center m-0 p-0">
                    <img
                        src={product.image}
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-8">
                    <button onClick={() => addToCart(product)} className="btn btn-outline-primary add-to-cart-btn ">Add <FaPlus /> </button>
                    <div className="card-body">
                        <h3 className="card-title">{product.name}</h3>
                        <p className="card-text">
                        <span className="h4">{product.price}</span> / {product.weight}
                        </p>
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