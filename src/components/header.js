import React from 'react'
import { Layout} from 'antd';
const { Header } = Layout;

class HeaderLayout extends React.Component {
    render() {
        return (
            <Header className="header">
                <div className="headerContent" >
                    <div className="text-white bold font-24">
                        <img className="logoHolder" src="/logo192.png" alt="Tweetonomics logo"/>
                        Tweetonomics
                    </div>
                </div>
            </Header>
        );
    }
}

export default HeaderLayout