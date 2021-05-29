import React from 'react';
import {FaRupeeSign} from "react-icons/fa"

const OrderItem = ({item}) => {

    let price = Number(item.price).toFixed(2)
    return (
        <div className="row p-2">
        <div className="col-3 text-center">
            <img src={item.product.thumbnail}
            height="90"
            width="90"
            />
        </div>
        <div className="col-6">
            <p className="m-0 p-0">
                {item.product.name}
            </p>
            <p className="m-0 p-0">
                <small> {item.product.weight}</small>
            </p>
            <p className="m-0 p-0">
            <span class="badge badge-primary p-2 mt-3"> {item.quantity} </span> X <FaRupeeSign/>{price}
            </p>
        </div>
        <div className="col-3">
        <div style={{ 
            position: "absolute",
            bottom: 10,
            right: 20
        }}>
        <FaRupeeSign/>{price * item.quantity}
        </div>
        </div>
    </div>
    );
};

export default OrderItem;