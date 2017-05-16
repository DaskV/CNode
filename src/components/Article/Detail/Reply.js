import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router'
import {WingBlank,List} from 'antd-mobile'
import getTime from '../../../utils/getTime'
import './style.scss'

const Item = List.Item;
const Brief= Item.Brief;

class Reply extends Component {

    constructor(){
        super()
        this.state={
            isZan:[],
            ZanNumber:[]
        }
    }

    handleUp(replyId,i){

        let newZan =this.state.isZan;
        let newZanNumber=this.state.ZanNumber;
        if(newZan[i]){ --newZanNumber[i]} else{ ++newZanNumber[i] }
        newZan[i]=!newZan[i]
        this.setState({
            isZan:newZan,
            ZanNumber:newZanNumber})
         this.props.handleUp(replyId,i)

    }
    zanState=(replies,loginname)=>{
        let isZan =replies.map(reply=>{
            return reply.ups.some(up=>up===loginname)
        })
        let ZanNumber=replies.map(reply=> reply.ups.length)      
        this.setState({isZan,ZanNumber})
    }
    componentDidMount() {
        const {replyinfo,loginname,swicthinfo} =this.props;
        this.zanState(replyinfo,loginname)
    }




    render() {
        const info = this.props.replyinfo
        return (
                <div className="reply">
                    <WingBlank>
                        <List className="my-list" renderHeader={() => '用户评论'}>   
                            {
                            info.map((item,index)=>
                                    <div key={index} style={{borderBottom:"1px solid #ddd"}}>
                                        <Item
                                            multipleLine
                                            thumb={item.author.avatar_url}
                                            key={item.id}
                                            style={{paddingLeft:0}}
                                        >
                                        <div className="right" style={{fontSize:"0.55rem"}}>
                                            <Link to={`/user/${item.author.loginname}`}><span className="authorname">{item.author.loginname}</span></Link>
                                            </div>
                                            <Brief style={{fontSize:"0.55rem"}}><span style={{color:"green"}}>{index+1}楼</span>·{getTime(item.create_at)}</Brief>        
                                            <div className="handle">
                                                <div className="up" onClick={()=>this.handleUp(item.id,index)} ><i className="iconfont" 
                                                        style={{ color:this.state.isZan[index] ? "red": "#717171" }} >&#xe717;</i><span>{this.state.ZanNumber[index]}</span>
                                                </div>
                                                <div className="rep" onClick={(e)=>this.props.replytoggle(item.id,item.author.loginname)} ><i className="iconfont">&#xe626;</i></div>     
                                            </div>                                                                   
                                        </Item>   
                                        <div style={{ display:item.floor===""?"none":"inline-block"}} >回复:{item.floor}楼</div>
                                        <div  dangerouslySetInnerHTML={{__html:item.content}}></div>
                                    </div>
                                    )
                            }                                  
                        </List>   
                     </WingBlank>                            
                </div>
        );
    }
}

Reply.propTypes = {

};

export default Reply;