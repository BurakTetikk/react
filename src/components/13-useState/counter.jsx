import React, {useState} from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import {IoIosRefresh, IoMdAdd, IoMdRemove} from "react-icons/io";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <ButtonGroup aria-label="Basic example">
            <Button variant="danger" onClick={() => setCounter((prev) => prev - 1)} disabled={!counter}><IoMdRemove/></Button>
            <Button variant="white" disabled>{counter}</Button>
            <Button variant="success" onClick={() => setCounter((prev) => prev + 1)}><IoMdAdd/></Button>
            <Button variant="dark" onClick={() => setCounter(0)} disabled={!counter}><IoIosRefresh/></Button>
        </ButtonGroup>
    );
};

export default Counter;