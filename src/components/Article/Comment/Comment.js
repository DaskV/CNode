import React, { Component, PropTypes } from 'react'
import {Toast} from 'antd-mobile'
import MyEditors from '../../Common/Editors/Editors'
import './style.scss'
class Comment extends Component {
    constructor(props){
        super(props)
        this.state={
            modal:"none",
            replyId:"",
            replyname:""
        }
        this.content="";
    }
    setContent=(info)=>{
        this.content=info;            
    }
    submit=()=>{
        if(this.content!==""){
              this.props.setComment(this.content)
        }    
        else{
            Toast.info("请输入评论内容...",2)
        }
    }
    modalhide=(e)=>{

        // e.nativeEvent.stopImmediatePropagation();    //阻止事件冒泡无效  只有通过判断来触发事件
        if(e.target.className==="comment-modal"){
             this.setState({modal:"none"})
        }
    }
    componentWillReceiveProps(nextProps) {   
     
        this.setState({
            modal:"block",
            replyId:nextProps.reply.replyId,
            replyname:nextProps.reply.loginname
        })
    }
    render() {
        return (
           <div>
                <div className="reply-artilce" onClick={(e)=>this.setState({modal:"block",replyId:"", replyname:""})} ><i className="iconfont">&#xe626;</i></div> 
                <div className="comment-modal" onClick={this.modalhide} style={{display:this.state.modal}}>
                        <div className="comment">
                            <div className="comment-submit" onClick={this.submit}><i className="iconfont">&#xe6ad;</i></div>
                            <MyEditors  getContent={this.setContent}  foruser={this.state.replyname} />
                        </div>
                </div>
           </div>
        );
    }
}


export default Comment;