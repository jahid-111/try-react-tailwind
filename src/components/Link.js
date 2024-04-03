

import React from 'react';

const Link = ({ route }) => {
         
    return (
          <li className=' bg-yellow-700 text-white'>
            <a className=' font-semibold' href={route.path}> {route.name}</a>
          </li>

    );
};

export default Link;