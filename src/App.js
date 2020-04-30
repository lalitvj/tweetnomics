import React, {Component} from 'react';
import { Layout } from 'antd';
import { Line } from '@antv/g2plot';
import "antd/dist/antd.css";
import './App.css';
import HeaderLayout from './components/header';
import GraphLayout from './components/graphLayout';
import FooterLayout from './components/footer';

//TODO Put things in components 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <HeaderLayout></HeaderLayout>
          <Layout>
            <Layout className="text-center bold body">
              <GraphLayout></GraphLayout>
              <FooterLayout></FooterLayout>
            </Layout>
          </Layout>
        </Layout>
      </div>
    )
}

state = {
    tweets: [],
    todayTweetsCount: 0,
    totalTweetsCount: 0,
    sharePrice:0,
    MarketCap:0,
};

componentDidMount() {
    fetch('https://raw.githubusercontent.com/lalitvj/datasets_library/master/elonmusk_tweets.csv')
        .then(res => res.json())
        .then((data) => {
            this.setState({ tweets: {data} })
            console.log(this.state.tweets);
          })
        .catch(console.log)
        console.log(this.state.tweets);
        
        const data = [
          { year: '1991', value: 3 },
          { year: '1992', value: 4 },
          { year: '1993', value: 3.5 },
          { year: '1994', value: 5 },
          { year: '1995', value: 4.9 },
          { year: '1996', value: 6 },
          { year: '1997', value: 7 },
          { year: '1998', value: 9 },
          { year: '1999', value: 13 },
        ];
        const linePlot = new Line(document.getElementById('canvas'), {
          title: {
            visible: false,
          },
          description: {
            visible: false,
          },
          padding: [20, 100, 30, 80],
          forceFit: true,
          data,
          xField: 'year',
          yField: 'value',
          xAxis: {
            type: 'dateTime',
            label: {
              visible: true,
              autoHide: true,
            },
          },
          yAxis: {
            formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
          },
          legend: {
            visible: false,
          },
          label: {
            visible: false,
            type: 'line',
          },
          animation: {
            appear: {
              animation: 'clipingWithData',
            },
          },
          smooth: true,
        });
        //Plot chart
        linePlot.render();
}
  
}

export default App;
