import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';

const Statistics = () => {
    const states = useLoaderData().data;
    console.log(states[0].total)
    return (
        <div className='container'>
            <h2>Our Statistics</h2>

            {
                states.map(datas => <Chart
                    key={datas.id}
                    datas={datas}
                ></Chart>)
            }
        </div>
    );
};

export default Statistics;