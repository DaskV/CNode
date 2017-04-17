import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {ActivityIndicator} from 'antd-mobile'
import {fetch_topics,select_tab} from '../action'
import Header from '../components/Layout/Header/Header'
import ListArticle from '../components/Layout/List/List'
import getSize from '../utils/getSize'
class Home extends Component {
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick=(tab)=>{
        const {selectTab,dispatch}=this.props;
        dispatch(select_tab(tab))  //更新props      
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

     componentWillReceiveProps(newProps) {    //有props更新的化会触发该生命周期函数
         const {topics,isFetching,selectTab,dispatch}=newProps;
         if(!isFetching && topics.length===0){
             dispatch(fetch_topics(selectTab));
         }
     }
    componentDidMount() {
        const {selectTab, dispatch} = this.props;

        //第一次加载数据
        dispatch(fetch_topics(selectTab));

        //滚动加载数据
        window.onscroll=()=>{
            let {windowH,contentH,scrollT}=getSize();
            if(windowH+scrollT+100>contentH){              
                this.loadMore();
            }
        }

    }
    render() {
        const {selectTab, isFetching, topics, page} = this.props;
        return (
            <div>
                <Header filter={selectTab} tabs={this.tabs}  OnhandleTabClick={this.handleClick}>
                    {this
                        .tabs
                        .map((tab, index) => tab.filter === selectTab &&< div style = {{opacity:(!isFetching || page>=1) ? 1 : 0}} > <ListArticle topics={topics}/> </div>
                                                                              
                        )}

                </Header>
                <ActivityIndicator className="loading" text="加载中..."> </ActivityIndicator>
            </div>
        );
    }
}

Home.propTypes = {};

function mapStateToProps(state) {
    const {selectTab, tabData} = state
    const {isFetching, page, topics} = tabData[selectTab] || {    //从多层级的state里把数据拿出来,并且没有异步拿到数据时要初始化
        isFetching: false,
        page: 0,
        topics: []
    }
  
    return {selectTab, isFetching, page, topics};

}

export default connect(mapStateToProps)(Home);