import React from 'react';

function Hello(props)  {
    return (
        <div className="Hello">
            <h1>{props.headlineContent}</h1>
            <h2>{props.subHeadline}</h2>
        </div>
    )
}

export default Hello;
