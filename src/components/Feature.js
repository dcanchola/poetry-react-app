import React from 'react';

function Feature(props, event) {

    return (
        <>  
            <div className="feature">
                <div className="content">
                    <h2>FEATURED POEM</h2>
                    <hr></hr>
                    <h3 className="title">{props.title}</h3>
                    <h3>{props.author}</h3>
                </div>
                <div className="button">View Poem ›</div>
            </div> 
        </>
    );
}

export default Feature;