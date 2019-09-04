//importing react library
import React from 'react';

//importing react-redux connect functionality to wire up store
import {connect} from 'react-redux';

//importing react router dom functionality
import {Link} from 'react-router-dom';

//importing local components
import ContactsList from '../contacts/ContactsList';

class Contacts extends React.Component{
    render(){
        return(
            <div>
                <h1>Contact List</h1>
                <h3>Manage your contacts</h3>
                    <Link className="ui button primary" to="/contacts/new" >Create New Contact</Link>
                    <ContactsList />
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return({
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId,
        contacts: state.contacts
    });
}

export default connect(mapStateToProps)(Contacts);