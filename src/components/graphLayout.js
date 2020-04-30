import React from 'react'

import { Statistic, Card, Row, Col, Breadcrumb, Layout } from 'antd';
const { Content } = Layout;
//TODO create stats components
class GraphLayout extends React.Component {
    render() {
        return (
        <div>
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
        </div>    
        );
    }
}

export default GraphLayout


