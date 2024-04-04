

import React from 'react';
import FeatureData from './FeatureData';

const Pricing = ( {price} ) => {
    const services = price.services;
    return (
        <div className="bg-green-400 px-4  rounded-md">
            <h3 className='text-center'>
                <span className=' text-6xl font-bold text-white'> {price.price}</span>
                <span className=' text-2xl font-normal text-white '>/Month</span>
            </h3>
    
            <p className='my-3 text-center text-3xl font-semibold text-white'> {price.name}</p>
            {
                services.map( (service, idx) => <FeatureData
                    key={idx}
                    services={service}
                ></FeatureData>)
            }
            <button className=' my-4 hover:bg-green-300 bg-green-500 text-white w-full py-4 rounded-b-md font-semibold mt-6'>Buy Now</button>
        </div>
    );
};

export default Pricing;