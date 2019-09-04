//importing react libraries
import React from 'react';

//import react-redux connect functionality
import {connect} from 'react-redux';

//importing createStream action creator
import {createContact} from '../../actions';

//importing local component
import ContactForm from './ContactForm';

class ContactCreate extends React.Component{
    onSubmit = (formValues)=>{
        this.props.createContact(formValues);
    }
    
    render(){
        return(
            <ContactForm 
            onSubmit={this.onSubmit}
            errorMsg="Must be signed in to create a contact"
            buttonText="Create Contact"
            title="Create New Contact"
            />
        );
    }
}

export default connect(null, {createContact})(ContactCreate);