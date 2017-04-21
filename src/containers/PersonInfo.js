import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {fetch_personalinfo,fetch_person_topic_collect} from '../action'
import PersonInfoField from '../components/PersonInfo/PersonInfo'

class PersonInfo extends Component {
    componentWillMount(){
        const { dispatch } =this.props;
        let userName = this.props.location.pathname;
        userName=userName.split("personInfo/")[1];
        dispatch(fetch_personalinfo(userName,true))
        dispatch(fetch_person_topic_collect(userName))
    }


    render() {
        const{success,avatar_url,create_at,githubUsername,loginname,score,collect,recent_replies,recent_topics}=this.props;
        const {...allinfo}={success,avatar_url,create_at,githubUsername,loginname,score,collect,recent_replies,recent_topics};
        return (
            <div>
                <PersonInfoField allinfo={allinfo} />
            </div>
        );
    }
}

PersonInfo.propTypes = {

};

function mapStateToProps( state) {
    const {success} =state.login;
    const {avatar_url,create_at,githubUsername,loginname,score,recent_replies,recent_topics}=state.otherpersoninfo;
    const {collect}=state.persontopic_collect;
    return {success,avatar_url,create_at,githubUsername,loginname,score,collect,recent_replies,recent_topics}
}

export default connect(mapStateToProps)(PersonInfo);