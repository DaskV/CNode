import React,{ Component, PropTypes } from 'react';
import {NavBar, Icon} from 'antd-mobile'
import './style.scss';
class Header extends Component{
    render(){
        return (
            <div className="Headers">
                <NavBar
                    leftContent="返回"
                    mode="light"
                    onLeftClick={() => window.history.go(-1)}
                    rightContent={[
                    <div key={0}>    
                        <Icon key = "0" type = "search" style = {{ marginRight: '0.32rem' }} style={{display:this.props.search===true?"block":"none"}} />
                        <Icon key="1" type="ellipsis" style={{display:this.props.ellipsis===true?"block":"none"}} / ><span style={{display:this.props.submit===true?"block":"none"}}>提交</span>
                    </div>
                    ]}>
                    {this.props.title}</NavBar>
            </div>
        );
    }
};

export default Header;