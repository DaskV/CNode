import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {NavBar, Icon, Badge,Tabs,Drawer,Button,List,Modal} from 'antd-mobile'
import getTime from '../../../utils/getTime'
import './style.scss';
import avatar from '../../../styles/image/avatar.png'

const TabPane = Tabs.TabPane;
const Item = List.Item;
const alert =Modal.alert;

class Header extends Component {
     state={
        open:false,
        position: 'left'
     }
     callback=(key)=>{
        this.props.OnhandleTabClick(this.props.tabs[key].filter);
     }    
     onOpenChange =()=> {
        this.setState({ open: !this.state.open });
    }
    handleLogout=()=>{
        alert('注销','确定注销吗?',[
            {text:'取消',onPress:()=>console.log('cancel')},
            {text:'确定',onPress:()=>{
                this.props.Logout();   //注销login-state
                console.log('ok')
            }}
        ])
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

        
        const drawerContent =(
            <div className="out">
                {   this.props.personinfo.success &&
                    <div className="sidebar_head">
                        <img src={this.props.personinfo.avatar_url} className="avatar_url" />
                        <p className="loginName">{this.props.personinfo.loginname}</p>
                        <p>积分:{this.props.personinfo.score}</p>
                        <p>注册时间:{getTime(this.props.personinfo.create_at)}</p>
                        <p>github账号:{this.props.personinfo.githubUsername}</p>
                        <div className="logout">
                            <Button type="primary" inline onClick={this.handleLogout}>注销</Button>
                        </div>
                    </div>
                }
                {   !this.props.personinfo.success&&
                    <div className="sidebar_head">
                        <Link to='/login'>
                            <img src={avatar} className="avatar_url" />
                        </Link>                       
                        <p className="loginName">点击头像登录</p>
                    </div>
                }
                
                <List>
                    <Link to={`/personInfo/${this.props.personinfo.loginname}`} onClick={()=>document.querySelector("body").style.overflow='auto'} > 
                        <Item>
                            <i className="iconfont">&#xe732;</i>个人主页               
                        </Item>
                    </Link>    
                    <Item><i className="iconfont">&#xe69f;</i>消息中心</Item>
                </List>
            </div>
        )
        const drawerProps = {
            open: this.state.open,
            position: this.state.position,
            onOpenChange: this.onOpenChange,
        };

        //控制drawer出现时 禁止滚动条
        if(drawerProps.open===true){
            document.querySelector("body").style.overflow='hidden';
        }
        else{
            document.querySelector("body").style.overflow='auto';
        }
        return (       
            <div>
                <div className={drawerProps.open===true?"main":"main show"}>
                    <NavBar
                        className="header"
                        iconName="ellipsis"
                        mode="light"
                        onLeftClick={this.onOpenChange}
                        rightContent={[
                        <div className="rightcontent">
                            <i className="iconfont remind">&#xe713;</i>
                            <Badge text={this.props.unreadcount} className="badge" style={{opacity:this.props.isshow==true ? 1 : 0}} />
                        </div>]}               
                        ><span className="title">NodeJS-CN论坛</span>
                    </NavBar>
                    {/*因为hammerJs swipe动画切换会有bug，目前没有找到解决办法,暂时设置animated=false */}
                    <Tabs defaultActiveKey={ActiveKey(this.props.filter)} onChange={this.callback}  className="tab" animated={false} /*hammerOptions={new Hammer.Swipe({event:"swipedown"})}*/ >
                        {                       
                            this.props.tabs.map((tab,i)=>                        
                                <TabPane tab={tab.title} key={i}>
                                    {this.props.children}
                                </TabPane>
                            )
                        }
                    </Tabs>
               </div>
               <Drawer
                    className="my-drawer"
                    style={{ minHeight: document.documentElement.clientHeight - 200}}
                    sidebar={drawerContent}
                    {...drawerProps}
                    >
                    <div></div>
               </Drawer>
            </div>
        );
    }
}

Header.propTypes = {
    OnhandleTabClick:PropTypes.func.isRequired
};




export default Header;