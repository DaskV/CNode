import React, { Component, PropTypes } from 'react';
import {List} from 'antd-mobile'
import getTime from '../../utils/getTime';
import './style.scss'
const Item = List.Item;
const Brief = Item.Brief; 

class MessageContent extends Component {
    handlClick(id){
        if(this.props.messageType==="no"){
            this.props.itemClick(id);
        }
        
    }
    render() {
        const info=this.props.messageinfo;
        const nomessage=(
            <div style={{textAlign:"center",padding:"1rem 0"}}>暂无消息</div>
        )
        const hasInfo= info.map((item,index)=>{            
          return (
            <Item
                multipleLine
                thumb={item.author.avatar_url}
                onClick={() => {this.handlClick(item.id)}}
                platform="android"
                key={index}
                >
                <div className="small name">{item.author.loginname} <span className="time">{getTime(item.reply.create_at)}</span></div>
                <div className="small content" dangerouslySetInnerHTML={{__html:item.reply.content}}></div>
                <div className="small"><span className="from">主题:{item.topic.title}</span></div>
            </Item>         
          )
        })
        return (
            <List className="my-list">
                {
                  info.length>0 ? hasInfo : nomessage
                }
            </List>
        );
    }
}

MessageContent.propTypes = {

};

export default MessageContent;