import React from 'react';
import Link from 'next/link'
import { Navbar } from 'react-bootstrap';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';
const header = () => {
    return (
        <Navbar>
            <Navbar.Brand > <Link href="/" className="nav-link"> Shop Name </Link></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="m-2">
                    <Link href="/cart" className="nav-link"><FaShoppingCart size="40" /></Link>
                </Navbar.Text>
                <Navbar.Text className="m-2">
                    <Link href="/profile" className="nav-link"><FaUserCircle size="40" /></Link>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default header;