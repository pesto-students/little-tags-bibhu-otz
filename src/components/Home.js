import React from 'react';
import '../css/Home.css';
import Header from './Header';
import Banner from './Banner';
import Feature from './Features';
import Footer from './Footer';
import ProductList from './ProductList';
const Home = () =>{
    return(
       <div className="wrapper">
         <Header/>
         <Banner/>
         <Feature/>
         <ProductList/>
         <Footer/>
       </div>
    );
}

export default Home;