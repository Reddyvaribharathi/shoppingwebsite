import React from 'react';
import fashion from './images/fashion.jpg'

const Fashion = function() {
    return (
         <div className='fashionpage'>
            <img src={fashion} alt='fashion page' className='images' />
         </div>
    );
}

export default Fashion;