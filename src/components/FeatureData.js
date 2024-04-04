

import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
const FeatureData = ( {services}) => {
    return (
        <div className=' flex gap-3  items-center'>
        <CheckCircleIcon  className='h-5 w-5 text-blue-600'></CheckCircleIcon>
        <p>{services}</p>
    </div>

    );
};

export default FeatureData;