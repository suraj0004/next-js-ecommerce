import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
function CartItem({ product }) {
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
        <h6 className="h6">product.name</h6>
        <div class="btn-group btn-group-toggle btn-sm float-right" data-toggle="buttons">
          <label class="btn btn-outline-danger  btn-sm ">
            <button className="btn btn-sm"> <FaMinus /> </button>
          </label>
          <label class="btn ">
            5
              </label>
          <label class="btn btn-outline-primary  btn-sm">
            <button className="btn btn-sm"> <FaPlus /> </button>
          </label>
        </div>
        <p className="card-text">
          product.price / product.weight
          </p>
        <h6 className="h6">Total Amount : 300 Rs</h6>
      </div>
    </div>
  );
}

export default CartItem;