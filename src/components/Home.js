import React from 'react';
import Header from './Header';
import Slider from './slider';
import ElectronicsPage from './Electronics';
import Groceries from './groceriespage';
import Fashion from './fashionpage';
import Footer from './Footer';
 
const Home = function() {
    return (
        <div>
          <Header />  
          <Slider />
          <ElectronicsPage />
          <Groceries />
          <Fashion />
          <Footer />
        </div>
    );
}

export default Home;