import React from 'react';

class LandingSignedOut extends React.Component{
    render(){
        return(
            <div className="ui segment">
                <div className="ui huge header">The Most Personalized Planner Ever!</div>
                <div className="ui large header">Here's what we have to offer:</div>
                <div className="ui list">
                    <div className="item">
                        <i className="address book icon"/>
                        <div className="content" >
                            The ability to orgainze, priorotize and manage your contacts
                        </div>
                    </div>
                    <div className="item">
                        <i className="tasks icon"/>
                        <div className="content" >
                            The ability to actively create and update your to do list
                        </div>
                    </div>
                    <div className="item">
                        <i className="shopping cart icon"/>
                        <div className="content" >
                            The capability to create your own personalized shopping list with live results
                        </div>
                    </div>
                    <div className="item">
                        <i className="sitemap icon"/>
                        <div className="content" >
                            The option to organize your career goals and next steps
                        </div>
                    </div>
                    <div className="item">
                        <i className="calendar alternate outline icon"/>
                        <div className="content" >
                            The ability to organize your day from morning to night
                        </div>
                    </div>
                    <div className="item">
                        <i className="book icon"/>
                        <div className="content" >
                            The option to express your daily thoughts and worries
                        </div>
                    </div>
                </div>
                
                <div className="ui large header">Sign In With Google!</div>
            </div>
        );
    }
}

export default LandingSignedOut;