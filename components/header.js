import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { Navbar } from 'react-bootstrap';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/router'
import { connect } from 'react-redux';
import LoginModal from "@/components/modals/login"
import RegisterModal from "@/components/modals/register"

const header = ({ cart_count, global }) => {

  const [loginModalShow, setLoginModal] = useState(false);
  const [regiterModalShow, setRegisterModal] = useState(false);
  const router = useRouter()
  const { shop_slug } = router.query;

  const goToHome = () => {
    if (shop_slug) {
      router.push(`/${shop_slug}`)
    }
    else {
      router.back()
    }
  }

  console.log(global);

 

  return (
    <Navbar className="fixed_header">
      <div className="container">
        <Navbar.Brand > <div className="brand h1" onClick={goToHome} role="button" >Shop Name</div> </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="m-2" role="button">
            <Link href="/cart" className="nav-link" >
              <FaShoppingCart size="40" />
            </Link>
            <span className="badge badge-danger cart_count">{cart_count}</span>
          </Navbar.Text>
          <Navbar.Text className="m-2">
            {
              global.isAuthenticated
                ? <Link href="/profile" className="btn nav-link"><FaUserCircle size="40" role="button" /></Link>
                : <button onClick={() => setLoginModal(true)} className="btn nav-link"><FaUserCircle size="40" role="button" /></button>
            }
          </Navbar.Text>
        </Navbar.Collapse>
      </div>
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
    </Navbar>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    cart_count: state.cart.data.length,
    global: state.global
  }
}


export default connect(mapStateToProps)(header);