import React, { Component, PropTypes } from 'react'
import {Toast} from 'antd-mobile'
import MyEditors from '../../Common/Editors/Editors'
import './style.scss'
class Comment extends Component {
    constructor(props){
        super(props)
        this.state={
            content:"",
            modal:"none",
            replyId:"",
            replyname:""
        }
    }
    setContent=(info)=>{
        this.setState({content:info})
    }
    submit=()=>{
        if(this.state.content!==""){
              this.props.setComment(this.state.content)
        }    
        else{
            Toast.info("请输入评论内容...",2)
        }
    }
    render() {
        const reply = this.props.reply;
        return (
           <div>
                <div className="reply-artilce" onClick={(e)=>{this.setState({modal:"block"})}} ><i className="iconfont">&#xe626;</i></div> 
                <div className="comment-modal" onClick={(e)=>{this.setState({modal:"none"})}} style={{display:this.state.modal}}>
                        <div className="comment">
                            <div className="comment-submit" onClick={this.submit}><i className="iconfont">&#xe6ad;</i></div>
                            <MyEditors  getContent={this.setContent}  foruser={reply.loginname} />
                        </div>
                </div>
           </div>
        );
    }
}


export default Comment;