import React from 'react';
import UpdateProductQty from '@/components/cart/UpdateProductQty'

function CartItem({ item }) {

  return (
    <div className="row p-2 m-2">
      <div className="col-md-3 text-center img-responsive">
        <img
          src="http://localhost/shopinventorymanagement/public/image/default_image.png"
          className="img-fluid"
          height="120"
          width="120"
        />
      </div>
      <div className="col-md-8 p-2">
        <h6 className="h6">{item.product.name}</h6>
        <UpdateProductQty className="float-right" item={item} />
        <p className="card-text">
          Rs. {item.product.price} / {item.product.weight}
        </p>
        <h6 className="h6">Total Amount : Rs {item.product.price * item.quantity} /-</h6>
      </div>
    </div>
  );
}

export default CartItem