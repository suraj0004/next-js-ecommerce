import React from 'react';
import { useRouter } from 'next/router'
import { FaRegArrowAltCircleLeft, FaUserAlt, FaListAlt, FaSignOutAlt, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link'

const index = () => {
    const router = useRouter()

    const goBack = () => {
        router.back()
    }
    return (
        <>
            <h3 className="header_h3">
                <div className="container ">
                    <button type="button" onClick={goBack} className="btn"> <FaRegArrowAltCircleLeft size="35" /> </button> Back
                </div>
            </h3>
            <div className="pt-200">
                <div className="row ">
                    <div className="col-md-2"></div>
                    <div className="col-md-4 mb-3 ">
                        <div className="card text-center ">
                            <div className="card-body account-menu">
                                <h5 className="card-title link"> <FaListAlt/> <Link  href="/my-account/orders"> My Orders</Link> </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card text-center">
                            <div className="card-body account-menu">
                                <h5 className="card-title link"> <FaUserAlt /><Link  href="/my-account/profile"> My Profile</Link></h5>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4 mb-3">
                        <div className="card text-center">
                            <div className="card-body account-menu">
                                <h5 className="card-title link"> <FaShoppingCart /> <Link  href="/cart"> My My Cart</Link></h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card text-center">
                            <div className="card-body account-menu">
                                <h5 className="card-title link"> <FaSignOutAlt /> Sign out</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;