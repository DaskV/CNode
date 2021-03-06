import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux'
import {Tabs} from 'antd-mobile'
import Header from '../components/Common/Header/Header'
import MessageContent from '../components/Message/Content'
import {select_message,fetch_mark_message} from '../action'
import getSize from '../utils/getSize'
const TabPane =Tabs.TabPane;


class Message extends Component {

    handleClick=(msgId)=>{
        const {dispatch,accessToken}=this.props;
        dispatch(fetch_mark_message(msgId,accessToken))
    }    

    callback=(key)=>{
        const {dispatch} =this.props;
        dispatch(select_message(key))
    }

    render() {
        const {has_read_messages,hasnot_read_messages,dispatch,selected}=this.props;
        const {windowH} =getSize();
        const tanpaneHeight=windowH-100-87;
        return (
            <div>
                <Header ellipsis={false} search={false} title={"消息中心"}/>
                <Tabs defaultActiveKey={selected} onChange={this.callback} style={{paddingTop:"2rem"}} swipeable={false}>
                    <TabPane  tab={"未读消息"} key="0" style={{height:tanpaneHeight}}>
                        <MessageContent messageinfo={hasnot_read_messages}  itemClick={this.handleClick} messageType={"no"}/>
                    </TabPane>
                    <TabPane  tab={"已读消息"} key="1" style={{height:tanpaneHeight}}>
                        <MessageContent messageinfo={has_read_messages}  messageType={"yes"} />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}



Message.propTypes = {

};

function mapStateToProps(state) {
    const {has_read_messages,hasnot_read_messages,selected} =state.message;  
    const {accessToken}=state.login;
    return {has_read_messages,hasnot_read_messages,selected,accessToken}
}

export default connect(mapStateToProps)(Message);