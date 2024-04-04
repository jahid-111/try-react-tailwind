

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const AxiosData = () => {
    const [phones, setPhones] = useState([]);
    useEffect( () => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then( data => {
            const phoneFetch = data.data.data;
            const phoneData = phoneFetch.map(phones => {
            const parts = phones.slug.split("-");
            const price = parseInt(parts[1]);
                const perPhone = {
                    name : phones.phone_name,
                    price: price,
                }
                return perPhone;
            })
          setPhones(phoneData)
        })
    } ,[])

    return (
        <div>
            <h3 className=' text-2xl underline text-center'>Bar Chart</h3>
          <BarChart  width={400} height={250} data={phones}>
                <Bar dataKey="price" fill='#684999'></Bar>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
                <Tooltip></Tooltip>
          </BarChart>
          
        </div>
    );
};

export default AxiosData;