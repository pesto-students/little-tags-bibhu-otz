import React from 'react';
import '../css/Home.css';
import {Link} from 'react-router-dom';

const ProductDetails = () =>{
    return(
      <React.Fragment>
    <div className="card">
	    <div className="row no-gutters">
		    <aside className="col-md-6">
                <article className="gallery-wrap"> 
                    <div className="img-big-wrap">
  <div> <Link to="#"><img src="../images/items/3.jpg" alt=""/></Link></div>
</div> 
                    <div className="thumbs-wrap">
  <Link to="#" className="item-thumb"> <img src="../images/items/1.jpg" alt=""/></Link>
  <Link to="#" className="item-thumb"> <img src="../images/items/2.jpg"  alt=""/></Link>
  <Link to="#" className="item-thumb"> <img src="../images/items/3.jpg"  alt=""/></Link>
  <Link to="#" className="item-thumb"> <img src="../images/items/4.jpg"  alt=""/></Link>
</div> 
                </article> 
		    </aside>
		    <main className="col-md-6 border-left">
               <article className="content-body">
               <h2 className="title">Off-White Odsy-1000 Low-Top Sneakers</h2>
               <div className="rating-wrap my-3">
	             <ul className="rating-stars">
		<li  className="stars-active"> 
			<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
			<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
			<i className="fa fa-star"></i> 
		</li>
		<li>
			<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
			<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
			<i className="fa fa-star"></i> 
		</li>
	</ul>
	             <small className="label-rating text-muted">132 reviews</small>
	             <small className="label-rating text-success"> <i className="fa fa-clipboard-check"></i> 154 orders </small>
              </div>
               <div className="mb-3"> 
	<var className="price h4">$815.00</var> 
	<span className="text-muted">/per kg</span> 
</div> 
               <p>Virgil Abloh’s Off-White is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.</p>
               <dl className="row">
  <dt className="col-sm-3">Model#</dt>
  <dd className="col-sm-9">Odsy-1000</dd>
  <dt className="col-sm-3">Color</dt>
  <dd className="col-sm-9">Brown</dd>
  <dt className="col-sm-3">Delivery</dt>
  <dd className="col-sm-9">Russia, USA, and Europe </dd>
</dl>
               <hr/>
	           <div className="form-row">
		<div className="form-group col-md flex-grow-0">
			<label>Quantity</label>
			<div className="input-group mb-3 input-spinner">
			  <div className="input-group-prepend">
			    <button className="btn btn-light" type="button" id="button-plus"> + </button>
			  </div>
			  <input type="text" className="form-control" value="1"/>
			  <div className="input-group-append">
			    <button className="btn btn-light" type="button" id="button-minus"> &minus; </button>
			  </div>
			</div>
		</div> 
		    <div className="form-group col-md">
				<label>Select size</label>
				<div className="mt-1">
					<label className="custom-control custom-radio custom-control-inline">
					  <input type="radio" name="select_size" checked="" className="custom-control-input"/>
					  <div className="custom-control-label">Small</div>
					</label>

					<label className="custom-control custom-radio custom-control-inline">
					  <input type="radio" name="select_size" className="custom-control-input"/>
					  <div className="custom-control-label">Medium</div>
					</label>

					<label className="custom-control custom-radio custom-control-inline">
					  <input type="radio" name="select_size" className="custom-control-input"/>
					  <div className="custom-control-label">Large</div>
					</label>

				</div>
		</div> 
	       </div> 
               <Link to="#" className="btn  btn-primary"> Buy now </Link>
	           <Link to="#" className="btn  btn-outline-primary"> <span className="text">Add to cart</span> <i className="fas fa-shopping-cart"></i>  </Link>
               </article> 
	        </main> 
	    </div> 
    </div>
      </React.Fragment>
    );
}

export default ProductDetails;