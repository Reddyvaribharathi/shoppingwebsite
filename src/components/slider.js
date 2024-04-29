import React, { useState } from 'react';
import firstpage from './images/firstpage.jpg';
import secondimage from './images/secondimage.jpg';
import thirdimage from './images/thirdimage.jpg';
import fourthimage from './images/fourthimage.jpg';


const Slider = function() {
    const [currentPage, setCurrentPage] = useState(1);

    const handleNext = () => {
        if(currentPage <= 3){
           setCurrentPage(currentPage + 1);
        }
        else {
            setCurrentPage(1) ;
        } 
    }

    const handlePrevious = () => {
        if(currentPage > 1){
           setCurrentPage(currentPage - 1) ;
        } 
        else {
            setCurrentPage(4);
        }  
    }

    return (
        <div id="carouselExampleInterval" className="sliderimg carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
            <div className={`carousel-item ${currentPage === 1 ? "active" : ""}`} >
            <img src={firstpage} className="d-block w-100 images" alt="this  describing sale is 50%"></img>
            </div>
            <div className={`carousel-item ${currentPage === 2 ? "active" : ""}`} >
            <img src={secondimage} className="d-block w-100 images " alt="this  is of sale in electronics" />
            </div>
            <div className={`carousel-item ${currentPage === 3 ? "active" : ""}`} >
            <img src={thirdimage} className="d-block w-100 images" alt="this  is linked to groceries" />
            </div>
            <div className={`carousel-item ${currentPage === 4 ? "active" : ""}`}  >
            <img src={fourthimage} className="d-block w-100 images" alt="this  is linked to fashion" />
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" onClick={handlePrevious}></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" onClick={handleNext}></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slider;