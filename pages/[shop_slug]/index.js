import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()
    const {shop_slug} = router.query;
  return (
    <>
      <h3 className="header_h3">
        <div className="container ">
        All Categories
        </div>
      </h3>
      <div className="row pt-200">

        <div className="col-md-3 ">
          <Link href={`${shop_slug}/cat`}>
            <div className="card bg-dark text-white shadow-lg p-3 mb-5 bg-white rounded category">
              <Image
                priority
                src="/images/profile.jpg"
                className="card-img-top"
                height={250}
                width={250}
              />
              <div className="card-img-overlay">
                <h5 className="card-title ">Card title</h5>

              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-3 ">
          <Link href={`${shop_slug}/cat`}>
            <div className="card bg-dark text-white shadow-lg p-3 mb-5 bg-white rounded category">
              <Image
                priority
                src="/images/profile.jpg"
                className="card-img-top"
                height={250}
                width={250}
              />
              <div className="card-img-overlay">
                <h5 className="card-title ">Card title</h5>

              </div>
            </div>
          </Link>
        </div>
        
         <div className="col-md-3 ">
          <Link href={`${shop_slug}/cat`}>
            <div className="card bg-dark text-white shadow-lg p-3 mb-5 bg-white rounded category">
              <Image
                priority
                src="/images/profile.jpg"
                className="card-img-top"
                height={250}
                width={250}
              />
              <div className="card-img-overlay">
                <h5 className="card-title ">Card title</h5>

              </div>
            </div>
          </Link>
        </div> 
        
        <div className="col-md-3 ">
          <Link href={`${shop_slug}/cat`}>
            <div className="card bg-dark text-white shadow-lg p-3 mb-5 bg-white rounded category">
              <Image
                priority
                src="/images/profile.jpg"
                className="card-img-top"
                height={250}
                width={250}
              />
              <div className="card-img-overlay">
                <h5 className="card-title ">Card title</h5>

              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-3 ">
          <Link href={`${shop_slug}/cat`}>
            <div className="card bg-dark text-white shadow-lg p-3 mb-5 bg-white rounded category">
              <Image
                priority
                src="/images/profile.jpg"
                className="card-img-top"
                height={250}
                width={250}
              />
              <div className="card-img-overlay">
                <h5 className="card-title ">Card title</h5>

              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3 ">
          <Link href={`${shop_slug}/cat`}>
            <div className="card bg-dark text-white shadow-lg p-3 mb-5 bg-white rounded category">
              <Image
                priority
                src="/images/profile.jpg"
                className="card-img-top"
                height={250}
                width={250}
              />
              <div className="card-img-overlay">
                <h5 className="card-title ">Card title</h5>

              </div>
            </div>
          </Link>
        </div>

      </div>
    </>
  )
}
