import React from 'react';

import {connect} from 'react-redux';

import {reduxForm, Field, FieldArray, Fields} from 'redux-form';

import {Link} from 'react-router-dom';

import Modal from '../modals/Modal';

class ResumeForm extends React.Component{
    renderInput=(formProps)=>{
        return(
            <div className="ui form">
                <label>{formProps.label}</label>
                <div>
                    <input {...formProps.input}/>
                </div>
            </div>
        );
    }

    onSubmit = formValues =>{
        this.props.onSubmit(formValues);
    }

    renderForms(){
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="firstname" component={this.renderInput} label="First Name:"/>
                <Field name="middlename" component={this.renderInput} label="Middle Name:"/>
                <Field name="lastname" component={this.renderInput} label="Last Name:"/>
                <Field name="number" component={this.renderInput} label="Phone Number:"/>
                <Field name="email" component={this.renderInput} label="Email:"/>
                <Field name="address" component={this.renderInput} label="Current Address:"/>
                <Field name="position" component={this.renderInput} label="Position"/>
                <Field name="highschool" component={this.renderInput} label="Highschool:"/>
                <Field name="college" component={this.renderInput} label="College / University:"/>
                <Field name="website" component={this.renderInput} label="Website:"/>
                <div>{this.renderSkills()}</div>
                <div>{this.renderWorkExperience()}</div>
                <div className="ui segment compact">
                    <button className="ui button primary">{this.props.title}</button>
                    <Link className = "ui button negative" to="/career">Cancel</Link>
                </div>
            </form>
        );
    }

    render(){
        return(
            <div>
                <Modal 
                title={this.props.title}
                content={this.renderForms()}
                routeText="/career"
                />
            </div>
        );
    }

    skills = ({ fields }) => (
        <div className="custom-field-array-container">
          {fields.map((code, index) => (
            <div key={index} className="field-array-item">
              <Field
                name={code}
                type="text"
                component={this.renderInput}
                label={`Skill #${index + 1}`}
                autoFocus
              />
              <button type="button" onClick={() => fields.remove(index)}>
              <i className="trash red icon" />
              </button>
            </div>
          ))}
          <button type="button" className="ui positive button" onClick={() => fields.push()}>
            Add Skill
          </button>
        </div>
      );

      workExperience = ({ fields }) => {
          return(
        <div className="custom-field-array-container">
          {fields.map((code, index) => (
            <div key={index} className="field-array-item">
              <Field
                name= {code}
                type="text"
                component={this.renderInput}
                label={`Work Experience #${index + 1}`}
                autoFocus
              />
              <button type="button" onClick={() => fields.remove(index)}>
                <i className="trash red icon" />
              </button>
            </div>
          ))}
          <button type="button" className="ui positive button" onClick={() => fields.push()}>
            Add Work Experience
          </button>
        </div>
      );}

      renderSkills(){
        return(
        <div className="ui segment" style={{height: '10vh', overflowX: 'hidden', overflowY:'scroll'}}>
            <h4>Add your most distinguishing skills:</h4>
            <FieldArray name="skills" component={this.skills}/>
        </div>
        );
      }

      renderWorkExperience(){
        return(
            <div className="ui segment" style={{height: '10vh', overflowX: 'hidden', overflowY:'scroll'}}>
                <h4>Add your work experience:</h4>
                <FieldArray name='workexperience' component={this.workExperience}/>
            </div>
            );
      }
}

const formWrapped = reduxForm({form: 'resumeForm'})(ResumeForm);

export default connect()(formWrapped);