import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'
import {fetch_topics} from '../action'
import Header from '../components/Layout/Header/Header'
import ListArticle from '../components/Layout/List/List'

class Home extends Component {

//    tabs = [
//         {
//             title: '全部',
//             filter: 'all'
//         }, {
//             title: '精华',
//             filter: 'good'
//         }, {
//             title: '分享',
//             filter: 'share'
//         }, {
//             title: '问答',
//             filter: 'ask'
//         }, {
//             title: '招聘',
//             filter: 'job'
//         }
//     ]

    componentWillReceiveProps(newProps) {

        
    }
    componentDidMount(){
         const {selectTab,dispatch} = this.props;

         dispatch(fetch_topics(selectTab));
    }
    render() {
        return (
            <div>
                <Header>
                </Header>
            </div>
        );
    }
}

Home.propTypes = {};

function mapStateToProps(state) {
    console.log(state)
    return state;

}

export default connect(mapStateToProps)(Home);