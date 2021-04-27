import React from 'react';

const Features = () =>{
    return (
        <section className="section-content padding-y-sm">
        <div className="container">
         <article className="card card-body">
		  <div className="row">
               <div className="col-md-4">	
		<article className="card card-body">
			<figure className="itemside">
				<div className="aside">
					<span className="icon-sm rounded-circle bg-primary">
						<i className="fa fa-money-bill-alt white"></i>
					</span>
				</div>
				<figcaption className="info">
					<h5 className="title">Reasonable prices</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labor </p>
				</figcaption>
			</figure> 
		</article> 
	</div>
               <div className="col-md-4">
		<article className="card card-body">
			<figure className="itemside">
				<div className="aside">
					<span className="icon-sm rounded-circle bg-secondary">
						<i className="fa fa-comment-dots white"></i>
					</span>
				</div>
				<figcaption className="info">
					<h5 className="title">Customer support 24/7 </h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labor </p>
				</figcaption>
			</figure> 
		</article> 
	</div>
	           <div className="col-md-4">
		<article className="card card-body">
			<figure className="itemside">
				<div className="aside">
					<span className="icon-sm rounded-circle bg-success">
						<i className="fa fa-truck white"></i>
					</span>
				</div>
				<figcaption className="info">
					<h5 className="title">Quick delivery</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labor </p>
				</figcaption>
			</figure> 
		</article> 
	</div>
          </div> 
          </article> 
          </div>
        </section>
    );
}

export default Features;