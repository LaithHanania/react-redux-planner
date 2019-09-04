//importing react library
import React from 'react';

//importing react-redux connect functionality to wire up store
import {connect} from 'react-redux';

//importing react router dom linking
import {Link} from 'react-router-dom';

//importing action creator to fetch contacts
import {fetchContacts} from '../../actions/index';

class ContactList extends React.Component{
    componentDidMount(){
        //fetch the contacts
        this.fetchContacts();
    }

    //provide loading screen while contacts are fetched
    loadListRender(){
        return(
            <div>
                Loading Contacts...
            </div>
        );
    }

    //display error message
    notSignedIn(){
        return(
            <div>
                You must sign in to see your contacts
            </div>
        );
    }

    //Calls the action creator to get fetch the users contact list
    fetchContacts(){
        this.props.fetchContacts();
    }

    //renders the list of contacts
    renderContacts(){
        return this.props.contacts.map(contact=>{
            if(contact.userId === this.props.userId){
                return(
                    <div className="ui segment" key={contact.id}>
                        <table className="ui definition table" key={contact.id}>
                            <tbody>
                                <tr>
                                    <td className="two wide column"> Name </td>
                                    <td>{contact.name}</td>
                                </tr>
                                <tr>
                                    <td className="two wide column"> Phone Number </td>
                                    <td>{contact.number}</td>
                                </tr>
                                <tr>
                                    <td className="two wide column"> Relation </td>
                                    <td>{contact.relation}</td>
                                </tr>
                                <tr>
                                    <td className="two wide column"> Address </td>
                                    <td>{contact.address}</td>
                                </tr>
                                <tr>
                                    <td className="two wide column"> Fax </td>
                                    <td>{contact.fax}</td>
                                </tr>
                                <tr>
                                    <td className="two wide column"> Email </td>
                                    <td>{contact.email}</td>
                                </tr>
                                <tr>
                                    <td className="two wide column"> Nickname </td>
                                    <td>{contact.nickname}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="actions"> 
                            <Link className="ui button primary" to={`/contacts/edit/${contact.id}`}>Edit</Link>
                            <Link className="ui button red" to={`/contacts/delete/${contact.id}`}>Delete</Link>
                        </div>
                    </div>
                );
            }
        });
    }

    showContacts(){
        return(
            <div>
                {this.renderContacts()}
            </div>
        );
    }

    renderList(){
        if(this.props.isSignedIn===null){
            return(<div>{this.loadListRender()}</div>);
        }else if(!this.props.isSignedIn){
            return(<div>{this.notSignedIn()}</div>);
        }else{
            return(<div>{this.showContacts()}</div>)
        }
    }

    render(){
        return(
            <div>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return({
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId,
        contacts: Object.values(state.contacts)
    });
}

export default connect(mapStateToProps, {fetchContacts})(ContactList);