import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'
import {WingBlank,List,ActivityIndicator,Badge} from 'antd-mobile'
import Header from '../../Common/Header/Header'
import getTime from '../../../utils/getTime'
import getFloor from '../../../utils/getFloor'
import './style.scss'

const Item = List.Item;
const Brief= Item.Brief;
class Detail extends Component {

    handleUp=(replyId)=>{
        this.props.handleUp(replyId)
    }

    render() {
        const info = this.props.info ||[];
        const isFetching =this.props.isFetching;
        let replysm=getFloor(info.replies);   
        return (
            <div>
                <Header search={false} ellipsis={false} title={"主题"}></Header>
               {
                   isFetching===false
                   ?
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
                                         <div className="concern"><i className="iconfont">&#xe739;</i></div>
                                     </div>
                                    <Brief>{getTime(info.create_at)}创建·{info.visit_count}次浏览</Brief>                                
                                    </Item>                         
                                </List>
                            </header>
                            <div  dangerouslySetInnerHTML={{__html:info.content}} style={{paddingBottom:"1rem"}}></div>
                            <div>
                                 <List className="my-list reply">   
                                     {
                                         replysm.map((item,index)=>
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
                                                        <div className="up" onClick={this.handleUp(item.id)} ><i className="iconfont" style={{ color:item.is_uped?"red":"#717171"}} >&#xe717;</i><span>{item.ups.length}</span></div>
                                                        <div className="rep"><i className="iconfont">&#xe626;</i></div>     
                                                    </div>                                                                   
                                                </Item>   
                                                <div style={{ display:item.floor===""?"none":"inline-block"}} >回复:{item.floor}楼</div>
                                                <div  dangerouslySetInnerHTML={{__html:item.content}}></div>
                                            </div>
                                         )
                                     }                                  
                                 </List>                               
                            </div>

                        </WingBlank>
                    </div>       
                   :
                    <ActivityIndicator text="加载中..."  size="large" className="ActivityIndicator"  />
               }
       
            </div>
        );
    }
}

Detail.propTypes = {

};

export default Detail;