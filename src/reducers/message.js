import {UNREAD_COUNT,GET_MESSAGE} from '../action'

export function messagecount(state={
    count:0,
    show:false
},action){
    switch(action.type){
        case UNREAD_COUNT:
            return{
                ...state,
                count:action.count,
                show:action.count>0?true:false
            }
        default:
            return state
    }
}

export function message(state={
    has_read_messages:[],
    hasnot_read_messages:[],
    show:false
},action){
    switch(action.type){
        case GET_MESSAGE:
            return{
                ...state,
                has_read_messages:action.data.has_read_messages,
                hasnot_read_messages:action.data.hasnot_read_messages,
                show:action.data.hasnot_read_messages.length>0?true:false
            }
        default:
            return state
    }
}

