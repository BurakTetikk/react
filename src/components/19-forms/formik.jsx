import React from 'react';
import * as Yup from "yup";
import {Button, Container, Form} from "react-bootstrap";
import {useFormik} from "formik";

const Formik = () => {
    const initialValues = {
        email: '',
        password: '',
        remember: false
    };

    const schemaValidation = Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required')
    });

    const onSubmit = (values) => {
        console.log(values);
    };

    const formik = useFormik({
        initialValues,
        validationSchema: schemaValidation,
        onSubmit
    });


    return (
        <Container className="mt-5">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...formik.getFieldProps('email')}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...formik.getFieldProps('password')}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" {...formik.getFieldProps('remember')}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Formik;