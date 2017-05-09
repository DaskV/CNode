import React, { Component, PropTypes } from 'react';
import {WingBlank,List,ActivityIndicator,Badge} from 'antd-mobile'
import Header from '../../Common/Header/Header'
import getTime from '../../../utils/getTime'
import './style.scss'

const Item = List.Item;
const Brief= Item.Brief;
class Detail extends Component {
    render() {
        const info = this.props.info;
        const isFetching =this.props.isFetching;
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
                                        {info.good===true?<Badge text="加精" className="badges" style={{backgroundColor:"#fff",borderRadius: 5,border:"1px solid #108ee9",color:"#108ee9",marginRight: "0 0.25rem"}}/>:""}
                                        <span className="authorname">{info.author.loginname}</span>
                                    </div>
                                    <Brief>{getTime(info.create_at)}创建·{info.visit_count}次浏览</Brief>                                
                                    </Item>                         
                                </List>
                            </header>
                            <div  dangerouslySetInnerHTML={{__html:info.content}} style={{paddingBottom:"1rem"}}></div>
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