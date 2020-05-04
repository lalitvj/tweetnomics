import React, {Component} from "react";
import ReactApexChart from "react-apexcharts";

class CorealationGraph extends Component {
    constructor(props) {
        super(props);
        const stock_prices =this.props.map(function(value,index) { return [value[0],parseFloat(value[1])]; });
        const tweets =this.props.map(function(value,index) { return [value[0],parseInt(value[2])]; });
        
        this.state = {
            series: [
                {
                    name: 'Tweets',
                    type: 'line',
                    data: tweets
                },
                {
                    name: 'Stock Price',
                    type: 'line',
                    data: stock_prices
                }
            ],         
            options: {
                chart: {
                height: '100%',
                type: 'line',
                stacked: false
                },
                dataLabels: {
                enabled: false
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    width: 2
                },
                xaxis: {
                    type: "datetime",
                    axisTicks: {
                        
                        show: false,
                    },
                    axisBorder: {
                        show: true,
                        color: '#008FFB'
                    },
                    labels: {
                        show: false,
                        style: {
                            colors: '#008FFB',
                        }
                    },
                },
                yaxis: [
                {
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: true,
                        color: '#008FFB'
                    },
                    title: {
                        text: "Tweets",
                        style: {
                        color: '#008FFB',
                        }
                    },
                    
                },
                {
                    seriesName: 'Stock Prices',
                    opposite: true,
                    type: 'line',
                    data: stock_prices,
                    axisTicks: {
                        show: true,
                    },
                    axisBorder: {
                        show: true,
                        color: 'rgb(0, 227, 150)'
                    },
                    title: {
                        text: "Stock Prices",
                        style: {
                            color: 'rgb(0, 227, 150)',
                        }
                    },
                    labels: {
                        style: {
                            colors: 'rgb(0, 227, 150)',
                        },
                    },
                    
                    },
            ],
            
            },
        };
    }
    
    render() {
        return (
            <div id="chart" >
                <ReactApexChart options={this.state.options} series={this.state.series} type="line"  />
            </div>
        );
    }
}

export default CorealationGraph