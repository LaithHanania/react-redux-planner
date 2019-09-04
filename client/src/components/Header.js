//importing React library
import React from 'react';

//Importing linking functionality to other pages using react-router-dom
import {Link} from 'react-router-dom';

//importing local components
import GoogleAuth from '../authentication/GoogleAuth';

class Header extends React.Component{
    render(){
        return(
            <div className="ui secondary pointing menu">
                <Link className="header item" to="/">My Organizer</Link>
                <Link className="item" to="/contacts">Contacts</Link>
                <Link className="item" to="/career">Career</Link>
                <Link className="item" to="/shoppinglist">Shopping List</Link>
                <Link className="item" to="/myday">My Day</Link>
                <div className="right menu">
                    <GoogleAuth />
                </div>
            </div>
        );
    }
}

export default Header;