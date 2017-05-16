import React, { Component, PropTypes } from 'react';
import {WingBlank, InputItem} from 'antd-mobile'
import './style.scss'


class Add extends Component {
    constructor(){
        super()
        this.state={
            sort:"",
            title:""
        }
    }

    infoChange=()=>{
        this.setState({
            sort:this.refs.sort.value,
            title:this.refs.title.refs.input.value
        },function(){
             this.props.getInfo(this.state)
        }) 
    }
    render() {
        return (
            <div style={{marginTop:"100px"}}>
                <div className="am-list-item am-input-item add-sort"> 
                    <span className="add-label">发布到分类:</span>
                    <select className="sort" ref="sort" onChange={this.infoChange}>
                        <option value="share">分享</option>
                        <option value="ask">问答</option>
                        <option value="job">招聘</option>
                    </select>
                    <i className="iconfont">&#xe6a6;</i>
                </div>
                <InputItem placeholder="标题,字数10字以上" onChange={this.infoChange} ref="title"></InputItem>
            </div>
        );
    }
}

Add.propTypes = {

};

export default Add;