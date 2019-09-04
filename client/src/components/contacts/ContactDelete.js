//importing react library
import React from 'react';

//importing react-redux functionality
import {connect} from 'react-redux';

//importing react-router-dom functionality
import {Link} from 'react-router-dom';

//importing actions
import {fetchContact, deleteContact} from '../../actions';

//importing modal
import Modal from '../modals/Modal';

//importing authentication
import GoogleAuth from '../../authentication/GoogleAuth';

class ContactDelete extends React.Component{
    componentDidMount(){
        this.props.fetchContact(this.props.match.params.id);
    }

    renderContent(){
        if(!this.props.isSignedIn){
            return(
                <div>
                    <div className="ui error message">
                        <div className="header">
                            <i className="exclamation circle red icon"/>
                            Must be logged in to delete contacts
                        </div>
                    </div>
                    <div className="ui compact menu">
                        <div className="item">
                            <GoogleAuth />
                        </div>
                        <div className="item">
                            <Link className="ui button negative" to="/contacts">Cancel</Link>
                        </div>
                    </div>
                </div>
            );
        }

        if(!this.props.contact){
            return(
                <div className="ui header">"Are you sure you want to delete contact..."</div>
                );
        }

        return(
            <div className="ui segment">
                <div className="ui header">{`Are you sure you want to delete contact ${this.props.contact.name}?`}</div>
                <div className="actions">{this.renderButtons()}</div>
            </div>
            );
    }

    renderButtons(){
        const {id} = this.props.match.params;

        return(
            <React.Fragment>
                <button className="ui button red" onClick={()=>this.props.deleteContact(id)}>Delete</button>
                <Link className="ui button primary" to="/contacts">Cancel</Link>
            </React.Fragment>
        );
    }

    render(){
        return(
            <Modal 
            title="Delete Stream"
            content={this.renderContent()}
            routeText='/contacts'/>
        );
    }
}

const mapStateToProps = (state, ownProps) =>{
    return({
        contact: state.contacts[ownProps.match.params.id],
        isSignedIn: state.auth.isSignedIn
    });
}

export default connect(mapStateToProps, {fetchContact , deleteContact})(ContactDelete);