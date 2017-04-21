import  {GET_PERSONINFO,GET_OTHER_PERSONINFO,GET_PEROSON_TOPIC_COLLECT} from '../action'


/*
 这里3个函数可以合并的，写的时候有点蠢没想到那么多，不过能用。
 react 的核心数据逻辑应该就是在reducer这块
 */

export function personinfo(state={
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
                score:action.data.score
            }
        default:
            return state
    }
}

export function otherpersoninfo(state={
    hasit:false,
    recent_topics:[],
    recent_replies:[]
},action){
    switch(action.type){
           case GET_OTHER_PERSONINFO:
            return{
                ...state,
                hasit:true,
                loginname:action.data.loginname,
                avatar_url:action.data.avatar_url,
                githubUsername:action.data.githubUsername,
                create_at:action.data.create_at,
                score:action.data.score,
                recent_topics:action.data.recent_topics,
                recent_replies:action.data.recent_replies
            }
            default:
            return state
    }
}

export function persontopic_collect(state={
    hasit:false,
    collect:[]
},action){
    switch(action.type){
        case GET_PEROSON_TOPIC_COLLECT:
            return{
                ...state,
                hasit:true,
                collect:action.data
            }
        default:
            return state
    }
}