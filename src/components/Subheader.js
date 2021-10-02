import React from 'react';

function Subheader(props)  {
    return (
        <div className="Subheader">
            <h1>{props.headlineContent}</h1>
            <p>{props.subHeadline}</p>
        </div>
    )
}

export default Subheader;
