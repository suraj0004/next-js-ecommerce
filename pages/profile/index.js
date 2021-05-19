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
                          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                              
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div class="card bg-dark text-white shadow-lg p-3 mb-5 bg-white rounded category">
                              <h4 class="text-center text-primary">Enter Your Details</h4>
                              <div className="form-group">
                                  <input className="form-control" name="name" placeholder="Enter Your Name" />  
                              </div>   
                              <div className="form-group">
                                  <input className="form-control" name="mobile" placeholder="Enter Your Mobile" />  
                              </div>   
                              <div className="form-group">
                                  <input className="form-control" name="city" placeholder="Enter Your City" />  
                              </div>   
                              <div className="form-group">
                                  <input className="form-control" name="password" placeholder="New Password" />  
                              </div>  
                              <div className="form-group">
                                  <input className="form-control" name="cpassword" placeholder="Confirm Password" />  
                              </div>   
                              <div className="form-group">
                                   <button className="btn btn-primary">Submit</button>
                              </div>
                            </div>  
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                              
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
