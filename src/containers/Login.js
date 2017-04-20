import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetch_accessToken} from '../action'
import LoginField from '../components/Login/Login';

class Login extends Component {

    state={
        isremember:false
    }

    handleSubmit = (accesstoken,isrem) => {
        const {dispatch} = this.props;

        this.setState({isremember:isrem})

        dispatch(fetch_accessToken(accesstoken))

    }

    componentWillReceiveProps(nextProps) {
        const {accessToken,success, issue}=nextProps;      
        if(success===false){          
             alert(issue);
        }
        else{        
            if(this.state.isremember===true){        
                let userInfo = {accessToken,success}
                window.localStorage.setItem('userInfo',JSON.stringify(userInfo));
            }
          this.props.history.push('/');  //跳转'/'页面

        }
    }
    render() {
        return (
            <div>
                <LoginField submitClick={this.handleSubmit} />
            </div>
        );
    }
}



function mapStateToProps(state) {
    const {accessToken, success, issue} = state.login
    return {accessToken, success, issue}
}

export default connect(mapStateToProps)(Login);