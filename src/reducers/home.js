import {REQUEST_TOPICS, RECEIVE_TOPICS, SELECT_TAB} from '../action'
function select_tab(state, action) {
    switch (action.type) {
        case SELECT_TAB:
            return action.tab
        default:
            return state
    }
}

// 当组件第一次发出REQUEST_TOPICS后，需要对其返回的state进行初始化，否则没有topics等属性会报错
function tabItemData(state = {
    isFetching: false,
    page: 0,
    topics: []
}, action) {
    switch (action.type) {
        case REQUEST_TOPICS:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_TOPICS:
            if (state.page < action.page) {
                let topics = state.topics;
                action.topics = topics.concat(action.topics);
            }
            return {
                ...state,
                isFetching: false,
                page: action.page,
                topics: action.topics,
                limit: action.limit
            }
        default:
            return state

    }
}

function tabData(state = {}, action) {
    switch (action.type) {
        case RECEIVE_TOPICS:
        case REQUEST_TOPICS:
            return {
                ...state,
                [action.tab]: tabItemData(state[action.tab], action)
            }
        default:
            return state
    }
}

function home(state = {
    selectTab: 'all',
    tabData: {}
}, action) {
    if (state) {
        const newtab = select_tab(state.selectTab, action);
        const newData = tabData(state.tabData, action);
        return {
            ...state,
            selectTab: newtab,
            tabData: newData
        }
    }
    return state
}

export default home