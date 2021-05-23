

import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '@/redux/index'
import { useEffect } from 'react';





export default function Profile() {

  const [data, setData] = useState({});
  // const  [name, setName] = useState();
  const handleFormSubmission = (e) => {
  
    // console.log(e.target, 'jj');
    const name  = e.target[0].value;
    const mobile  = e.target[1].value;
    const city = e.target[2].value;
    const password = e.target[3].value;
    const cpassword = e.target[4].value;
    const user_type  = 3;
    // setName(e.target[0].value);
    
    const formData  = {'name': name, 'mobile': mobile, 'city':city,  'password': password, 'user_type':user_type};
  
    
  }




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
                <form onSubmit={(e) => {
                  e.preventDefault()
          handleFormSubmission(e);
        }}>

                    <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                              
                          </div>
                          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div className="card bg-dark text-white shadow-sm p-3 mb-5 bg-white rounded category">
                              <h4 className="text-center text-primary pb-4 pt-2">Update your Profile</h4>
                              <div className="form-group">
                                  <input className="form-control" type="text" name="name" placeholder="Enter Your Name" />  
                              </div>   
                              <div className="form-group">
                                  <input className="form-control" type="number" name="mobile" placeholder="Enter Your Mobile" />  
                              </div>   
                              <div className="form-group">
                                  <input className="form-control" type="text" name="city" placeholder="Enter Your City" />  
                              </div>   
                              <div className="form-group">
                                  <input className="form-control" type="password" name="password" placeholder="New Password" />  
                              </div>  
                              <div className="form-group">
                                  <input className="form-control" type="password" name="cpassword" placeholder="Confirm Password" />  
                              </div>   
                              <div className="form-group">
                                   <button type="submit" className="btn btn-primary">Update</button>
                              </div>
                            </div>  
                          </div>
                          {/* <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                              
                          </div> */}
                          
                            
                    </div>
                    </form>  

                </div>  
            </div> 
          </div>
      </div>
    </>
  )
}
