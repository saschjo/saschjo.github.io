import React from 'react';

function Hello(props)  {
    //Ser till att man hamnar högst upp på sidan även via framsidan
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="Hello">
            <h1>{props.headlineContent}</h1>
            <h2>{props.subHeadline}</h2>
        </div>
    )
}

export default Hello;
