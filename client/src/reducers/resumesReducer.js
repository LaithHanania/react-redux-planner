import {CREATE_RESUME} from '../actions/types';

export default (state={}, action)=>{
    switch(action.type){
        case CREATE_RESUME:
            return {...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
}