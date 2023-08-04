import { SELECT_SONG } from "../actions/actionType";

// const INITIAL_STATE = {}

export const songsReducer = (state = null, action)=>{
    if(action.type === SELECT_SONG){
        return action.payload
    }
    return state;
}

// export default songsReducer;