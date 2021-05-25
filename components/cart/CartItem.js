import React from 'react';
import UpdateProductQty from '~/components/cart/UpdateProductQty'
import {FaRupeeSign} from "react-icons/fa"

function CartItem({ item }) {

  return (
    <div className="row p-2 m-2">
      <div className="col-md-3 text-center img-responsive">
        <img
          src={item.product.image}
          className="img-fluid"
          height="120"
          width="120"
        />
      </div>
      <div className="col-md-8 p-2">
        <h6 className="h6">{item.product.name}</h6>
        <UpdateProductQty className="float-right" item={item} />
        <p className="card-text">
         <span className="h5"> <FaRupeeSign size="15"/> {item.product.price}</span> / {item.product.weight}
        </p>
      </div>
    </div>
  );
}

export default CartItem