import React from 'react';
import electronics from './images/electronics.jpg'

const ElectronicsPage = function() {
    return (
        <div className='electronicspage'>
          <img src={electronics} alt='electronicspage' className='images'/>
        </div>
    );
}

export default ElectronicsPage;