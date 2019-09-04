//importing react library
import React from 'react';
import ReactDOM from 'react-dom';

class LoadScreen extends React.Component{
    render(){
        //creating a portal to render the load screen onto with the loadscreen id
        return ReactDOM.createPortal(
            <div>
                <div className="ui active dimmer">
                    <div className="ui large text loader">Loading</div>
                </div>  
            </div>,
            document.querySelector('#loadscreen')
        );
    }
}

export default LoadScreen;