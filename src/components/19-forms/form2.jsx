import React, {useEffect, useState} from 'react';
import {Form} from "react-bootstrap";

const Form2 = () => {

    const [toplanan1, setToplanan1] = useState(0);
    const [toplanan2, setToplanan2] = useState(0);
    const [toplam, setToplam] = useState(0);


    useEffect(() => {
        setToplam(Number(toplanan1) + Number(toplanan2));
    }, [toplanan1, toplanan2]);

    return (
        <Form>
            <h1>TOPLAMA IŞLEMI</h1>
            <Form.Group><Form.Control type="number" value={toplanan1}
                                      onChange={e => setToplanan1(e.target.value)}/></Form.Group>
            <Form.Group><Form.Control type="number" value={toplanan2}
                                      onChange={e => setToplanan2(e.target.value)}/></Form.Group>
            <h2>SONUC: {toplam}</h2>
        </Form>
    );
};

export default Form2;