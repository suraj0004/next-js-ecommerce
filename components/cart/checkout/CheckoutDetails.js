import { useState } from 'react';
import { FaRupeeSign } from "react-icons/fa";
import CheckoutModal from "~/components/modals/Checkout"
import ShopTiming from "~/components/cart/ShopTiming"
import GrandTotal from "~/components/cart/GrandTotal"

function CheckoutDetails({ shop_info, cart }) {

    const [checkoutModalShow, setCheckoutModal] = useState(false);
    let grand_total = 0;
    return (
        <>
            <div className="img-responsive text-center mt-5">
                <img src={shop_info.logo} height="150" width="150" className="img-fluid rounded-circle" />
            </div>

            <div className="text-center">
                <h5>{shop_info.shop_name}</h5>
                <p>{shop_info.address}</p>
                <p> <a href={`tel:${shop_info.mobile}`}>+91-{shop_info.mobile}  </a> ({shop_info.seller_name}) </p>
                <ShopTiming 
                    from_time={shop_info.open_at} 
                    to_time={shop_info.close_at} 
                />
            </div>

            <hr />

            <div className="text-secondary">
                {

                    cart.map(item => {
                        let total = item.quantity * item.product.price;
                        grand_total += total;
                        return <>
                            <div className="row p-2">
                                <div className="col-6 text-left p-0 m-0 ">
                                    {item.product.name}
                                </div>
                                <div className="col-3 text-center p-0 m-0">

                                    <span className="badge badge-success">{item.quantity} X <FaRupeeSign size="15" />{item.product.price} </span>
                                </div>
                                <div className="col-3 text-right p-0 m-0 font-weight-bold">
                                    <FaRupeeSign size="15" />{total}
                                </div>
                            </div>
                            <hr />
                        </>
                    })
                }

                <GrandTotal grand_total={grand_total} />

                
            </div>

            <div className="row p-2">
                <button  onClick={() => setCheckoutModal(true)} className="btn btn-primary btn-block font-weight-bold">Checkout</button>
            </div>

            <CheckoutModal
                show={checkoutModalShow}
                onHide={() => setCheckoutModal(false)}
                open_at={shop_info.open_at} 
                close_at={shop_info.close_at} 
                grand_total={grand_total}
            />


        </>
    );
}

export default CheckoutDetails;