import React from 'react';

import Resume from '../career/Resume';

class Career extends React.Component{
    render(){
        return(
            <div>
                <div className="ui header huge">
                    My Career
                </div>
                    <Resume />
            </div>
        );
    }
}

export default Career;