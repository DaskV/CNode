import React, { Component, PropTypes } from 'react';
import { List,ActivityIndicator } from 'antd-mobile';
import './style.scss';
const Item = List.Item;
const Brief = Item.Brief;  //设置了Click事件会有material水波纹点击效果
class ListArticle extends Component {
    render() {
        return (
            <div>
                 <List  className="my-list">
                     <Item
                        multipleLine
                        thumb="https://avatars.githubusercontent.com/u/227713?v=3&s=120"
                        onClick={() => {}}
                        platform="android"
                        >
                        <div className="title">
                            <span className="up">顶</span>
                            <span className="good">精</span>
                            <span className="text">开源项目介绍 - 聊天机器人对话引擎之SuperScript</span>
                        </div>
                        <Brief>
                            <span className="replycount">86<i className="iconfont">&#xe6cf;</i></span>
                            <span className="viewcount">1325<i className="iconfont">&#xe6bd;</i></span>
                            <span className="time">20天前</span>
                        </Brief>
                    </Item>
                 </List>
                 <div className="loading">
                    <ActivityIndicator text="加载中..."/>
                </div>
            </div>
        );
    }
}

List.propTypes = {

};

export default ListArticle;