import React from 'react'
import { Layout} from 'antd';
const { Footer } = Layout;

class FooterLayout extends React.Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
            Tweetnomics ©2020 Created by <a href="#">Lalit Vijay</a>
            </Footer>
        );
    }
}
export default FooterLayout