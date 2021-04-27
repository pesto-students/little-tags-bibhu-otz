import React, { useContext } from 'react';
import { useStateValue } from '../context/StateProvider';
import FirebaseContext from '../config/context';
import {USERACTIONS} from "../actions";
import {Link} from 'react-router-dom';
import { FaShoppingBag,FaUser } from "react-icons/fa"; 
import SearchBar from './SearchBar';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const HeaderTop = () => {
	
    const [{ user },dispatch] = useStateValue();
    const firebase = useContext(FirebaseContext);
	const handleLogin = () => {
            
            firebase.auth.signOut();
            dispatch({
                type: USERACTIONS.SET_USER,
                user: null,
            });
			
        }
    
    return(
        <header className="section-header">
		
        <nav className="navbar navbar-dark navbar-expand p-0 bg-dark">
          <div className="container">
          <ul className="navbar-nav d-none d-md-flex mr-auto">
		        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
		        <li className="nav-item"><Link className="nav-link" to="#">Delivery</Link></li>
		        <li className="nav-item"><Link className="nav-link" to="#">Payment</Link></li>
          </ul>
          <ul className="navbar-nav">
		       <li  className="nav-item"><Link to="#" class="nav-link"> Call: +996754342345 </Link></li>
		       <li className="nav-item dropdown">
		 	         <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown"> English </Link>
		        <ul className="dropdown-menu dropdown-menu-right" >
				      <li><Link className="dropdown-item" to="#">Hindi</Link></li>
				     
		        </ul>
		     </li>
           </ul> 
          </div>
         </nav>
         <section className="header-main border-bottom">
         <div className="container">
        <div className="row align-items-center">
	    <div className="col-lg-2 col-4">
		<div className="brand-wrap">
			<h3>Little Tags</h3>
		</div> 
	</div>
	<div className="col-lg-6 col-sm-12">
		<SearchBar/>
	</div> 
	<div className="col-lg-4 col-sm-6 col-8">
		<div className="widgets-wrap float-md-right">
			<div className="widget-header  mr-3">
				<Link to="#" className="icon icon-sm rounded-circle border"><FaShoppingBag/> </Link>
				<span className="badge badge-pill badge-danger notify">0</span>
			</div>
			<div className="widget-header icontext">{
				user 
				?
				(
			      <Link  className="icon icon-sm rounded-circle border"><img src={user.photoURL} alt="" className="user-profile-img" /></Link>
				)
				:
				(
				  <Link  className="icon icon-sm rounded-circle border"><FaUser/></Link>
				)
			}
				
				<div className="text">
					
					<div>  {
						user ?
						(
							<Link to="#" onClick={() => handleLogin()} >Logout</Link>  
						)
						:(
						    <Link to="#" data-toggle="modal" data-target="#login" user={user} >Login | Signup </Link>   
                         )
                        }
					</div>
				</div>
			</div>
		</div>
	</div> 
</div> 
	    </div> 
         </section>
		 
	   <Login user={user}/>
      </header>
    );
}

export default HeaderTop;