import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';


const Chart = () => {

    const data = [
  {
    name: 'Jan',
    pv: 2400
  },
  {
    name: 'Feb',
    pv: 2000
  },
  {
    name: 'Mar',
    pv: 5400
  },
  {
    name: 'Apr',
    pv: 7400
  },
  {
    name: 'May',
    pv: 2400
  },
  {
    name: 'Jun',
    pv: 9000
  },
  {
    name: 'Jul',
    pv: 2400
  },
  {
    name: 'Aug',
    pv: 0
  },
  {
    name: 'Sep',
    pv: 8200
  },
  {
    name: 'Oct',
    pv: 5000
  },
  {
    name: 'Nov',
    pv: 7000
  },
  {
    name: 'Dec',
    pv: 10000
  },
  
];


    return (
        <div className="chart">
          <h3 className="chartTitle">Students Analytics</h3>
           <ResponsiveContainer width="100%" aspect={4 / 1 }>
               <LineChart data={data}>
                   <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
               </LineChart>
           </ResponsiveContainer>
        </div>
    )
}

export default Chart
