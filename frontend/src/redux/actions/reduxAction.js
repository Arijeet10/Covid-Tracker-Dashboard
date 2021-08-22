import ActionTypes from "./actionTypes";

export const setUser=(user)=>{
    return {
        type:ActionTypes.SET_USER,
        payload:user
    };
};

export const setData=(data)=>{
    return {
        type:ActionTypes.SET_DATA,
        payload:data
    };
};

export const setLoading=(bool)=>{
    return{
        type:ActionTypes.SET_LOADING,
        payload:bool
    }
}

export const setStateData=data=>{
    return{
        type:ActionTypes.SET_STATE,
        payload:data
    }
}