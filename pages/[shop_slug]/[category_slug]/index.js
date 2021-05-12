
import Image from 'next/image'
import { FaRegArrowAltCircleLeft, FaPlus } from 'react-icons/fa';
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Products() {

  const router = useRouter()
  const { shop_slug } = router.query;

  const goBack = () => {
    router.push(`/${shop_slug}`)
  }



  return (
    <>
      <h3 className="header_h3">
        <div className="container ">
        <button type="button" onClick={goBack} className="btn"> <FaRegArrowAltCircleLeft size="35" /> </button> Category Name
        </div>
      </h3>
      <div className="row pt-200">

        <div className="col-lg-6 col-12 ">
          <div className="card m-3 shadow-lg">
            <div className="row g-0 p-2">
              <div className="col-md-4 p-2 border rounded shadow-lg">
                <img
                  priority
                  src="/images/profile.jpg"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Nescafe Coffee 50g</h5>
                  <p className="card-text">
                    per 50 gm
                </p>
                  <button className="btn btn-outline-primary __float-right p-2">Add <FaPlus /> </button>
                  <h3 className="card-title ">₹150</h3>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="col-lg-6 col-12 ">
          <div className="card m-3 shadow-lg">
            <div className="row g-0 p-2">
              <div className="col-md-4 p-2 border rounded shadow-lg">
                <img
                  priority
                  src="/images/profile.jpg"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Nescafe Coffee 50g</h5>
                  <p className="card-text">
                    per 50 gm
                </p>
                  <button className="btn btn-outline-primary __float-right p-2">Add <FaPlus /> </button>
                  <h3 className="card-title ">₹150</h3>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="col-lg-6 col-12 ">
          <div className="card m-3 shadow-lg">
            <div className="row g-0 p-2">
              <div className="col-md-4 p-2 border rounded shadow-lg">
                <img
                  priority
                  src="/images/profile.jpg"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Nescafe Coffee 50g</h5>
                  <p className="card-text">
                    per 50 gm
                </p>
                  <button className="btn btn-outline-primary __float-right p-2">Add <FaPlus /> </button>
                  <h3 className="card-title ">₹150</h3>
                </div>
              </div>
            </div>
          </div>
        </div>




      </div>
    </>
  )
}
