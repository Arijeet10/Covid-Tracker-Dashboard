import ActionTypes from "../actions/actionTypes";

const inititalState={
    users:[],
    data:[],
    loading:false
}

export const reducer=(state=inititalState,{type,payload})=>{
    switch (type) {
        case ActionTypes.SET_USER:
            return{
                ...state,
                users:payload
            };     
        case ActionTypes.SET_DATA:
            return{
                ...state,
                data:payload
            }
        case ActionTypes.SET_LOADING:
            return{
                ...state,
                loading:payload
            }
        case ActionTypes.SET_STATE:
            return{
                users:payload.users,
                data:payload.data,
                loading:payload.loading
            }
        default:
            return{
                ...state
            };
    }
};