import { useRouter } from 'next/router'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { connect } from 'react-redux';
import CartList from '@/components/cart/CartList'
import CheckoutDetails from "@/components/cart/checkout/CheckoutDetails"


function Cart({  cart }) {

  const router = useRouter()
  const goBack = () => {
    router.back()
  }

  console.log("cartttt");
  console.log(cart);

  return (
    <>
      <h3 className="header_h3">
        <div className="container ">
          <button type="button" onClick={goBack} className="btn"> <FaRegArrowAltCircleLeft size="35" /> </button> Back
      </div>
      </h3>
      <div className="row pt-200">
      <div className="col-lg-4 bg-white border">
         <CheckoutDetails/>
        </div>
        <div className="col-lg-1">
          <br/>
        </div>
       
        <div className="col-lg-7 p-1 card">
          {
            (cart.loading)
            ?"Loading"
            :<CartList cart={cart.data} />
          }
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart,
  }
}


export default connect(mapStateToProps)(Cart);
