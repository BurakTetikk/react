import React, {useState} from 'react';
import {Form} from "react-bootstrap";

const Form3 = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    })

    console.log(formData)

    return (
        <Form>
            <Form.Group>
                <Form.Label>Adı</Form.Label>
                <Form.Control type="text" value={formData.firstName}
                              onChange={e => setFormData({...formData, firstName: e.target.value})}/>
            </Form.Group><Form.Group>
            <Form.Label>Soyadı</Form.Label>
            <Form.Control type="text" value={formData.lastName}
                          onChange={e => setFormData({...formData, lastName: e.target.value})}/>
        </Form.Group><Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}/>
        </Form.Group><Form.Group>
            <Form.Label>Numara</Form.Label>
            <Form.Control type="text" value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}/>
        </Form.Group>
        </Form>
    )
};

export default Form3;