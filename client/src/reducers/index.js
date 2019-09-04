import {combineReducers} from 'redux';

import authReducer from './authReducer';
import contactsReducer from './contactsReducer';
import resumesReducer from './resumesReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    auth: authReducer,
    contacts: contactsReducer,
    form: formReducer,
    resumes: resumesReducer
});