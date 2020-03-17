import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
const data = [
    { name: 'Day 1', Average: 60, Work: 72, Life: 51, World: 65 },
    { name: 'Day 2', Average: 72, Work: 85, Life: 41, World: 90 },
    { name: 'Day 3', Average: 52, Work: 61, Life: 70, World: 45 },
    { name: 'Day 4', Average: 45, Work: 32, Life: 51, World: 47 },
    { name: 'Day 5', Average: 76, Work: 72, Life: 82, World: 70 },
    { name: 'Day 6', Average: 80, Work: 90, Life: 80, World: 70 },
    { name: 'Day 7', Average: 67, Work: 72, Life: 63, World: 65 },
];
class SimpleLineChart extends React.Component {
    state = {
        opacity: {
            Average: 1,
            Work: 1,
            Life: 1,
            World: 1
        },
    };

    handleMouseEnter = (o) => {
        const { dataKey } = o;
        const { opacity } = this.state;

        this.setState({
            opacity: { ...opacity, [dataKey]: 1 },
        });
    };

    handleMouseLeave = (o) => {
        const { dataKey } = o;
        const { opacity } = this.state;

        this.setState({
            opacity: { ...opacity, [dataKey]: 0.5 },
        });
    };

    renderColorfulLegendText(value, entry) {
        const { color } = entry;
      
      return <span style={{color}}>{value}</span>;
    };

    render() {
        const { opacity } = this.state;
        return (
            <LineChart width={600} height={300} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" tick={{ fill: 'white' }} />
                <YAxis tick={{ fill: 'white' }} />
                <CartesianGrid strokeDasharray="3 3" fill="white" />
                <Tooltip />
                <Legend formatter={this.renderColorfulLegendText} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
                <Line type="monotone" dataKey="Average" strokeOpacity={opacity.Average} stroke="#197BBD" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Work" strokeOpacity={opacity.Work} stroke="#58DD7A" />
                <Line type="monotone" dataKey="Life" strokeOpacity={opacity.Life} stroke="#E6B0BF" />
                <Line type="monotone" dataKey="World" strokeOpacity={opacity.World} stroke="#6622CC" />
            </LineChart>
        );
    }
}

export default SimpleLineChart;