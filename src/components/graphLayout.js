import React from 'react'

import { Row, Breadcrumb, Layout } from 'antd';
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
            <Content className="site-layout-background content text-center fullHeight ">
                <br />
                Correlation in Share price of Tesla and Tweet's of Elon Musk
                
                //canvas for Graph
                <div id="canvas"></div>
            </Content>
            <Content>
                <div className="">
                    <Row style={{paddingTop:"16px"}} gutter={16} id="metricsCard"></Row>
                </div>
            </Content>
        </div>    
        );
    }
}

export default GraphLayout


