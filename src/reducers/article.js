import  {REQUEST_ARTICLE,RECEIVE_ARTICLE} from'../action'


function artilce(state,action){

    let stateItem= state[action.articleId] || {}

    switch(action.type){
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
        
    }
}