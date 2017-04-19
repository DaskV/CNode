import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {fetch_accessToken,fetch_unreadcount,fetch_personalinfo} from '../action'
class App extends Component {
 loginAction=(accessToken,loginName)=>{
        const {dispatch}= this.props;
        dispatch(fetch_accessToken(accessToken,loginName))     
        dispatch(fetch_unreadcount(accessToken))
        dispatch(fetch_personalinfo(loginName))
 }
    componentWillMount() {
       
        if(window.localStorage.getItem('Token')){
            let Token = window.localStorage.getItem('Token');
            Token=JSON.parse(Token);
            const accessToken=Token.accessToken;
            const loginName=Token.loginName;
            this.loginAction(accessToken,loginName);
        }
        else{
            const accessToken = 'e6bdc61e-e6ec-4f75-b8ee-1d4b34309285'
            const loginName = 'Mwangzhi'
            this.loginAction(accessToken,loginName);
        }

    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {

};

function mapStateToProps(state){
    const login =state.login;
    const message=state.message;
    const personinfo= state.personinfo;
    return {login,message,personinfo};
}

export default connect(mapStateToProps)(App)