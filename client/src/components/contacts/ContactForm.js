//importing React library
import React from 'react';

//import redux-form functionality
import {Field, reduxForm} from 'redux-form';

//import react-redux connect functionality
import {connect} from 'react-redux';

//importing react-router-dom functionality
import {Link} from 'react-router-dom';

//importing action creator to create a new contact
import {createContact} from '../../actions/index';

//importing modal to display contact content
import Modal from '../modals/Modal';

//importing authentication button
import GoogleAuth from '../../authentication/GoogleAuth';

class ContactForm extends React.Component{
    //Renders the input element with with its appropriate label
    renderInput = (formProps) =>{
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error':''}`

        return(
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} />
                {this.renderError(formProps.meta)}
            </div>
        );
    }

    //Calls action creator to create a contact
    onSubmit = (formValues) =>{
        this.props.onSubmit(formValues);
    }

    renderNotSignedIn(){
        return(
            <div>
                <div className="ui error message">
                    <div className="header">
                        <i className="exclamation circle red icon"/>
                        {this.props.errorMsg}
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

    renderForm(){
        return(
            <div className="ui container">
                {/*form element containing field pertaining to contact information*/}
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                    <Field name="name" label="Name:" component={this.renderInput} />
                    <Field name="number" label="Phone Number:" component={this.renderInput} />
                    <Field name="relation" label="Relation:" component={this.renderInput} />
                    <Field name="address" label="Address:" component={this.renderInput} />
                    <Field name="fax" label="Fax:" component={this.renderInput}/>
                    <Field name="email" label="Email:" component={this.renderInput} />
                    <Field name="nickname" label="Nickname:" component={this.renderInput}/>
                    <div className="actions">
                        <button className="ui button primary">{this.props.buttonText}</button>
                        <Link className="ui button red" to='/contacts'>Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }

    renderError(error, touched){
        if(error && touched){
            return(
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    render(){
        if(!this.props.isSignedIn){
            return(
                <Modal title={this.props.title} content={this.renderNotSignedIn()} routeText='/contacts'/>

            );
        }

        return(
            <Modal 
                title={this.props.title}
                content={this.renderForm()}
                routeText='/contacts'
            />
        );
    }
}

const validate = (formValues) =>{
    const errors={};

    if(!formValues.name){
        errors.name='You must enter a name';
    }

    if(!formValues.number){
        errors.number='You must enter a number'
    }

    return errors;
}

const mapStateToProps=(state)=>{
    return({isSignedIn: state.auth.isSignedIn});
}

const formWrapped = reduxForm({
    form: 'contactForm',
    validate: validate
})(ContactForm);

export default connect(mapStateToProps, {createContact})(formWrapped);