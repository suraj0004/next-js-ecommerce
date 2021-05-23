import React from 'react';
import Link from 'next/link'
import { Navbar } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
function CheckoutDetails(props) {
    return (
        <>
            <div className="mb-5">
                {/* <Navbar.Text className="m-2" role="button">
                    <Link href="/cart" className="nav-link" >
                        <FaShoppingCart size="40" />
                    </Link>
                    <span className="badge badge-danger cart_count">{5}</span>
                </Navbar.Text> */}

                {/* <button className="btn btn-danger float-right btn-sm mt-4 mr-3">Clear Cart</button> */}
            </div>

            <div className="img-responsive text-center">
                <img src="http://localhost/shopinventorymanagement/public/image/default_image.png" height="150" width="150" className="img-fluid rounded-circle" />
            </div>

            <div className="text-center">
                <h5>Shop Name</h5>
                <p>Address 56/70 DL Road , Rajpur</p>
                <p> <a href="tel:8954836965">+91-8954836965</a> </p>
            </div>

            <hr/>

           <div className="text-secondary">
           {/* <div className="row p-2">
                <div className="col-6 text-left p-0 m-0 ">
                    Product Name xyz abc
                </div>
                <div className="col-3 text-center p-0 m-0">
                     
                     <span className="badge badge-success">10 - 11</span>
                </div>
                <div className="col-3 text-right p-0 m-0 font-weight-bold">
                    300 Rs.
                </div>
            </div> */}
            
            <div className="row p-2">
                <div className="col-6 text-left p-0 m-0 ">
                    Product Name xyz abc
                </div>
                <div className="col-3 text-center p-0 m-0">
                     
                     <span className="badge badge-success">3 x 100 Rs</span>
                </div>
                <div className="col-3 text-right p-0 m-0 font-weight-bold">
                    300 Rs.
                </div>
            </div>
            <hr/>
            <div className="row p-2 font-weight-bold text-dark">
                <div className="col-9 p-0 m-0">
                    Grand Total <small className="text-secondary">(Inclusive of all taxes)</small>
                </div>
                <div className="col-3 text-right p-0 m-0">
                    600 Rs.
                </div>
            </div>
           </div>

           <div className="row p-2">
               <button className="btn btn-primary btn-block">Procced to Checkout</button>
           </div>
        </>
    );
}

export default CheckoutDetails;