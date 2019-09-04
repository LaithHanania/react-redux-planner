//importing react library
import React from 'react';

//importing react redux functionality
import {connect} from 'react-redux';

//importing action creators
import {fetchContact, editContact} from '../../actions';

//importing local component
import ContactForm from './ContactForm';

//importing lodash library
import _ from 'lodash';

class ContactEdit extends React.Component{
    componentDidMount(){
        this.props.fetchContact(this.props.match.params.id);
    }

    onSubmit=(formValues)=>{
        this.props.editContact(this.props.match.params.id, formValues);
    }

    render(){
        if(!this.props.contact){
            return(
                <div>
                    Loading...
                </div>
            );
        }

        return(
            <ContactForm 
            onSubmit={this.onSubmit}
            errorMsg="Must be signed in to edit a contact"
            buttonText="Confirm Changes"
            title="Edit Existing Contact"
            initialValues={_.pick(this.props.contact, 'name', 'number', 'relation', 'address', 'fax','email','nickname')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) =>{
    return({contact: state.contacts[ownProps.match.params.id]});
}

export default connect(mapStateToProps, {fetchContact, editContact})(ContactEdit);