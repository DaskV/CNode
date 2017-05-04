import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {fetch_accessToken,fetch_message,fetch_personalinfo} from '../action'
class App extends Component {
 loginAction=(accessToken,loginName)=>{
        const {dispatch}= this.props;
        dispatch(fetch_accessToken(accessToken))     
        dispatch(fetch_message(accessToken))
        dispatch(fetch_personalinfo(loginName))
 }
    componentWillMount() {
       
        if(window.localStorage.getItem('token')){
            let Token = JSON.parse(window.localStorage.getItem('token'));
            const accessToken=Token.accessToken;
            const loginname=Token.loginname;
            this.loginAction(accessToken,loginname);
        }
        else{
               const  accessToken='e6bdc61e-e6ec-4f75-b8ee-1d4b34309285'; //'8e382e01-997d-4138-bf39-2c574de7f0e6'
               const  loginname='Mwangzhi';                               //DaskV
               const token={accessToken,loginname}         
               window.localStorage.setItem('token',JSON.stringify(token));
               this.loginAction(accessToken,loginname);
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
    const {login,message,personinfo} =state.login;
    return {login,message,personinfo};
}

export default connect(mapStateToProps)(App)