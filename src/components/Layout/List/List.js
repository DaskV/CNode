import React, { Component, PropTypes } from 'react';
import { List} from 'antd-mobile';
import './style.scss';
import getTime from '../../../utils/getTime';

const Item = List.Item;
const Brief = Item.Brief;  //设置了Click事件会有material水波纹点击效果

class ListArticle extends Component {
    render() {
        const topics= this.props.topics;
        return (
            <div>
                 <List  className="my-list">
                     {
                         topics.map((topic,index)=>
                         <Item
                            multipleLine
                            thumb={topic.author.avatar_url}
                            onClick={() => {}}
                            platform="android"
                         >
                            <div className="title">
                                {topic.top===true?<span className="up">顶</span>:""}
                                {topic.good===true?<span className="good">精</span>:""}
                                <span className="text">{topic.title}</span>
                            </div>
                            <Brief>
                                <span className="replycount">{topic.reply_count}<i className="iconfont">&#xe6cf;</i></span>
                                <span className="viewcount">{topic.visit_count}<i className="iconfont">&#xe6bd;</i></span>
                                <span className="time">{getTime(topic.last_reply_at)}</span>
                            </Brief>
                        </Item>
                     )}                    
                 </List>
            </div>
        );
    }
}

ListArticle.propTypes = {

};

export default ListArticle;