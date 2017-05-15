import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { List} from 'antd-mobile'
import './style.scss'
import getTime from '../../../utils/getTime'

const Item = List.Item;
const Brief = Item.Brief;  //副标题

class ListArticle extends Component {

    render() {
        const topics= this.props.topics;
        return (
            <div>
                 <List  className="my-list"  >
                     {
                         topics.map((topic,index)=>
                         <Link to={`/article/${topic.id}`} key={topic.id}>
                            <Item
                                multipleLine
                                thumb={topic.author.avatar_url}
                                onClick={()=>{}}
                                key={index}
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
                        </Link>
                     )}                    
                 </List>
            </div>
        );
    }
}

ListArticle.propTypes = {
    topics:PropTypes.array.isRequired
};

export default ListArticle;