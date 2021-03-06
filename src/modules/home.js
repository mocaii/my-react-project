//actions:表示应用中的各类动作或操作
export const  CHANGE_FOOTER = 'home/CHANGE_FOOTER'
export const CONTENT_DATA = 'home/CONTENT_DATA'
export const CHANGE_NAV = 'home/CHANGE_NAV'



//reducers
//更新state
const initialState = {
    footer: 0,
    contentData:[],
    nav: 0
}

export default (state = initialState,action) =>{
    switch(action.type){
        case CHANGE_FOOTER:
            return{
                ...state,
                footer: action.data
            };
        case CONTENT_DATA:
            return{
                ...state,
                contentData: action.data
            };
        case CHANGE_NAV:
            return{
                ...state,
                nav: action.data
            };

        default:
            return state
    }
}

//mapDispatchToProps
//action创建函数,返回一个动作
//dispatch给store
export const changeFooter = (data) =>{
    return dispatch => {
        dispatch({
            type:CHANGE_FOOTER,
            data: data
        })
    }
}
export const getContentData = (data) =>{
    return dispatch => {
        dispatch({
            type:CONTENT_DATA,
            data: data
        })
    }
}
export const changeNav = (data) =>{
    return dispatch => {
        dispatch({
            type:CHANGE_NAV,
            data: data
        })
    }
}