import { useRouter } from 'next/router'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { fetchcart } from '@/redux/index'
import { useEffect } from 'react';
import { connect } from 'react-redux';

function Cart({ fetchcart, cart }) {

  const router = useRouter()
  const goBack = () => {
    router.back()
  }

  useEffect(() => {
    fetchcart();
  }, []);

  console.log(cart);

  return (
    <>
      <h3 className="header_h3">
        <div className="container ">
          <button type="button" onClick={goBack} className="btn"> <FaRegArrowAltCircleLeft size="35" /> </button> Back
      </div>
      </h3>
      <div className="row pt-200">

      </div>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchcart: () => dispatch(fetchcart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
