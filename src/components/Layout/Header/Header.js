import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {NavBar, Icon, Badge,Tabs} from 'antd-mobile'
import './style.scss';

const TabPane = Tabs.TabPane;

class Header extends Component {

     callback=(key)=>{
        this.props.OnhandleTabClick(this.props.tabs[key].filter);
     }

    render() {
        
        function ActiveKey(filter){
            switch(filter){
                case "all":return "0";
                case "filter":return "1";
                case "share":return "2";
                case "ask":return "3";
                case "job":return "4";
            }
        }

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
                        <Badge text={this.props.unreadcount} className="badge" style={{opacity:this.props.isshow==true ? 1 : 0}} />
                    </div>]}               
                    ><span className="title">NodeJS-CN论坛</span>
               </NavBar>
               {/*因为hammerJs swipe动画切换会有bug，目前没有找到解决办法,暂时设置animated=false */}
               <Tabs defaultActiveKey={ActiveKey(this.props.filter)} onChange={this.callback} onTabClick={this.handleTabClick}  className="tab" animated={false} /*hammerOptions={new Hammer.Swipe({event:"swipedown"})}*/ >
                    {                       
                        this.props.tabs.map((tab,i)=>                        
                             <TabPane tab={tab.title} key={i}>
                                 {this.props.children}
                            </TabPane>
                        )
                    }
               </Tabs>

            </div>
        );
    }
}

Header.propTypes = {
    OnhandleTabClick:PropTypes.func.isRequired
};

export default Header;