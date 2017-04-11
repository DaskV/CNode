import fetch from 'isomorphic-fetch';

//Layout type
export const  REQUEST_TOPICS='REQUEST_TOPICS';
export const  RECEIVE_TOPICS='RECEIVE_TOPICS';
export const  SELECT_TAB='SELECT_TAB';


// Layout action creater

function request_topics(tab){
    return{
        type:REQUEST_TOPICS,
        tab
    }
}

function receive_topics(tab,topics,page,limit){
    return{
        type:RECEIVE_TOPICS,
        tab,
        topics,
        page,
        limit
    }
}

function select_tab(tab){
    return{
        type:SELECT_TAB,
        tab
    }
}


function fetch_topics(tab,page=1,limit=20){
    return function(dispatch){
         dispatch(request_topics(tab))
         fetch(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}`)
         .then(res=>res.json)
         .then(json=>dispatch(receive_topics(tab,json.data,page,limit)));
    }
}
