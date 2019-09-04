import React from 'react';

import {Link} from 'react-router-dom';

class Resume extends React.Component{
    render(){
        return(
            <div>
                <div className="ui header">
                    My Resumes
                </div>
                <Link className="ui button primary" to='/career/resume/new'>Create New Resume</Link>
            </div>
        );
    }
}

export default Resume;