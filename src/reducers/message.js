import {UNREAD_COUNT} from '../action'

function messagecount(state={
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

export default messagecount