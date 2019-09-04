//Importing React library
import React from 'react';

//importign react-redux functionality
import {connect} from 'react-redux';

//importing action creators
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component{
    //initializing the google api authentication request when the component is rendered
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId: 'Google Auth Key',
                scope: 'email'
            }).then(()=>{
                //creates an instance of the authentication object
                this.auth= window.gapi.auth2.getAuthInstance();

                this.onAuthChange(this.auth.isSignedIn.get());

                //listens for changes in sign in state and calls onAuthChange when a change occurs
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    //Calls action creators to update state when authentication updates
    onAuthChange = (isSignedIn) =>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }

    //onClick functionality for signing in
    onSignInClick = () =>{
        this.auth.signIn();
    }

    //onClick functionality for signing out
    onSignOutClick = () =>{
        this.auth.signOut();
    }

    //Renders the appropriate sign in/sign out button
    renderAuthButton(){
        const currentAuth = this.props.isSignedIn;

        if(currentAuth === null){
            return(
                <button className="ui grey google button">
                    Loading...
                </button>
            );
        }else if(currentAuth){
            return(
                <button onClick={this.onSignOutClick} className="ui red google button" >
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        }else if(!currentAuth){
            return(
                <button onClick={this.onSignInClick} className="ui blue google button">
                    <i className="google icon" />
                    Sign In With Google
                </button>
            );
        }
    }

    render(){
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return({
        isSignedIn: state.auth.isSignedIn
    });
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);