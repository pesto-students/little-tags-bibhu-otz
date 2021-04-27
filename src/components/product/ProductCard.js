import React from 'react'
import {Link} from 'react-router-dom'

function ProductCard(props){
    return (
        <div className="col-md-3 col-sm-6 mb-2">
        <div className="card card-product-grid " >
            <Link to={`/products/${props.product.id}`} className="img-wrap">
                <img src={`${props.product.image}`} class="img-fluid  img-responsive" alt=""></img>
            </Link>
                   <figcaption className="info-wrap">
                        <Link to={`/products/${props.product.id}`} className="title">{ props.product.title }</Link>
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
                        <div className="price mt-1">$ { props.product.price }</div> 
                        <div className="price mt-1">{ props.product.category }</div> 
                        <Link to={`/products/${props.product.id}`} className="btn btn-info text-center w-100" >BUY NOW</Link>
                    </figcaption>
           
        </div>
        </div>
    )
}

export default ProductCard