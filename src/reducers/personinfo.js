import  {GET_PERSONINFO} from '../action'

function personinfo(state={
    hasit:false
},action){
    switch(action.type){
        case GET_PERSONINFO:
            return{
                ...state,
                hasit:true,
                loginname:action.data.loginname,
                avatar_url:action.data.avatar_url,
                githubUsername:action.data.githubUsername,
                create_at:action.data.create_at,
                score:action.data.score,
                recent_topics:action.data.recent_topics
            }
        default:
            return state
    }
}

export default personinfo