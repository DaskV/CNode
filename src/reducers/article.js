import  {REQUEST_ARTICLE,RECEIVE_ARTICLE,CHANGE_CURRENT_TOPICID} from'../action'


export function article(state= {
				currentArticleId: ''
}, action){
    let stateItem= state[action.articleId] || {}

    switch(action.type){
        case CHANGE_CURRENT_TOPICID:
             return {
                    ...state,
                    currentArticleId: action.articleId
		        }
        case REQUEST_ARTICLE:
            stateItem={
                ...stateItem,
                isFetching:true
            }
            return{
                ...state,
                [action.articleId]:stateItem,
                isComment:false
            }
        case RECEIVE_ARTICLE:
            stateItem={
                ...stateItem,
                isFetching:false,
                details:action.details
            }
            return {
                ...state,
                [action.articleId]:stateItem
            }
        default:
            return state
        
    }
}