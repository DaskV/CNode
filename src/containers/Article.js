import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux'
import {ActivityIndicator} from 'antd-mobile'
import {fetch_article } from '../action'
import Detail from '../components/Article/Detail/Detail'
class Article extends Component {

    componentDidMount() {
        const { dispatch } =this.props;
        let articleId = this.props.location.pathname;
        articleId=articleId.split("article/")[1];
        dispatch(fetch_article(articleId))
    }
    componentWillReceiveProps(nextProps) {
        
    }

    render() {
        const {details,isFetching} =this.props;
        return (                    
              <Detail info={details}  isFetching={isFetching}/>                         
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
    return {details,isFetching}
}

export default connect(mapStateToProps)(Article);