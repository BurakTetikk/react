import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";

const UseEffectHook = () => {

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    console.log('useEffect hookunda beklenildiği gibi render ve re-render durumlarında çalışır.')

    useEffect(() => {
        console.log('MOUNTING: Bu satır render durumunda çalışırken useEffect hookunda beklenildiği gibi her re-renderda çalışmaz.');
    }, []);

    useEffect(() => {
        console.log('UPDATING: Bu satır render ve re-render durumlarında çalışırken ' +
            'useEffect hookunda beklenildiği gibi her re-renderda çalışır. Temel farkları return kısmından önce veya sonra çalışmasıdır.' +
            'useEffect ile return kısmından sonra çalışır. Önce return kısmında değişiklik olmasını bekler.');
    });

    useEffect(() => {
        console.log(`UPDATING: 'message state' değiştikçe çalışır.`);
    }, [message]);


    return (
        <div>
            <div>{message} - {error}</div>
            <Button variant="primary" onClick={() => setMessage("Hello")}>Message</Button>
            <Button variant="danger" onClick={() => setError("Error")}>Error</Button>
        </div>
    );
};

export default UseEffectHook;