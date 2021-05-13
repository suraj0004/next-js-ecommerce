import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { connect } from 'react-redux';
import { fetchCategories } from '@/redux/index'

function Home(props) {
  
  const router = useRouter()
  const { shop_slug } = router.query;

  return (
    <>
      <h3 className="header_h3">
        <div className="container ">
          All Categories
        </div>
      </h3>
      <div className="row pt-200">

        {
          props.categories.data.map((category) => {
            return <div className="col-md-3 ">
              <Link href={`${shop_slug}/${category.id}`}>
                <div className="card bg-dark text-white shadow-lg p-3 mb-5 bg-white rounded category">
                  <Image
                    priority
                    src={category.image}
                    className="card-img-top"
                    height={250}
                    width={250}
                  />
                  <div className="card-img-overlay">
                    <h5 className="card-title ">{category.name}</h5>
                  </div>
                </div>
              </Link>
            </div>
          })
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
    fetchCategories: (postData, callBackMethod) => dispatch(fetchCategories(postData, callBackMethod))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
