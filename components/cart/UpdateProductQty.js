import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { updateCartProduct } from '@/redux/index';
import { connect } from 'react-redux';

function UpdateProductQty({className, item, updateCartProduct}) {

    const addQuantity = (item) => {
        item.quantity++
        updateCartProduct(item);
      }
    
      const subQuantity = (item) => {
        item.quantity--
        updateCartProduct(item);
      }

    return (
        <>
           <div className={`btn-group btn-group-toggle btn-sm ${className}`} data-toggle="buttons">
          <label className="btn btn-outline-danger  btn-sm ">
            <button className="btn btn-sm"  onClick={() => subQuantity(item)} > <FaMinus /> </button>
          </label>
          <label className="btn ">
            {item.quantity}
          </label>
          <label className="btn btn-outline-primary  btn-sm">
            <button className="btn btn-sm"  onClick={() => addQuantity(item)}> <FaPlus /> </button>
          </label>
        </div>  
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateCartProduct: (item) => dispatch(updateCartProduct(item))
    }
  }
  
  export default connect(null, mapDispatchToProps)(UpdateProductQty);