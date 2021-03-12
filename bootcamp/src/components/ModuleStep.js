import React from 'react';
import '../styles/ModuleStep.scss';

const ModuleStep = (props) => {
    return (
        <body>
            <div className="desc-step">
                <div className="desc-step-num">
                    Step {props.StepNumber}
                </div>
                <div className="desc-step-detail" dangerouslySetInnerHTML={{ __html: props.String }} />
            </div>
        </body>
    )
}

export default ModuleStep