//importing react libraries
import React from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux';

//importing history object
import history from '../../history';

class Modal extends React.Component{
    cancelCreation = () =>{
        const {routeText} = this.props;
        history.push(routeText);
    }

    render(){
        //creating a portal to render the contact form onto with the modal id
        return ReactDOM.createPortal(
                <div onClick={this.cancelCreation} className="ui dimmer modals visible active" >
                    <div onClick={(e)=>e.stopPropagation()} className="ui standard modal visible active">
                        <div className="header">{this.props.title}</div>
                        <div className="content">
                            {this.props.content}
                        </div>
                    </div>
                </div>,
            document.querySelector('#loadscreen')
        );
    }
}

const mapStateToProps=(state)=>{
    return({isSignedIn: state.auth.isSignedIn});
}

export default connect(mapStateToProps)(Modal);