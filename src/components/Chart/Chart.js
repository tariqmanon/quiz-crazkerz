import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const Chart = ({ datas }) => {
    const { name, total } = datas;
    //console.log(name, total)
    const data = [
        { name, value: total }
    ];

    return (
        <BarChart width={600} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
    );
}

export default Chart;

