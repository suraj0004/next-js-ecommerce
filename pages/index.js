import Layout from '../layouts/default'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <h1>All Categories</h1>
      <div className="row mt-5">

        <div className="col-md-3 ">
          <Link href="/products">
            <div class="card bg-dark text-white shadow-lg p-3 mb-5 bg-white rounded category">
              <Image
                priority
                src="/images/profile.jpg"
                className="card-img-top"
                height={250}
                width={250}
              />
              <div class="card-img-overlay">
                <h5 class="card-title ">Card title</h5>

              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-3 ">
          <Link href="/products">
            <div class="card bg-dark text-white shadow-lg p-3 mb-5 bg-white rounded category">
              <Image
                priority
                src="/images/profile.jpg"
                className="card-img-top"
                height={250}
                width={250}
              />
              <div class="card-img-overlay">
                <h5 class="card-title ">Card title</h5>

              </div>
            </div>
          </Link>
        </div>
        
         <div className="col-md-3 ">
          <Link href="/products">
            <div class="card bg-dark text-white shadow-lg p-3 mb-5 bg-white rounded category">
              <Image
                priority
                src="/images/profile.jpg"
                className="card-img-top"
                height={250}
                width={250}
              />
              <div class="card-img-overlay">
                <h5 class="card-title ">Card title</h5>

              </div>
            </div>
          </Link>
        </div> 
        
        <div className="col-md-3 ">
          <Link href="/products">
            <div class="card bg-dark text-white shadow-lg p-3 mb-5 bg-white rounded category">
              <Image
                priority
                src="/images/profile.jpg"
                className="card-img-top"
                height={250}
                width={250}
              />
              <div class="card-img-overlay">
                <h5 class="card-title ">Card title</h5>

              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-3 ">
          <Link href="/products">
            <div class="card bg-dark text-white shadow-lg p-3 mb-5 bg-white rounded category">
              <Image
                priority
                src="/images/profile.jpg"
                className="card-img-top"
                height={250}
                width={250}
              />
              <div class="card-img-overlay">
                <h5 class="card-title ">Card title</h5>

              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3 ">
          <Link href="/products">
            <div class="card bg-dark text-white shadow-lg p-3 mb-5 bg-white rounded category">
              <Image
                priority
                src="/images/profile.jpg"
                className="card-img-top"
                height={250}
                width={250}
              />
              <div class="card-img-overlay">
                <h5 class="card-title ">Card title</h5>

              </div>
            </div>
          </Link>
        </div>

      </div>
    </Layout>
  )
}
