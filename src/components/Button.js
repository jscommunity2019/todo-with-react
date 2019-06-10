import React from 'react';

const button = (props) => {
    return (
        <button className="btn btn-primary" onClick={props.click}>{props.name}</button>
    );
};


export default button;