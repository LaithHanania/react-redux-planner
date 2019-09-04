//importing constants for the action types
import {
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_CONTACT, 
    FETCH_CONTACTS, 
    FETCH_CONTACT, 
    DELETE_CONTACT, 
    EDIT_CONTACT,
    CREATE_RESUME
} from './types';

//importing the axios instances I created
import contacts from '../apis/contacts';
import resumes from '../apis/resumes';

//importing custom history object
import history from '../history';

//action creator for user to sign in using OAuth
export const signIn=(userId)=>{
    return({
        type: SIGN_IN,
        payload: userId
    });
}

//action creator for user to sign out using OAuth
export const signOut = () =>{
    return({
        type: SIGN_OUT
    });
}

//asynchronous action creator to create a new contact
export const createContact = (formValues) => async(dispatch, getState)=>{
    //deconstructing the userId out of the authentication object
    const {userId} = getState().auth;

    //making a post request to create a new contact object in the contacts database and
    //adding into it the forms values and the userId of the user creating the contact
    const response = await contacts.post('/contacts', {...formValues, userId});

    //console.log(response.data);

    //the response.data is all the form values plus the userId
    dispatch({type: CREATE_CONTACT, payload: response.data});

    //navigates the user to the contacts page after completion using history object
    history.push('/contacts');
}

//fetches all the contacts
export const fetchContacts = () => async (dispatch)=>{
    //making a get request with axios instance and assigning the response to a variable
    const response = await contacts.get('/contacts');

    dispatch({type: FETCH_CONTACTS, payload: response.data});
}

//fetches a single specified contact
export const fetchContact = (id) => async (dispatch)=>{
    //making a get request with axios instance and assigning the response to a variable
    const response = await contacts.get(`/contacts/${id}`);

    dispatch({type: FETCH_CONTACT, payload: response.data});
}

export const deleteContact = (id) => async (dispatch)=>{
    await contacts.delete(`/contacts/${id}`);

    dispatch({type: DELETE_CONTACT, payload: id});

    history.push('/contacts');
}

export const editContact = (id, formValues) => async dispatch=>{
    const response = await contacts.patch(`/contacts/${id}`, formValues);

    dispatch({type: EDIT_CONTACT, payload: response.data});

    history.push('/contacts');
}

export const createResume = (formValues) => async (dispatch, getState)=>{
    const {userId} = getState().auth;

    const response = await resumes.post('/resumes', {...formValues, userId});

    dispatch({type: CREATE_RESUME, payload: response.data});

    history.push('/career');
}