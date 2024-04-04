

import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
      name: 'Page A',
      high:300,
      low: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      high: 3000,
      low: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      high: 2000,
      low: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      high: 2780,
      low: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      high: 1890,
      low: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      high: 2390,
      low: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      high: 3490,
      low: 4300,
      amt: 2100,
    },
  ];

const Recharts = () => {
    return (
        <div className=''>
            <h2 className=' text-2xl text-center underline '> Line Chart </h2>
            <LineChart width={400} height={250} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type='monotone' dataKey="high" stroke='#82ca9d'></Line>    
                <Tooltip></Tooltip>
            </LineChart>    
        </div>
    );
};

export default Recharts;