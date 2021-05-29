import { useState } from 'react';
import { FaRupeeSign } from "react-icons/fa";
import CheckoutModal from "~/components/modals/Checkout"
import GrandTotal from "~/components/cart/GrandTotal"
import ShopInfo from "~/components/common/ShopInfo"
import LoginModal from "~/components/modals/login"
import RegisterModal from "~/components/modals/register"


function CheckoutDetails({ shop_info, cart, isAuthenticated }) {

    const [checkoutModalShow, setCheckoutModal] = useState(false);
    const [loginModalShow, setLoginModal] = useState(false);
    const [regiterModalShow, setRegisterModal] = useState(false);


    let grand_total = 0;

    let ModalComponent, ButtonComponent;
    if (isAuthenticated) {
        ModalComponent = <CheckoutModal
            show={checkoutModalShow}
            onHide={() => setCheckoutModal(false)}
            open_at={shop_info.open_at}
            close_at={shop_info.close_at}
            grand_total={grand_total}
        />
        ButtonComponent = <button
            onClick={() => setCheckoutModal(true)}
            className="btn btn-primary btn-block font-weight-bold">
            Checkout
            </button>
    } else {
        ModalComponent = <>
            <LoginModal
                show={loginModalShow}
                onHide={() => setLoginModal(false)}
                showRegister={() => {
                    setLoginModal(false);
                    setRegisterModal(true);
                }}
            />
            <RegisterModal
                show={regiterModalShow}
                onHide={() => setRegisterModal(false)}
                showLogin={() => {
                    setRegisterModal(false);
                    setLoginModal(true);
                }}
            />
        </>
        ButtonComponent = <button
            onClick={() => setLoginModal(true)}
            className="btn btn-warning btn-block font-weight-bold">
            Sign-in and Continue
            </button>
    }
    return (
        <>
            <ShopInfo shop_info={shop_info} />
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
                {ButtonComponent}
            </div>
            {ModalComponent}

        </>
    );
}

export default CheckoutDetails;