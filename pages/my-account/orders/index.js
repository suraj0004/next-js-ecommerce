import { useEffect } from 'react';
import BackHeader from '~/components/BackHeader'
import { FaFilter } from 'react-icons/fa';
import OrderList from '~/components/myAccount/orders/OrderList'
import { connect } from 'react-redux';
import { fetchOrders } from '~/redux/index'

const index = ({fetchOrders, orders}) => {

    useEffect(() => {
        fetchOrders();
      }, []);

    console.log(orders);

    return (
        <>
            <BackHeader />
            <div className="pt-200">
                <div className="row">
                   <div className="col-12">
                   <h3 className="h3 pb-2">Showing All orders 
                   {/* <button className="btn border bg-light float-right"> <FaFilter/> Filter </button> */}
                    </h3>
                   <hr/>
                   {
                       orders.loading
                       ?"Loading..."
                       : <OrderList orders={orders.data} />
                   }
                   </div>
                </div>
            </div>
        </>
    );
};
const mapStateToProps = (state, ownProps) => {
    return {
      orders: state.orders,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchOrders: () => dispatch(fetchOrders()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(index);