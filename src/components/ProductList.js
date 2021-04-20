import React from 'react';
import '../css/Home.css';
import PopularProduct from './product/PopularProduct';
import NewArrivedProduct from './product/NewArrivedProduct';
import RecomendedProduct from './product/RecomendedProduct';


const ProductList = () =>{
    return(
      <React.Fragment>
         <PopularProduct/>
         <NewArrivedProduct/>
         <RecomendedProduct/>
      </React.Fragment>
    );
}

export default ProductList;