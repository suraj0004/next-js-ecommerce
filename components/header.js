import React from 'react';
import Link from 'next/link'
import { Navbar } from 'react-bootstrap';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/router'

const header = () => {

    const router = useRouter()
    const { shop_slug } = router.query;

    console.log(router);

    const goToHome = () => {
        if(shop_slug){
            router.push(`/${shop_slug}`)
        }
        else{
            router.back()
        }
        
    }
    return (
        <Navbar className="fixed_header">
            <div className="container">
                <Navbar.Brand > <div className="brand h1" onClick={goToHome} role="button" >Shop Name</div> </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="m-2">
                        <Link href="/cart" className="nav-link" ><FaShoppingCart size="40" role="button" /></Link>
                    </Navbar.Text>
                    <Navbar.Text className="m-2">
                        <Link href="/profile" className="nav-link"><FaUserCircle size="40" role="button" /></Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default header;