import { useEffect } from 'react';
import BackHeader from '~/components/BackHeader'
import { connect } from 'react-redux';
import { fetchOrderDetail } from '~/redux/index'
import { useRouter } from 'next/router'
import OrderDetail from '~/components/myAccount/orders/detail/OrderDetail'

const index = ({ fetchOrderDetail, orderDetail }) => {

  const router = useRouter()
  const { order_no } = router.query;
  console.log(router.query);

  useEffect(() => {
    if (order_no) {
      console.log(order_no);
      fetchOrderDetail(order_no);
    }
  }, [order_no]);

  console.log(orderDetail);

  return (
    <>
      <BackHeader />
      <div className="pt-200">
        <div className="row">
          {
            (orderDetail.loading || !orderDetail.data)
              ? "Loading"
              : <OrderDetail data={orderDetail.data} />
          }
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    orderDetail: state.orderDetail,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrderDetail: (order_no) => dispatch(fetchOrderDetail(order_no)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(index);