import React from 'react'
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <footer className="section-footer border-top bg-dark text-light">
        <div className="container">
            <section className="footer-top padding-y">
                <div className="row">
                    <aside className="col-md">
                        <h6 className="title text-light"><u>Brands</u></h6>
                        <ul className="list-unstyled">
                            <li> <Link href="#">Adidas</Link></li>
                            <li> <Link href="#">Puma</Link></li>
                            <li> <Link href="#">Reebok</Link></li>
                            <li> <Link href="#">Nike</Link></li>
                        </ul>
                    </aside>
                    <aside className="col-md">
                        <h6 className="title text-light"><u>Company</u></h6>
                        <ul className="list-unstyled">
                            <li> <Link href="#">About us</Link></li>
                            <li> <Link href="#">Career</Link></li>
                            <li> <Link href="#">Find a store</Link></li>
                            <li> <Link href="#">Rules and terms</Link></li>
                            <li> <Link href="#">Sitemap</Link></li>
                        </ul>
                    </aside>
                    <aside className="col-md">
                        <h6 className="title text-light"><u>Help</u></h6>
                        <ul className="list-unstyled">
                            <li> <Link href="#">Contact us</Link></li>
                            <li> <Link href="#">Money refund</Link></li>
                            <li> <Link href="#">Order status</Link></li>
                            <li> <Link href="#">Shipping info</Link></li>
                            <li> <Link href="#">Open dispute</Link></li>
                        </ul>
                    </aside>
                    <aside className="col-md">
                        <h6 className="title text-light"><u>Account</u></h6>
                        <ul className="list-unstyled">
                            <li> <Link href="#"> User Login </Link></li>
                            <li> <Link href="#"> User register </Link></li>
                            <li> <Link href="#"> Account Setting </Link></li>
                            <li> <Link href="#"> My Orders </Link></li>
                        </ul>
                    </aside>
                    <aside className="col-md">
                        <h6 className="title text-light"><u>Social</u></h6>
                        
                        <ul className="list-unstyled">
                            <li><Link href="#"> <i className="fab fa-facebook"></i> Facebook </Link></li>
                            <li><Link href="#"> <i className="fab fa-twitter"></i> Twitter </Link></li>
                            <li><Link href="#"> <i className="fab fa-instagram"></i> Instagram </Link></li>
                            <li><Link href="#"> <i className="fab fa-youtube"></i> Youtube </Link></li>
                        </ul>
                    </aside>
                </div> 
            </section>	
    
            <section className="footer-bottom border-top row">
                <div className="col-md-2">
                    <p className="text-muted"> &copy; 2021 Little Tag Inc. </p>
                </div>
                <div className="col-md-8 text-md-center">
                    <span  className="px-2">info@Littletag.com</span>
                    <span  className="px-2">+6633234445</span>
                    <span  className="px-2">Street name 123, Avanue abc</span>
                </div>
                <div className="col-md-2 text-md-right text-muted">
                    <i className="fab fa-lg fa-cc-visa"></i>
                    <i className="fab fa-lg fa-cc-paypal"></i>
                    <i className="fab fa-lg fa-cc-mastercard"></i>
                </div>
            </section>
        </div>  
    </footer>
    );
}

export default Footer;