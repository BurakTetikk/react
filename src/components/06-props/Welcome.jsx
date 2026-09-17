import React from 'react';
import './welcome.scss';

// 1. Yöntem
/*
const Welcome = (props) => {

    const {name, style} = props;

    return (
        <div className="welcome">
            <h2 style={style}>Welcome, {name}!</h2>
        </div>
    );
};
*/

// 2. Yöntem
/*

const Welcome = ({name, style}) => {

    return (
        <div className="welcome">
            <h2 style={style}>Welcome, {name}!</h2>
        </div>
    );
};
*/

//3. Yöntem

const Welcome = (props) => {

    return (
        <div className="welcome">
            <h2 style={props.style}>Welcome, {props.name}!</h2>
        </div>
    );
};

export default Welcome;