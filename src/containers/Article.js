import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux'
import {ActivityIndicator} from 'antd-mobile'
import {fetch_article,changeCurrentArticleId} from '../action'
import Detail from '../components/Article/Detail/Detail'
class Article extends Component {
    fetchhandleUp=(Id)=>{
        const {dispatch} =this.props;
        
    }
    componentDidMount() {
        const { dispatch } =this.props;
        let articleId = this.props.location.pathname;
        articleId=articleId.split("article/")[1];
        let currentArticleId = this.props.currentArticleId;
     
        if(articleId!==currentArticleId){
              dispatch(fetch_article(articleId))
        }
        else{
            dispatch(changeCurrentArticleId(articleId))
        }
    }
    componentWillReceiveProps(nextProps) {
        
    }

    render() {
        const {details,isFetching} =this.props;
        return (                    
              <Detail info={details}  isFetching={isFetching}   handleUp={this.fetchhandleUp} />                         
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

    const {currentArticleId}=state.article
    return {details,isFetching,currentArticleId}
}

export default connect(mapStateToProps)(Article);