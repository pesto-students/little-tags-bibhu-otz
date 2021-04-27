import React from 'react';
import Loader from '../Loader'
import ProductCard from './ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

const PopularProduct = () =>{
    const url = `https://fakestoreapi.com/products`
    let products = useAxiosGet(url)
    let content = null
    if(products.error){
        content = <div>
            <div className="bg-blue-300 mb-2 p-3">
                If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
            </div>
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    if(products.loading){
        content = <Loader></Loader>
    }

    if(products.data){
        content = 
        products.data.map((product) => 
           <ProductCard key={product.id} product={product} />
           
        )
    }
    return (
        <section className="section-content">
        <div className="container">
        <header className="section-heading">
            <h3 className="section-title">Popular products</h3>
        </header>
        <div className="row">
        <div className="card-group">
            { content } 
            
         </div> 
         </div>
        </div> 
        </section>
    );
}

export default PopularProduct;