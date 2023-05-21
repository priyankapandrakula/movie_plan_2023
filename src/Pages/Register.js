import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Spinner, InputGroup } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/high-res.css';
import axios from 'axios';
import { useNavigate } from '@reach/router';
import Header from '../components/Header';
import "./backgroundImage.css";

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [number, setNumber] = useState(null);
    const navigate=useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        const password = form.password.value;
        const firstname = form.firstName.value;
        const lastname = form.lastName.value;
        const email = form.email.value;
        const address=form.address.value;

        if (password && firstname && lastname && email && number) {
            setLoading(true);
            const data = { 
                "name":firstname+" "+lastname,
                "email":email,
                "number":number,
                "address":address,
                "password":password
             };
            axios.post('http://localhost:8081/addUser', data)
                .then(response => alert("data addred"));
            setLoading(false);
            navigate('/sign-in')

        }
    }
    return (
        <div className='containerUnique3'>
        <Header/>
        <Container className="py-3">
            <Row className="justify-content-center mt-5">
                <Col xs={11} sm={10} md={8} lg={4} className={`p-4 rounded text-black bg-light`}>
                    <h1 className={`text-center border-bottom pb-3  'text-light-primary'`}>
                        Create Account
                    </h1>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Label>First name</Form.Label>
                                <Form.Control name="firstName" type="text" placeholder="First name" required />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control name="lastName" type="text" placeholder="Last name" required />
                            </Form.Group>
                        </Row>
                       
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mobile number</Form.Label>
                            <PhoneInput
                                country={'in'}
                                value={number}
                                onChange={phone => setNumber(phone)}
                                className="text-dark"
                            />
                            <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control name="address" type="text" placeholder="Address"  minLength={3} required />
                            </Form.Group>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" minLength={6} required />
                        </Form.Group>
                        <Button
                            type="submit"
                            className={`'bg-light-primary' m-auto d-block`}
                            disabled={loading}
                            style={{ border: 0 }}
                        >
                            {loading ?
                                <>
                                    <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    &nbsp;Loading...
                                </> : 'Continue'
                            }
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </div>                   
    );
};

export default Register;