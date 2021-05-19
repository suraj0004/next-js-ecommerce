export default function Profile() {
    return (
      <>
        <h3 className="header_h3">
          <div className="container ">
              
          </div>
        </h3>
        <div className="pt-200">
            <div className="container">
            <div className="row">
                  <div className="col-12">
                  <form>
  
                      <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div class="card bg-dark  shadow-sm p-3 mb-5 bg-white rounded category">
                                    <p className="text-primary">User Name</p>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                              <div class="card bg-dark  shadow-sm p-3 mb-5 bg-white rounded category">
                                <h4 class="text-center text-primary">Checkout</h4>
                                <div className="form-group">
                                    <input className="form-control" name="name" placeholder="Enter Your Name" />  
                                </div>   
                                <div className="form-group">
                                    <input className="form-control" name="mobile" placeholder="Enter Your Mobile" />  
                                </div>   
                                <div className="form-group">
                                    <input className="form-control" type="datetime-local" name="time" placeholder="Enter Your Time To Pickup" />  
                                </div>   
                                <div className="form-group">
                                    <input className="form-control" name="amount" placeholder="Total Amount" />  
                                </div>  
                                <div className="form-group">
                                    <input className="form-control" name="products" placeholder="Total Products" />  
                                </div>   
                                <div className="form-group">
                                     <button className="btn btn-primary">Submit</button>
                                </div>
                              </div>  
                            </div>
                            
                            
                              
                      </div>
                      </form>  
  
                  </div>  
              </div> 
            </div>
        </div>
      </>
    )
  }
  