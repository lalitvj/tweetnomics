import React from 'react'
import { Statistic, Card, Col } from 'antd';

class MetricsLayout extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Col span={6} xs={24} sm={12} md={6}>
                <Card size="small">
                <Statistic
                    title={this.props.title}
                    value={this.props.value}
                    valueStyle={{ color: this.props.color , fontSize:'4vw' }}
                    prefix={this.props.prefix}
                    suffix={this.props.suffix}
                    
                />
                </Card>
            </Col>
        );
    }
}

export default MetricsLayout
