import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'
import {WingBlank,List,ActivityIndicator,Badge,Toast} from 'antd-mobile'
import Header from '../../Common/Header/Header'
import getTime from '../../../utils/getTime'
import './style.scss'

const Item = List.Item;
const Brief= Item.Brief;
class Detail extends Component {
    constructor(){
        super()
        this.state={
            isCencered:false
        }
    }
    isCencer(id){
        this.props.switchcencer(id,this.state.isCencered);
        this.setState({isCencered:!this.state.isCencered})     
        if(!this.state.isCencered){
            Toast.info("关注成功",1)
        }
        else{
            Toast.info("取消关注",1)
        }
    }
    updateCollect(props){          //  从collect 树来判断 文章是否已搜藏
        const {collect,info} =props;
        console.warn(info.id)
        let collected = collect.some(topic=>{
           return  topic.id ===info.id
        })
        this.setState({
            isCencered:collected
        })
    }
    componentWillReceiveProps(nextProps) {
       if(nextProps.info){        //排除fetch时没有info的影响
            this.updateCollect(nextProps)
       } 
    }
    render() {
        const info = this.props.info ||[];
        return (
            <div>
               {
                   <div className="topic">
                        <WingBlank>
                            <header>
                                <p className="title">{info.title}</p>
                                <List className="my-list">                                                                
                                    <Item
                                        multipleLine
                                        thumb={info.author.avatar_url}
                                        key={info.id}
                                        style={{paddingLeft:0}}
                                    >
                                    <div className="right">
                                        {info.top===true?<Badge text="置顶" className="badges" style={{backgroundColor:"#fff",borderRadius: 5, border:"1px solid red",color:"red" ,marginRight: "0.25rem" }}/>:""}
                                        {info.good===true?<Badge text="加精" className="badges" style={{backgroundColor:"#fff",borderRadius: 5,border:"1px solid #108ee9",color:"#108ee9",marginRight: "0.25rem"}}/>:""}
                                        <Link to={`/user/${info.author.loginname}`}><span className="authorname">{info.author.loginname}</span></Link>
                                    </div>
                                     <div className="handle">
                                         <div className="concern" onClick={()=>this.isCencer(info.id)} ><i className="iconfont" style={{color: this.state.isCencered?"red":"#717171"}} >&#xe739;</i></div>
                                     </div>
                                    <Brief>{getTime(info.create_at)}创建·{info.visit_count}次浏览</Brief>                                
                                    </Item>                         
                                </List>
                            </header>
                            <div  dangerouslySetInnerHTML={{__html:info.content}} style={{paddingBottom:"1rem"}}></div>                           
                      </WingBlank>
                    </div>       
               }    
            </div>
        );
    }
}

Detail.propTypes = {

};

export default Detail;