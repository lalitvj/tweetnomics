import React, {Component} from 'react'
import { Layout} from 'antd';
const { Footer } = Layout;

class FooterLayout extends Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
            Tweetnomics ©2020 Created by <a href="#">Lalit Vijay</a>
            </Footer>
        );
    }
}
export default FooterLayout