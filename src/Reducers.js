import {combineReducers} from 'redux';

const initialState = {
    username: "dave"
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case "SET_USER":
            return {
                Object.assign({}, state , {username: action.user}) 
            }
        default:
            return state;
    }
}

export default reducer;



