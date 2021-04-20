import  React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
 const Login =()=>
 {
     return(
        <section className="section-content padding-y ">
        <div className="card mx-auto">
        <div className="card-body ">
        
        <form>
              <Link href="#" className="btn btn-info btn-block mb-2"> <i className="fab fa-facebook-f"></i> &nbsp;  Sign in with Facebook</Link>
              <Link href="#" className="btn btn-danger btn-block mb-4"> <i className="fab fa-google"></i> &nbsp;  Sign in with Google</Link>
            <div className="form-group">
               <input name="" className="form-control" placeholder="Username" type="text"/>
            </div> 
            <div className="form-group">
              <input name="" className="form-control" placeholder="Password" type="password"/>
            </div> 
            
            <div className="form-group">
                <Link href="#" className="float-right">Forgot password?</Link> 
                <div className="float-left custom-control custom-checkbox"> <input type="checkbox" className="custom-control-input" checked=""/> <span className="custom-control-label"> Remember </span> 
            </div> 
            <div className="form-group">

            </div>
            <div className="form-group mt-2">
                <button type="submit" className="btn btn-primary btn-block"> Login  </button>
            </div> 
            </div>
        </form>
        </div> 
      </div>
  
       <p className="text-center mt-4">Don't have account? <Link href="#">Sign up</Link></p>
      
 </section>
     );
 }

 export default Login;