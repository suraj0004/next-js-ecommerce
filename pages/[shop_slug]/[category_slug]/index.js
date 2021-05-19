import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { useRouter } from 'next/router'

import { connect } from 'react-redux';
import { fetchProducts } from '@/redux/index'
import ProductList from '@/components/product/ProductList'
import { useEffect } from 'react';
import ProductLoader from '@/components/product/ProductLoader'

function Products({ fetchProducts, products }) {

  const router = useRouter()
  const { shop_slug, category_slug } = router.query;

  const goBack = () => {
    router.push(`/${shop_slug}`)
  }


  useEffect(() => {
    shop_slug && category_slug && fetchProducts( shop_slug, category_slug );
  }, [ shop_slug, category_slug]);


  return (
    <>
      <h3 className="header_h3">
        <div className="container ">
          <button type="button" onClick={goBack} className="btn"> <FaRegArrowAltCircleLeft size="35" /> </button> Category Name
        </div>
      </h3>
      <div className="row pt-200">
        {
          products.loading
            ? <ProductLoader />
            : <ProductList products={products.data} />
        }
      </div>
    </>
  )
}


const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: ( shop_slug, category_slug) => dispatch(fetchProducts( shop_slug, category_slug))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);