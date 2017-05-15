import React, { Component, PropTypes } from 'react';
import {WingBlank, InputItem,Button,Toast} from 'antd-mobile'
import {MDEditor} from "draft-md"
import Editors from '../../Common/Editors/Editors'
import './style.scss'


class Add extends Component {
    render() {
        return (
            <div style={{marginTop:"100px"}}>
                <div className="am-list-item am-input-item add-sort"> 
                    <span className="add-label">发布到分类:</span>
                    <select className="sort">
                        <option value="share">分享</option>
                        <option value="ask">问答</option>
                        <option value="job">招聘</option>
                    </select>
                    <i className="iconfont">&#xe6a6;</i>
                </div>
                <InputItem placeholder="标题,字数10字以上"></InputItem>
                <Editors/>
            </div>
        );
    }
}

Add.propTypes = {

};

export default Add;