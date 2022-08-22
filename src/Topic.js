import React, { Component, useState, useEffect } from 'react';


function Topic(props, event) {
    const [selected, setCurrent] = useState(false);

    const onClick = (e) => {
        if(selected === false) {
            setCurrent(selected => true); 
            console.log(selected);
        } else {
            setCurrent(selected => false); 
            console.log(selected);
        } 
    };

    return (
        <>
            <div onClick={() => onClick() }>{props.topic} +</div>
        </>
    );
}

export default Topic;