import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux'
import {ActivityIndicator} from 'antd-mobile'
import {fetch_article,changeCurrentArticleId,fetch_switchcencer,fetch_handleup,fetch_Addreplies} from '../action'
import Detail from '../components/Article/Detail/Detail'
import Reply from '../components/Article/Detail/Reply'
import Header from '../components/Common/Header/Header'
import Comment from '../components/Article/Comment/Comment'
import getFloor from '../utils/getFloor'
class Article extends Component {
    constructor(){
        super()
        this.state={
            replyId:"",
            loginname:""
        }
    }
    fetchhandleUp=(Id,i)=>{
        const {dispatch,accessToken} =this.props;      
         dispatch(fetch_handleup(Id,accessToken,i))
    }
    fetchSwitchcencer=(id,state)=>{
         const {dispatch,accessToken,loginname} =this.props; 
         dispatch(fetch_switchcencer(id,accessToken,state,loginname))
    }
    fetchComment=(content,replyId)=>{
        const {dispatch,accessToken,article}=this.props
        dispatch(fetch_Addreplies(accessToken,content,replyId,article.currentArticleId))
    }
    replytoggle=(id,loginname)=>{
        this.setState({
            replyId:id,
            loginname:loginname
        })
    }
    componentDidMount() {
        const { dispatch ,article} =this.props;
        let articleId = this.props.location.pathname;
        articleId=articleId.split("article/")[1];
        if(!article[articleId]){
              dispatch(fetch_article(articleId))
        }
        else{
            dispatch(changeCurrentArticleId(articleId))

        }

    }
    componentWillReceiveProps(nextProps) {

    }

    render() {
        const {details,isFetching,collect,article,loginname} =this.props;
        const de =details || [];
        let replysm=getFloor(de.replies);   
        return (             
            <div>       
              <Header search={false} ellipsis={false} title={"主题"}></Header>
              {
                  isFetching===false
                  ?
                   <div>
                        <Detail info={details}  isFetching={isFetching}   handleUp={this.fetchhandleUp}  loginname={loginname}  switchcencer={this.fetchSwitchcencer}  collect={collect}  currentId ={article.currentArticleId} />
                        <Reply replyinfo={replysm}  handleUp={this.fetchhandleUp} loginname={loginname}   swicthinfo={article.switchHandleup} replytoggle={this.replytoggle}   />
                        <Comment  setComment={this.fetchComment}  reply={this.state} />                   
                   </div>
                  :
                   <ActivityIndicator text="加载中..."  size="large" className="ActivityIndicator"  />
              }
             
            </div>                        
        );
    }
}

Article.propTypes = {

};

function mapStateToProps(state) {
    const {details,isFetching} = state.article[state.article.currentArticleId] || {
        details:[],
        isFetching:true
    }
    const {article,login,persontopic_collect,personinfo}=state
    const {accessToken} = login
    const {collect}=persontopic_collect
    const {loginname}=personinfo
    return {details,isFetching,article,accessToken,collect,loginname}
}

export default connect(mapStateToProps)(Article);