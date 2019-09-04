//importing react library
import React from 'react';

//importing react-redux connect functionality
import {connect} from 'react-redux';

//importing landing pages
import LandingSignedOut from '../landings/LandingSignedOut';
import LandingSignedIn from '../landings/LandingSignedIn';
import LoadScreen from '../LoadScreen';

class Landing extends React.Component{
    //chooses appropriate landing depending on user sign in state
    chooseLanding = () =>{
        if(this.props.isSignedIn === null){
            return(<LoadScreen />);
        }else if(this.props.isSignedIn){
            return(<LandingSignedIn />);
        }else{
            return(<LandingSignedOut />);
        }
    }

    render(){
        return(
            <div>
                {this.chooseLanding()}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return({isSignedIn: state.auth.isSignedIn});
}

export default connect(mapStateToProps)(Landing);