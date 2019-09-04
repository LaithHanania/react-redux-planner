import React from 'react';

import {connect} from 'react-redux';

import ResumeForm from './ResumeForm';

import {createResume} from '../../actions/index';

class ResumeCreate extends React.Component{
    onSubmit=(formValues)=>{
        this.props.createResume(formValues);
    }

    render(){
        return(
            <div>
                <ResumeForm 
                onSubmit={this.onSubmit}
                title="Create New Resume"/>
            </div>
        );
    }
}

export default connect(null, {createResume})(ResumeCreate);