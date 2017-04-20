import {LOGIN_SUCCESS, LOGIN_FAILED,LOGOUT} from '../action'

function login(state = {
    success: false
}, action) {
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                success:true,              
                accessToken:action.accessToken
            }
        case LOGIN_FAILED:
            return{
                ...state,
                success:false,
                issue:action.issue
            }
        case LOGOUT:
            return{
                success:false
            }
        default:
            return state
    }
}

export default login