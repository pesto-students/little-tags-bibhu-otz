import  React,{ useContext, useState }  from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import firebase from "firebase";
import FirebaseContext from "../config/context";


 const Login =(user)=>
 {
  const firebaseContext = useContext(FirebaseContext);
  const [phoneNumber, setPhoneNumber] = useState("+91");
  let modalState= (user ? false : true);
  const loginWithFacebook = () => {
    firebaseContext.doFacebookSignIn()
    .then(result => {
      modalState=false;
     }).catch((error) => {
       console.warn("Error in login", error);
     })
   };
 
   const loginWithGoogle = () => {
     firebaseContext
       .doGoogleSignIn()
       .then(authUser => {
        modalState=false;
       }).catch(err => {
         console.log(err);
       })
   }
 
   const loginWithPhone = () => {

     const recaptcha = new firebase.auth.RecaptchaVerifier("recaptch-container");
     firebaseContext
       .doPhoneSignIn(phoneNumber, recaptcha)
       .then(e => {
         const code = prompt("enter Otp");
         e.confirm(code).then(result => {
          modalState=false;
         }).catch(err => {
           console.log(err)
         });
       }).catch(err => {
       })
   }
   
   const handleShow=()=> {
    modalState=!modalState;
   }
     return(
      <div className={"modal fade" + (modalState ? " show d-block" : " d-none")} id="login"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
      <div className="modal-header">
      <h4 className="card-title">Login</h4>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleShow}>
         <span aria-hidden="true">&times;</span>
       </button>
      </div>
      <div className="modal-body">
        <section className="section-content padding-y ">
        <div className="card mx-auto">
        <div className="card-body ">
            <Link href="#" className="btn btn-block mb-2"><img src='images\facebook-sign-in.png' alt="" className="img-fluid" onClick={loginWithFacebook} /> </Link>
            <Link href="#" className="btn btn-block  mb-4"> <img src='images\btn_google_signin_dark_pressed_web.png' alt="" className="img-fluid" onClick={loginWithGoogle} /></Link>
            <div className="form-group ">
                 <h6 className="text-center">-OR-</h6>
            </div>
            <div className="form-group">
               <input name="mobile" className="form-control "  placeholder="Mobile Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}  required type="phone"/>
            </div> 
            <div className="form-group" id="recaptch-container"></div>
            <div className="form-group mt-2">
                <button type="submit" className="btn btn-primary btn-block" onClick={loginWithPhone} > Login  </button>
            </div>
        </div> 
      </div>
  
       <p className="text-center mt-4">Don't have account? <Link href="#">Sign up</Link></p>
      
 </section>
    </div>
      
      </div>
    </div>
  </div>
     );
 }

 export default Login;