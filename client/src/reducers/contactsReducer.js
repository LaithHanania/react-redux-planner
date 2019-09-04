import {CREATE_CONTACT, FETCH_CONTACTS, FETCH_CONTACT, DELETE_CONTACT, EDIT_CONTACT} from '../actions/types';
import _ from 'lodash';

const INITIAL_STATE = {
    name: null,
    number: null,
    relationship: null,
    address: null,
    fax: null,
    email: null
}

export default(state={INITIAL_STATE}, action)=>{
    switch(action.type){
        case CREATE_CONTACT:
            return {...state, [action.payload.id]: action.payload}
        case FETCH_CONTACTS:
            return {...state, ..._.mapKeys(action.payload, "id")}
        case FETCH_CONTACT:
            return {...state, [action.payload.id]: action.payload}
        case DELETE_CONTACT:
            return _.omit(state, action.payload)
        case EDIT_CONTACT:
            return {...state, [action.payload.id]: action.payload}
        default:
            return state
    }
}