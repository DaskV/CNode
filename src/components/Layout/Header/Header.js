import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {NavBar, Icon, Badge,Tabs} from 'antd-mobile'
import './style.scss';

const TabPane = Tabs.TabPane;

class Header extends Component {

    callback(key){
        // console.log('onChange', key);
    }
    handleTabClick(key){
        //  console.log('onTabClick', key);
    }
    render() {
        return (
            <div>
                <NavBar
                    className="header"
                    iconName="ellipsis"
                    mode="light"
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                    <div className="rightcontent">
                        <i className="iconfont remind">&#xe713;</i>
                        <Badge text={'0'} className="badge" />
                    </div>]}
                 
                    ><span className="title">NodeJS-CN论坛</span>
               </NavBar>
               <Tabs defaultActiveKey="1" onChange={this.callback} onTabClick={this.handleTabClick}  pageSize={5} className="tab">
                    <TabPane tab="选项卡一" key="1">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }} >
                        选项卡一内容
                        </div>
                    </TabPane>
                    <TabPane tab="选项卡二" key="2">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                        选项卡二内容
                        </div>
                    </TabPane>
                    <TabPane tab="选项卡三" key="3">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                        选项卡三内容
                        </div>
                    </TabPane>
               </Tabs>

            </div>
        );
    }
}

Header.propTypes = {};

export default Header;