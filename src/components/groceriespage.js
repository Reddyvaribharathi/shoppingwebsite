import React from 'react';
import groceriersoffer from './images/groceriesoffer.jpg'

const Groceries = function() {
    return (
     <div className='grocerierspage'>
        <img src={groceriersoffer} alt='groceriersoffer page' className='images' />
     </div>
    );
}

export default Groceries;