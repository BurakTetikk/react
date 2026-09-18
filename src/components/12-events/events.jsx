import React from 'react';
import {Alert} from "react-bootstrap";

const Events = () => {

    const sayHello1 = () => {
        alert('Selam!');
    }
    const sayHello2 = (name) => {
        alert(`Selam! ${name}`);
    }
    return (
        <div>
            <div onClick={sayHello1}>Say Hello!</div>
            <div onClick={() => sayHello2('Burak')}>Say Hello!</div>
        </div>
    );
};

export default Events;