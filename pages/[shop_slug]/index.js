import { connect } from 'react-redux';
import { fetchCategories } from '@/redux/index'
import CategoryList from '@/components/category/CategoryList'
import { useEffect } from 'react';
import CategoryLoader from '@/components/category/CategoryLoader'

function Home({fetchCategories, categories}) {

  useEffect(() => {
    fetchCategories();
  },[]);

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
    fetchCategories: () => dispatch(fetchCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
