import React, { Component, PropTypes } from 'react';
import Header from '../components/Common/Header/Header'
import Add from '../components/Article/Add/Add'
class ArticleAdd extends Component {
    render() {
        return (
            <div>
                <Header title={"发布"} submit={true}></Header>
                <Add />
            </div>
        );
    }
}

ArticleAdd.propTypes = {

};

export default ArticleAdd;