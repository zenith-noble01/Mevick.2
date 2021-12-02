const AdminAuthReducer  = (action, state) => {
    switch (action.type){
        case "LOGIN_START": 
        return {
            admin: null,
            isFetching: true,
            error: false,
        };
        case "LOGIN_SUCCESS": 
        return {
            admin: action.payload,
            isFetching: false,
            error: false,
        };
        case "LOGIN_FAILURE": 
        return {
            admin: null,
            isFetching: false,
            error: action.payload,
        };
        default: return state
    }
}

export default AdminAuthReducer;