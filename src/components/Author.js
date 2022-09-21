import React from 'react';

function Author(props, event) {
    return(
        <>
            <div className="author">{props.name}<span id="carat">›</span></div>
        </>
    );
}

export default Author;