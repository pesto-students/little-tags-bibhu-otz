import  React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
 const SignUp =()=>
 {
     return(
        <section className="section-content padding-y">
             <div className="card" >
              <article className="card-body">
                                <form>
                                            <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Name"/>
                    </div> 
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Email"/>
                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Mobile</label>
                        <input type="phone" className="form-control" placeholder="Mobile "/>
                        <small className="form-text text-muted">We'll never share your Mobile# with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="password" placeholder="Password"/>
                    </div> 
                    <div className="form-group">
                        <label>Confirm password</label>
                        <input className="form-control" type="password" placeholder="Confirm Password"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block"> Register  </button>
                    </div>     
                    <div className="form-group"> 
                            <div className="custom-control custom-checkbox"> 
                               <input type="checkbox" className="custom-control-input" checked=""/> 
                               <span className="custom-control-label"> I am agree with <Link to="#">terms and contitions</Link></span>  
                            </div> 
                    </div>       
                    </form>
                </article>
            </div> 
            <p className="text-center mt-4">Have an account? <Link to="">Log In</Link></p>
          </section>
     );
 }

 export default SignUp;