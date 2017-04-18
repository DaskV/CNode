import {LOGIN_SUCCESS, LOGIN_FAILED} from '../action'

function login(state = {
    success: false
}, action) {
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                success:true,
                loginName:action.loginName,
                loginId:action.loginId,
                accessToken:action.accessToken
            }
        case LOGIN_FAILED:
            return{
                ...state,
                success:false,
                issue:action.issue
            }
        default:
            return state
    }
}

export default login