import React from 'react';
import '../css/Home.css';
import {Link} from 'react-router-dom';

const CartPage = () =>{
    return(
      <React.Fragment>
        <div className="row">
		  <aside className="col-lg-9">
		    <div className="card">
			 <table className="table table-borderless table-shopping-cart">
               <thead className="text-muted">
                 <tr className="small text-uppercase">
           <th scope="col">Product</th>
           <th scope="col" width="120">Quantity</th>
           <th scope="col" width="120">Price</th>
           <th scope="col" className="text-right" width="200"> </th>
          </tr>
               </thead>
               <tbody>
                 <tr>
	        <td>
		     <figure className="itemside align-items-center">
			 <div className="aside"><img src="../images/items/1.jpg" className="img-sm" alt=""/></div>
			 <figcaption className="info">
				<Link to="#" className="title text-dark">Camera Canon EOS M50 Kit</Link>
				<p className="text-muted small">Matrix: 25 Mpx <br/> Brand: Canon</p>
			 </figcaption>
		    </figure>
	        </td>
	       <td> 
		   <select className="form-control">
			<option>1</option>
			<option>2</option>	
			<option>3</option>	
			<option>4</option>	
		   </select> 
	       </td>
	      <td> 
		    <div className="price-wrap"> 
			<var className="price">$1156.00</var> 
			<small className="text-muted"> $315.20 each </small> 
		</div> 
	      </td>
	      <td className="text-right"> 
			<Link data-original-title="Save to Wishlist" title="" to="" className="btn btn-light" data-toggle="tooltip"> <i className="fa fa-heart"></i></Link> 
			<Link to="" className="btn btn-light"> Remove</Link>
         </td>
</tr>
                 <tr>
	<td>
		<figure className="itemside align-items-center">
			<div className="aside"><img src="../images/items/2.jpg" className="img-sm" alt=""/></div>
			<figcaption className="info">
				<Link to="#" className="title text-dark">ADATA Premier ONE microSDXC</Link>
				<p className="text-muted small">Size: 256 GB  <br/> Brand: ADATA </p>
			</figcaption>
		</figure>
	</td>
	<td> 
		<select className="form-control">
			<option>1</option>
			<option>2</option>	
			<option>3</option>	
			<option>4</option>	
		</select> 
	</td>
	<td> 
		<div className="price-wrap"> 
			<var className="price">$149.97</var> 
			<small  className="text-muted"> $75.00 each </small>  
		</div> 
	</td>
	<td className="text-right"> 
	<Link data-original-title="Save to Wishlist" title="" to="" className="btn btn-light" data-toggle="tooltip"> <i className="fa fa-heart"></i></Link> 
	<Link to="" className="btn btn-light btn-round"> Remove</Link>
	</td>
</tr>
                 <tr>
	<td>
		<figure className="itemside align-items-center">
			<div className="aside"><img src="../images/items/3.jpg" alt="" className="img-sm"/></div>
			<figcaption className="info">
				<Link to="#" className="title text-dark">Gamepad Sony DualShock 4</Link>
				<p className="small text-muted">Version: CUH-ZCT2E  <br/> Brand: Sony</p>
			</figcaption>
		</figure>
	</td>
	<td> 
		<select className="form-control">
			<option>1</option>
			<option>2</option>	
			<option>3</option>	
		</select> 
	</td>
	<td> 
		<div className="price-wrap"> 
			<var className="price">$98.00</var> 
			<small className="text-muted"> $578.00 each</small> 
		</div> 
	</td>
	<td className="text-right"> 
		<Link data-original-title="Save to Wishlist" title="" to="" className="btn btn-light" data-toggle="tooltip"> <i className="fa fa-heart"></i></Link> 
		<Link to="" className="btn btn-light btn-round"> Remove</Link>
	</td>
</tr>
               </tbody>
             </table>
		    </div>
		    <div className="card-body border-top">
	         <p className="icontext"><i className="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
            </div> 
		  </aside>
		  <aside className="col-lg-3">
		    <div className="card mb-3">
			   <div className="card-body">
				   <form>
				    <div className="form-group">
					 <label>Have coupon?</label>
						<div className="input-group">
							<input type="text" className="form-control" name="" placeholder="Coupon code"/>
							<span className="input-group-append"> 
								<button className="btn btn-primary">Apply</button>
							</span>
						</div>
                	 </div>
				   </form>
			   </div>
			</div>
		    <div className="card">
			    <div className="card-body">
				<dl className="dlist-align">
				<dt>Total price:</dt>
				<dd className="text-right">$69.97</dd>
				</dl>
				<dl className="dlist-align">
				<dt>Discount:</dt>
				<dd className="text-right text-danger">- $10.00</dd>
				</dl>
				 <dl className="dlist-align">
		         <dt>Total:</dt>
		         <dd className="text-right text-dark b"><strong>$59.97</strong></dd>
		         </dl>
				 <p className="text-center mb-3">
					<img src="../images/misc/payments.png" height="26" alt="" />
				 </p>
				 <Link to="#" className="btn btn-primary btn-block"> Make Purchase </Link>
				 <Link to="#" className="btn btn-light btn-block">Continue Shopping</Link>
				</div>
			</div>
		  </aside>
		</div>   
		<div className="row">
		   <aside className="col-md-9">
		      <header className="mb-4">
			    <h4 className="card-title">Review cart</h4>
		      </header>
			  <div className="row">
				<div className="col-md-6">
					<figure className="itemside  mb-3">
						<div className="aside"><img src="../images/items/1.jpg" className="border img-xs" alt="" /></div>
						<figcaption className="info">
							<p>Name of the product goes here or title </p>
							<span>2x $290 = Total: $430 </span>
						</figcaption>
					</figure>
				</div> 
				<div className="col-md-6">
					<figure className="itemside  mb-3">
						<div className="aside"><img src="../images/items/2.jpg" alt="" className="border img-xs" /></div>
						<figcaption className="info">
							<p>Name of the product goes here or title </p>
							<span>2x $290 = Total: $430 </span>
						</figcaption>
					</figure>
				</div> 
				<div className="col-md-6">
					<figure className="itemside mb-3">
						<div className="aside"><img src="../images/items/3.jpg" className="border img-xs" alt=""/></div>
						<figcaption className="info">
							<p>Name of the product goes here or title </p>
							<span>1x $290 = Total: $290 </span>
						</figcaption>
					</figure>
				</div>
				<div className="col-md-6">
					<figure className="itemside  mb-3">
						<div className="aside"><img src="../images/items/4.jpg" className="border img-xs" alt=""/></div>
						<figcaption className="info">
							<p>Name of the product goes here or title </p>
							<span>4x $290 = Total: $430 </span>
						</figcaption>
					</figure>
				</div> 
               <article className="card-body border-top">

		<dl className="row">
		  <dt className="col-sm-10">Subtotal: <span className="float-right text-muted">2 items</span></dt>
		  <dd className="col-sm-2 text-right"><strong>$1,568</strong></dd>

		  <dt className="col-sm-10">Discount: <span className="float-right text-muted">10% offer</span></dt>
		  <dd className="col-sm-2 text-danger text-right"><strong>$29</strong></dd>

		  <dt className="col-sm-10">Delivery charge: <span className="float-right text-muted">Express delivery</span></dt>
		  <dd className="col-sm-2 text-right"><strong>$120</strong></dd>

		  <dt className="col-sm-10">Tax: <span className="float-right text-muted">5%</span></dt>
		  <dd className="col-sm-2 text-right text-success"><strong>$7</strong></dd>

		  <dt className="col-sm-10">Total:</dt>
		  <dd className="col-sm-2 text-right"><strong className="h5 text-dark">$1,650</strong></dd>
		</dl>

	</article> 
             </div> 
		   </aside>
		</div>

      </React.Fragment>
    );
}

export default CartPage;