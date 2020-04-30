import React from 'react'
import { Card, Col } from 'antd';
class MetricsLayout extends React.Component {
    render() {
        return (
            <Col span={6}>
                <Card>
                    <Statistic
                    title="Today Tweet count"
                    value={11}
                    valueStyle={{ color: '#3f8600' }}
                    />
                </Card>
            </Col>
        );
    }
}

