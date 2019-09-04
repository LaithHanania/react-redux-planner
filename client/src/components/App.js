//importing react library
import React from 'react';

//Importing react-router-dom libraries
import {Router, Route} from 'react-router-dom';

//importing history object
import history from '../history';

//importing header
import Header from './Header';

//importing pages
import Career from './pages/Career';
import Contacts from './pages/Contacts';
import MyDay from './pages/MyDay';
import ShoppingList from './pages/ShoppingList';
import Landing from './pages/Landing';

//importing contact components
import ContactCreate from './contacts/ContactCreate';
import ContactEdit from './contacts/ContactEdit';
import ContactDelete from './contacts/ContactDelete';

//importing career components
import ResumeCreate from './career/ResumeCreate';

class App extends React.Component{
    render(){
        return(
            <Router history={history}>
                <Header />
                <Route path="/" exact component={Landing}/> 

                <Route path="/career" component={Career}/>
                <Route path="/career/resume/new" component={ResumeCreate} />

                <Route path="/contacts" exact component={Contacts}/>
                <Route path="/contacts/new" component={ContactCreate}/>
                <Route path="/contacts/edit/:id" component={ContactEdit} />
                <Route path="/contacts/delete/:id" component={ContactDelete} />

                <Route path="/myday" component={MyDay}/>
                <Route path="/shoppinglist" component={ShoppingList}/>
            </Router>
        );
    }
}

export default App;