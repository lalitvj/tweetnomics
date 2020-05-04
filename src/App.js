import React, {Component} from 'react';
import { Layout } from 'antd';
import ReactDOM from 'react-dom'
import { readRemoteFile } from 'react-papaparse';
import "antd/dist/antd.css";
import './App.css';
import HeaderLayout from './components/header';
import GraphLayout from './components/graphLayout';
import FooterLayout from './components/footer';
import CorealationGraph from './components/graph';
import MetricsLayout from './components/metricsCard';


class App extends Component {
  state = {
    tweet:{},
    stock: {}
  }
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

componentDidMount() {
    readRemoteFile(
      'https://raw.githubusercontent.com/lalitvj/datasets_library/master/elonmusk_tweets.csv',
      { header: false,
        complete: (results) => {
          //Removing the text header
          results.data.shift()
          const data= results.data
          
          function getSum(total, item) {
            return Number.isInteger(Number(item[2]))? total+Number(item[2]):total;
          }
          this.state.tweet.todayCount = Number(results.data.slice(0)[0][2])
          this.state.tweet.totalCount = results.data.reduce(getSum, 0)

          const domContainer = document.getElementById('canvas');
          const graph = new CorealationGraph(data); 
          ReactDOM.render(graph.render(), domContainer);
        }
      }
    )
    fetch('https://styledotme-73391.firebaseio.com/stock/TSLA.json')
        .then(res => res.json())
        .then((data) => {
          this.setState({ stock: data })
          console.log(this.state);
          ReactDOM.render([
            <MetricsLayout 
              title="Tweet Count Today"
              value= {this.state.tweet.todayCount}
              color="#69c0ff"
          />,
          <MetricsLayout 
          title="Total Tweet Count"
          value= {this.state.tweet.totalCount}
          color="#722ed1"
        />,
        <MetricsLayout 
          title="Stock Price"
          value= {this.state.stock.close}
          color="#0779e4"
          prefix="$"
          
        />,
        <MetricsLayout 
          title="Market Cap"
          value= {this.state.stock.market_cap}
          color="#09e499"
          prefix="$"
          
        />
        ], document.getElementById('metricsCard')
          );
          

        })
        .catch(console.log)
        
}
}

export default App;
