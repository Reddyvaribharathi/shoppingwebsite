import React from 'react';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';

const Header = function() {
    return(
        <div className="header">
            <header className="p-3 text-bg-dark">
                <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="# " className="nav-link px-2 text-decoration-none Websitename">YOYO!</a>
                <a href="/ " className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <LocalMallRoundedIcon />
                </a>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/slider" className="nav-link px-2 text-secondary">Home</a></li>
                <li><a href="/Electronics" className="nav-link px-2 text-white">Electronics</a></li>
                <li><a href="/Groceries" className="nav-link px-2 text-white">Groceries</a></li>
                <li><a href="/Fashion" className="nav-link px-2 text-white">Fashion</a></li>
                </ul>
                

                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
                </form>

                <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2">Login</button>
                <button type="button" className="btn btn-warning">Sign-up</button>
                </div>
                </div>
                </div>
            </header>
        </div>
    );
}

export default Header;