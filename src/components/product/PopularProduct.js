import React from 'react';
import {Link} from 'react-router-dom';

const PopularProduct = () =>{
    return (
        <section className="section-content">
        <div className="container">
        <header className="section-heading">
            <h3 className="section-title">Popular products</h3>
        </header>
        <div className="row">
            <div className="col-md-3">
                <div to="#" className="card card-product-grid">
                    <Link to="#" className="img-wrap"><img src="images/items/1.jpg" alt=""/></Link>
                    <figcaption className="info-wrap">
                        <Link to="#" className="title">Just another product name</Link>
                        <div className="rating-wrap">
                            <ul className="rating-stars">
                                <li  className="stars-active"> 
                                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> 
                                </li>
                            </ul>
                            <span className="label-rating text-muted"> 34 reviws</span>
                        </div>
                        <div className="price mt-1">$179.00</div> 
                    </figcaption>
                </div>
            </div> 
            <div className="col-md-3">
                <div to="#" className="card card-product-grid">
                    <Link to="#" className="img-wrap"> <img src="images/items/2.jpg" alt=""/> </Link>
                    <figcaption className="info-wrap">
                        <Link to="#" className="title">Some item name here</Link>
                        
                        <div className="rating-wrap">
                            <ul className="rating-stars">
                                <li  className="stars-active"> 
                                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> 
                                </li>
                            </ul>
                            <span className="label-rating text-muted"> 34 reviws</span>
                        </div>
                        <div className="price mt-1">$280.00</div> 
                    </figcaption>
                </div>
            </div> 
            <div className="col-md-3">
                <div to="#" className="card card-product-grid">
                    <Link to="#" className="img-wrap"> <img src="images/items/3.jpg" alt="" /> </Link>
                    <figcaption className="info-wrap">
                        <Link to="#" className="title">Great product name here</Link>
                        
                        <div className="rating-wrap">
                            <ul className="rating-stars">
                                <li  className="stars-active"> 
                                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> 
                                </li>
                            </ul>
                            <span className="label-rating text-muted"> 34 reviws</span>
                        </div>
                        <div className="price mt-1">$56.00</div> 
                    </figcaption>
                </div>
            </div> 
            <div className="col-md-3">
                <div to="#" className="card card-product-grid">
                    <Link to="#" className="img-wrap"> <img src="images/items/4.jpg" alt="" /> </Link>
                    <figcaption className="info-wrap">
                        <Link to="#" className="title">Just another product name</Link>
                        
                        <div className="rating-wrap">
                            <ul className="rating-stars">
                                <li  className="stars-active"> 
                                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                </li>
                                <li>
                                    <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i> 
                                </li>
                            </ul>
                            <span className="label-rating text-muted"> 34 reviws</span>
                        </div>
                        <div className="price mt-1">$179.00</div> 
                    </figcaption>
                </div>
            </div> 
        </div> 
        
        </div> 
        </section>
    );
}

export default PopularProduct;