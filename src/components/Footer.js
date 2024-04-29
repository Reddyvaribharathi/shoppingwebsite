import React from 'react';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const Footer = function() {

    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <footer className="py-5">
                <div className="row">
                <div className="col-6 col-md-2 mb-3">
                <h5>Electronics</h5>
                <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="# " className="nav-link p-0 ">Laptops</a></li>
                <li className="nav-item mb-2"><a href="# " className="nav-link p-0 ">Mobiles</a></li>
                <li className="nav-item mb-2"><a href="# " className="nav-link p-0 ">SmartWatches</a></li>
                <li className="nav-item mb-2"><a href="# " className="nav-link p-0 ">Fridges</a></li>
                <li className="nav-item mb-2"><a href="# " className="nav-link p-0 ">WashingMachines</a></li>
                </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                <h5>Groceries</h5>
                <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="# " className="nav-link p-0 ">Fruits</a></li>
                <li className="nav-item mb-2"><a href="# " className="nav-link p-0 ">Vegetables</a></li>
                <li className="nav-item mb-2"><a href="# " className="nav-link p-0 ">Dryfruits</a></li>
                <li className="nav-item mb-2"><a href="# " className="nav-link p-0 ">Pulses</a></li>
                <li className="nav-item mb-2"><a href="# " className="nav-link p-0 ">Spices</a></li>
                </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                <h5>Fashion</h5>
                <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="# " className="nav-link p-0 ">Men's Wear</a></li>
                <li className="nav-item mb-2"><a href="# " className="nav-link p-0 ">Women's Wear</a></li>
                <li className="nav-item mb-2"><a href="# " className="nav-link p-0 ">Kid's Wear</a></li>
                <li className="nav-item mb-2"><a href="# " className="nav-link p-0 ">Sandals</a></li>
                <li className="nav-item mb-2"><a href="# " className="nav-link p-0 ">Perfumes</a></li>
                </ul>
                </div>

                <div className="col-md-5 offset-md-1 mb-3">
                <form>
                <h5>Subscribe to our newsletter<span><LocalMallRoundedIcon /></span></h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
                </form>
                </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 border-top border-bottom mx-0">
                <p>© {year} Company, Inc. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
                <li className="ms-3"><a className="" href="# "><TwitterIcon /></a></li>
                <li className="ms-3"><a className="" href="# "><InstagramIcon /></a></li>
                <li className="ms-3"><a className="" href="# "><FacebookRoundedIcon /></a></li>
                </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;