import fetch from 'isomorphic-fetch';

//Layout type
export const  REQUEST_TOPICS='REQUEST_TOPICS';
export const  RECEIVE_TOPICS='RECEIVE_TOPICS';
export const  SELECT_TAB='SELECT_TAB';

//Login type
export const LOGIN_SUCCESS='LOGIN_SUCCESS';
export const LOGIN_FAILED='LOGIN_FAILED';
export const LOGOUT='LOGOUT';

//personalInfo type
export const GET_PERSONINFO='GET_PERSONINFO';
export const GET_OTHER_PERSONINFO='GET_OTHER_PERSONINFO';
export const UNREAD_COUNT='UNREAD_COUNT';
export const GET_PEROSON_TOPIC_COLLECT='GET_PEROSON_TOPIC_COLLECT';
export const GET_MESSAGE='GET_MESSAGE';


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

export function select_tab(tab){
    return{
        type:SELECT_TAB,
        tab
    }
}


export function fetch_topics(tab,page=1,limit=20){
    return function(dispatch){
         dispatch(request_topics(tab))
         fetch(`/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}`)
         .then(res=>res.json())
         .then(json=>dispatch(receive_topics(tab,json.data,page,limit)));
    }
}


//App action create

export function fetch_accessToken(accessToken){
    return function(dispatch){
        fetch('/api/v1/accesstoken',{
            method:'POST',
            headers:{
                "Content-type":"application/x-www-form-urlencoded"
            },
            body:`accesstoken=${accessToken}`
        }).then(res=>res.json())
          .then(json=>{
              if(json.success){
                    dispatch(login_success(accessToken))
              }
              else{
                    dispatch(login_failed(json.error_msg))
              }
          })
    }
}

function login_success(accessToken){
    return {
        type:LOGIN_SUCCESS,       
        accessToken
    }  
}

function login_failed(issue){
    return{
        type:LOGIN_FAILED,
        issue
    }
}

export function logout(){
    return{
        type:LOGOUT
    }
}

export function fetch_unreadcount(accessToken){
    return function(dispatch){
        fetch(`api/v1/message/count?accesstoken=${accessToken}`)
            .then(res=>res.json())
            .then(json=>{
                dispatch(unread_count(json.data))
            })
    }
}

function  unread_count(count){
    return{
        type:UNREAD_COUNT,
        count
    }
}


export function fetch_personalinfo(loginName,Isother=false){
        return function(dispatch){
            fetch(`api/v1/user/${loginName}`)
                .then(res=>res.json())
                .then(json=>{
                    if(Isother===false){
                        dispatch(get_personinfo(json.data))
                    }
                    else{   
                        dispatch(get_other_personinfo(json.data))
                    }   
                })
        }
}

function get_personinfo(data){
    return{
        type:GET_PERSONINFO,
        data
    }
}

function get_other_personinfo(data){
    return{
        type:GET_OTHER_PERSONINFO,
        data
    }
}

export function fetch_person_topic_collect(loginName){
    return function(dispatch){
        fetch(`api/v1/topic_collect/${loginName}`)
            .then(res=>res.json())
            .then(json=>{
                dispatch(get_person_topic_collect(json.data))
            })
    }
}

function get_person_topic_collect(data){
    return{
        type:GET_PEROSON_TOPIC_COLLECT,
        data
    }
}

export function fetch_message(accessToken){
    return function(dispatch){
        fetch(`api/v1/messages?accesstoken=${accessToken}`)
            .then(res=>res.json())
            .then(json=>{
                dispatch(get_message(json.data))
            })
    }
}

function get_message(data){
    return{
        type:GET_MESSAGE,
        data
    }
}