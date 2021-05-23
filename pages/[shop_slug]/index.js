import { connect } from 'react-redux';
import { fetchCategories, setShopSlug } from '@/redux/index'
import CategoryList from '@/components/category/CategoryList'
import { useEffect } from 'react';
import CategoryLoader from '@/components/category/CategoryLoader'
import { useRouter } from 'next/router'

function Home({fetchCategories, categories, setShopSlug}) {

  const router = useRouter()
  const { shop_slug } = router.query;

  useEffect(() => {
    if(shop_slug){
      fetchCategories(shop_slug);
      setShopSlug(shop_slug);
    }
  },[shop_slug]);

  return (
    <>
      <h3 className="header_h3">
        <div className="container ">
          All Categories
        </div>
      </h3>
      <div className="row pt-200">
        {
          categories.loading
          ? <CategoryLoader />
          :<CategoryList categories={categories.data} />
        }
      </div>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: (shop_slug) => dispatch(fetchCategories(shop_slug)),
    setShopSlug : (shop_slug) => dispatch(setShopSlug(shop_slug))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
