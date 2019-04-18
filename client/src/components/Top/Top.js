import React from 'react';
import { Bar } from 'react-chartjs-2';

class Top extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            chartData: {
                datasets: [],
                labels: []
            }
        }
    }
    
    componentDidMount() {
        fetch('/top')
            .then(res => res.json())
            .then(res => {
                const top = res.table;
                let metric = [];
                let product = [];
                let aisleUplift = []; let brandUplift = []; let offerUplift = [];
                top.forEach(element => {
                    if (!metric.includes(element.METRIC)){
                        metric.push(element.METRIC);
                    }
                    product.push(element.PRODUCT);
                    switch (element.PRODUCT){
                        case 'Aisle':
                            aisleUplift.push(element.PCT_UPLIFT*100);
                            break;
                        case 'Brand':
                            brandUplift.push(element.PCT_UPLIFT*100);
                            break;
                        case 'Offer':
                            offerUplift.push(element.PCT_UPLIFT*100);
                            break;
                        default:
                            break;
                    }
                });
                
                this.setState({ 
                    chartData: {
                        labels: metric,
                        datasets: [
                            {
                                label: 'Aisle',
                                data: aisleUplift,
                                backgroundColor: 'rgba(0, 0, 255, 0.4)'
                            },
                            {
                                label: 'Brand',
                                data: brandUplift,
                                backgroundColor: 'rgba(0, 255, 0, 0.4)'
                            },
                            {
                                label: 'Offer',
                                data: offerUplift,
                                backgroundColor: 'rgba(255, 0, 0, 0.4)'
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
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Percentage Uplift',
                        fontSize: 30
                    }
                }]
            }
        }
    
        return (
            
            <div className="container">
                
                <h1 className="page-title">Top</h1>
                <div className="chart" style={{marginBottom:"0px"}}>
                    <Bar 
                        data={this.state.chartData}
                        options={options}
                    />
                </div>
            </div>
        );

    }

}

export default Top;