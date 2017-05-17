import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetch_accessToken} from '../action'
import LoginField from '../components/Login/Login'
import loginBg from '../utils/loginBg'
import Footer from '../components/Common/Footer/Footer'
class Login extends Component {

    state={
        isremember:false
    }

    handleSubmit = (accesstoken,isrem) => {
        const {dispatch,loginname} = this.props;

        this.setState({isremember:isrem})

        dispatch(fetch_accessToken(accesstoken))

    }

    componentWillReceiveProps(nextProps) {
        const {accessToken,success, issue,loginname}=nextProps;      
        if(success===false){          
             alert(issue);
        }
        else{        
            if(this.state.isremember===true){        
                let token = {accessToken,loginname}
                window.localStorage.setItem('token',JSON.stringify(token));
            }
          this.props.history.push('/');  //跳转'/'页面


        }
    }
    componentDidMount() {
       loginBg(this.refs.loginBg) 
    }
    render() {
        return (
            <div>
                <canvas ref='loginBg' style={{position:'fixed'}}></canvas>
                <LoginField submitClick={this.handleSubmit} />
                <Footer/>
            </div>
        );
    }
}



function mapStateToProps(state) {
    const {accessToken, success, issue} = state.login
    const {loginname}=state.personinfo
    return {accessToken, success, issue,loginname}
}

export default connect(mapStateToProps)(Login);