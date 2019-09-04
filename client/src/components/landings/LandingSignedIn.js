import React from 'react';
import Contacts from '../pages/Contacts';
import Career from '../pages/Career'
class LandingSignedIn extends React.Component{
    render(){
        return(
            <div className="ui container">
                <div className="ui header huge" style={{textDecorationLine:'underline'}}>
                    Dashboard
                </div>
                <div className="ui horizontal divider">Contacts In A Glance</div>
                <div className="ui segment" style={{height: '25vh', overflowX: 'hidden', overflowY: 'scroll'}}>
                    <Contacts/>
                </div>
                <div className="ui horizontal divider">Career In A Glance</div>
                <div className="ui segment" style={{height: '25vh', overflowX: 'hidden', overflowY: 'scroll'}}>
                    <Career/>
                </div>
            </div>
        );
    }
}

export default LandingSignedIn;