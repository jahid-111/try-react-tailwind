
import React from 'react';
import Pricing from './Pricing';

const PriceSection = () => {
    const priceOption =[
        {id:1, name: "Free", price:0,
         services:["Use easily", "Awesome Feature", "Exrtra Feature", "Will never use ferature" , "Kisu nai Feature", "Hudai Feature", "On free Feature"]},
       
         {id:2, name: "Premium", price:19.9,
         services:["Use easily", "Awesome Feature", "Exrtra Feature", "Will never use ferature" , "Kisu nai Feature", "Hudai Feature", "On free Feature"]},
       
         {id:3, name: "Platinum", price:99.9,
         services:["Use easily", "Awesome Feature", "Exrtra Feature", "Will never use ferature" , "Kisu nai Feature", "Hudai Feature", "On free Feature"]},
    ]

    return (
        <div className='  '>
           <h2 className=' text-5xl p-4 text-center font-bold bg-lime-700  text-white mt-3 rounded-md '> Product Pricing</h2>

            <div className=' bg-red-200 h-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 my-5 '>
                {
                priceOption.map( price => <Pricing
                    key={price.id}
                    
                    price={price}
                    
                ></Pricing>)
                }
            </div>

        </div>
    );
};

export default PriceSection;    