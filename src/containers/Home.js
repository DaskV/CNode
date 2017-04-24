import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {ActivityIndicator} from 'antd-mobile'
import {fetch_topics,select_tab,logout} from '../action'
import Header from '../components/Layout/Header/Header'
import ListArticle from '../components/Layout/List/List'
import getSize from '../utils/getSize'
import BacktoTop from '../components/Layout/BacktoTop'
import '../styles/index.css'
class Home extends Component {

    handleClick=(tab)=>{
        const {selectTab,dispatch}=this.props;
        dispatch(select_tab(tab))  //更新props[select_tab]      
    }
    handleLogout=()=>{
        const {dispatch}=this.props;
        dispatch(logout())
    }

    loadMore=()=>{
        const {selectTab,page,isFetching,dispatch} = this.props;
        let newpage =page;
        if(!isFetching){
            dispatch(fetch_topics(selectTab,++newpage));
        }
    }
    tabs = [
        {
            title: '全部',
            filter: 'all'
        }, {
            title: '精华',
            filter: 'good'
        }, {
            title: '分享',
            filter: 'share'
        }, {
            title: '问答',
            filter: 'ask'
        }, {
            title: '招聘',
            filter: 'job'
        }
    ]

     componentWillReceiveProps(newProps) {    //有props更新的化会触发该生命周期函数=是state的字段有变化
         const {topics,isFetching,selectTab,dispatch}=newProps;
         if(!isFetching && topics.length===0){
              dispatch(fetch_topics(selectTab));
         }
     }
    componentDidMount() {
        const {selectTab, dispatch,isFetching,topics} = this.props;

        //第一次加载数据
        if(!isFetching && topics.length===0){
            dispatch(fetch_topics(selectTab));
         }

        //滚动加载数据
        window.onscroll=()=>{
            let {windowH,contentH,scrollT}=getSize();
            if(windowH+scrollT+100>contentH){              
                this.loadMore();
            }
        }


    }
    componentWillUnmount(){
      window.onscroll=()=>{
          return
      }
    }
    render() {
        const {selectTab, isFetching, topics, page,hasnot_read_messages,show,avatar_url,create_at,githubUsername,loginname,score,success} = this.props;
        const {...personinfo}={avatar_url,create_at,githubUsername,loginname,score,success};
        
        return (
            <div>
                <Header filter={selectTab} tabs={this.tabs} unreadcount={hasnot_read_messages.length} isshow={show}  OnhandleTabClick={this.handleClick}  Logout={this.handleLogout} personinfo={personinfo} >
                    {this
                        .tabs
                        .map((tab, index) => tab.filter === selectTab &&< div key={index} className="fadeIn" > <ListArticle topics={topics}/>  </div>
                                                                              
                        )}

                </Header>
                <ActivityIndicator className="loading" text="加载中..."> </ActivityIndicator>
                <BacktoTop/>
            </div>
        );
    }
}

Home.propTypes = {
    topics:PropTypes.array.isRequired
};

function mapStateToProps(state) {
    const {selectTab, tabData} = state.home
    const {hasnot_read_messages,show}=state.message
    const {avatar_url,create_at,githubUsername,loginname,score}=state.personinfo;
    const {success} =state.login;
    const {isFetching, page, topics} = tabData[selectTab] || {    //从多层级的state里把数据拿出来,并且没有异步拿到数据时要初始化
        isFetching: false,
        page: 0,
        topics: []
    }
  
    return {selectTab, isFetching, page, topics,hasnot_read_messages,show,avatar_url,create_at,githubUsername,loginname,score,success};

}

export default connect(mapStateToProps)(Home);