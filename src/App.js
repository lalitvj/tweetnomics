import React, {Component} from 'react';
import { Statistic, Card, Row, Col, Layout, Breadcrumb } from 'antd';
import { Line } from '@antv/g2plot';
import "antd/dist/antd.css";
import './App.css';
const { Header, Content, Footer } = Layout;

//TODO Put things in components 
class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout>
    <Header className="header">
      <div className="headerContent" />
      <div className="text-white bold font-24"><img className="logoHolder" src="/logo192.png" alt="Tweetonomics logo"/>
      Tweetonomics
      </div>

    </Header>
    
    <Layout>
      
      <Layout className="text-center bold body" style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          
          <Breadcrumb.Item>Elon Musk</Breadcrumb.Item>
          <Breadcrumb.Item>Tesla</Breadcrumb.Item>
        </Breadcrumb>
        <Content 
          className="site-layout-background text-center fullHeight "
          style={{
            padding: 24,
            margin: 0,
            
          }}
          style={{minHeight:"56vh"}}
        >
        <br />
          Corelation in Share price of Tesla and Tweet's of Elon Musk
          <div id="canvas"></div>
        </Content>
        <Content>
        <div className="site-statistic-demo-card">
    <Row style={{paddingTop:"16px"}} gutter={16}>
      <Col span={6}>
        <Card>
          <Statistic
            title="Today Tweet count"
            value={11}
            valueStyle={{ color: '#3f8600' }}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic
            title="Total Tweet count"
            value={12345}
            valueStyle={{ color: '#222222' }}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic
            title="Market Cap"
            value={109.32}
            precision={2}
            valueStyle={{ color: '#0779e4' }}
            prefix="$"
            suffix="B"
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic
            title="Share Price"
            value={749.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix="$"
            
          />
        </Card>
      </Col>
    </Row>
  </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Tweetnomics ©2020 Created by <a href="#">Lalit Vijay</a></Footer>
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
