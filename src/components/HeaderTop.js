import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import Login from './Login';
import SignUp from './SignUp';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const HeaderTop = () => {
    return(
        <header className="section-header">
        <nav className="navbar navbar-dark navbar-expand p-0 bg-dark">
          <div className="container">
          <ul className="navbar-nav d-none d-md-flex mr-auto">
		        <li className="nav-item"><Link className="nav-link" to="#">Home</Link></li>
		        <li className="nav-item"><Link className="nav-link" to="#">Delivery</Link></li>
		        <li className="nav-item"><Link className="nav-link" to="#">Payment</Link></li>
          </ul>
          <ul className="navbar-nav">
		       <li  className="nav-item"><Link to="#" class="nav-link"> Call: +996754342345 </Link></li>
		       <li className="nav-item dropdown">
		 	         <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown"> English </Link>
		        <ul class="dropdown-menu dropdown-menu-right" >
				      <li><Link className="dropdown-item" to="#">Hindi</Link></li>
				     
		        </ul>
		     </li>
           </ul> 
          </div>
         </nav>
         <section className="header-main border-bottom">
         <div class="container">
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
				<Link to="#" className="icon icon-sm rounded-circle border"><i class="fa fa-shopping-cart"></i></Link>
				<span className="badge badge-pill badge-danger notify">0</span>
			</div>
			<div className="widget-header icontext">
				<Link to="#" className="icon icon-sm rounded-circle border"><i className="fa fa-user"></i></Link>
				<div className="text">
					
					<div> 
						<Link to="#" data-toggle="modal" data-target="#login">Login</Link> |  
						<Link to='#'data-toggle="modal" data-target="#signup">Signup</Link>
					</div>
				</div>
			</div>
		</div>
	</div> 
</div> 
	</div> 
         </section>
		 <div class="modal fade  " id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content col-10">
      <div class="modal-header">
	      <h4 className="card-title mb-4">Login</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
	   <Login/>
      </div>
      
    </div>
  </div>
</div>

<div class="modal fade" id="signup" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content col-10">
      <div class="modal-header">
	      <h4 className="card-title mb-4">SignUp</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
	   <SignUp/>
      </div>
      
    </div>
  </div>
</div>
        </header>
    );
}

export default HeaderTop;