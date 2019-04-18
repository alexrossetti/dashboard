import React from 'react';
import { Line } from 'react-chartjs-2';

class Brand extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            chartData: {}
        }
    }
    
    componentDidMount() {
        fetch('/weekly/brand')
            .then(res => res.json())
            .then(res => {
                const weekly = res.table;
                let weekCommencing = [];
                let exposed = [];
                let control = [];
                weekly.forEach(element => {
                    weekCommencing.push(element.WEEK_COMMENCING.slice(0, 10));
                    exposed.push(element.EXPOSED);
                    control.push(element.CONTROL)
                });
                this.setState({ 
                    chartData: {
                        labels: weekCommencing,
                        datasets: [
                            {
                                label: 'Exposed',
                                data: exposed,
                                backgroundColor:['rgba(255, 0, 0, 0.1)']
                            },
                            {
                                label: 'Control',
                                data: control,
                                hidden: true,
                                backgroundColor:['rgba(255, 0, 0, 0.5)']
                            }
                        ]
                    }  
                });
            });
            
    }

    render() {

        const options = {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }],
                xAxes: [{
                    ticks: {
                        
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Week Commencing',
                        fontSize: 22
                    }
                }]
            }
        }

        return (
            <div className="brand">
                <div className="chart">
                    <h1 className="chart-title">Brand</h1>
                    <Line 
                        data={this.state.chartData}
                        options={options}
                    />
                </div>
            </div>
        );

    }

}

export default Brand;