import React, {useState} from 'react';
import {Form} from "react-bootstrap";

const Form4 = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    })

    const handleForm = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    console.log(formData)

    return (
        <Form className="mt-5">
            <Form.Group className="mb-3">
                <Form.Label>Adı</Form.Label>
                <Form.Control type="text" name="firstName" value={formData.firstName}
                              onChange={e => handleForm(e)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Soyadı</Form.Label>
                <Form.Control type="text" name="lastName" value={formData.lastName}
                              onChange={e => handleForm(e)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="email" value={formData.email}
                              onChange={e => handleForm(e)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Numara</Form.Label>
                <Form.Control type="text" name="phone" value={formData.phone}
                              onChange={e => handleForm(e)}/>
            </Form.Group>
        </Form>
    )
};

export default Form4;