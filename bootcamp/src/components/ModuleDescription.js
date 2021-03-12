import React from 'react';
import '../styles/ModuleDescription.scss';
import ModuleStep from './ModuleStep.js'
import CompleteButton from './CompleteButton.js'

const ModuleDescription = (props) => {
    const data = props.Activity;

    return (
        <body>
            <div className="desc">
                {/* <div>
                    <p>{JSON.stringify(props.Activity)}</p>
                </div> */}
                <h1>
                    {data.title}
                </h1>
                <div className="desc-details">
                    {data.details}
                </div>
                <div className="desc-steps">
                    {data.steps.map((step, index) => <ModuleStep String={step} StepNumber={index+1}/>)}
                </div>
                <CompleteButton/>
            </div>
        </body>
    )
}

export default ModuleDescription