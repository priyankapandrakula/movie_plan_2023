import React,{ useEffect, useState} from 'react';
import { Container, Row, Col, Button, Form, Spinner, InputGroup} from 'react-bootstrap';
import { Link, useNavigate } from "@reach/router";

//icons
import { AiOutlineUser } from 'react-icons/ai';
import { VscKey } from 'react-icons/vsc';
import Header from '../components/Header';
import "./backgroundImage.css";

const SignIn = () => {
    
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [users,SetUsers]=useState([])


    async function getResponse(){
        const res = await fetch('http://localhost:8081/getUsers')
                          .then(res=> res.json());
                          SetUsers(await res);
                          console.log(res);
    }
    useEffect(()=>{
        getResponse();
    },[])
    const handleSubmit = (event)=>{
        const form = event.currentTarget;
        event.preventDefault();
        const username = form.username.value;
        const password = form.password.value;
        if(username && password){
            users.map((item,index)=>{
                if(item.number===username && item.password===password){
                    sessionStorage.setItem("name", item.name)
                    sessionStorage.setItem("number", item.number)
                    sessionStorage.setItem("email", item.email)
                    sessionStorage.setItem("address", item.address)
                    navigate("/home");
                }
            })
            // fetch('https://fakestoreapi.com/auth/login',{
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body:JSON.stringify({
            //         username: username,
            //         password: password
            //     })
            // }).then(res=>res.json())
            // .then(json=>sessionStorage.setItem("token", json.token))
            // .catch(error=> console.error(error))
            // .finally(()=>{
            //     setLoading(false);
            //     navigate('/', {replace: true})
            //     alert('Login successfully');
            // })
        }
    }
    return (
        <div className='containerUnique2'>
          <Header/>

                <Container className=" py-5 mt-5">
            <Row className="justify-content-center mt-5">
                <Col xs={11} sm={10} md={8} lg={4} className={`p-4 rounded text-black bg-light`}>
                    <h1 className={`text-center border-bottom pb-3 'text-light-primary'`}>
                        Sign in
                    </h1>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-4 mt-5">
                            <InputGroup.Text>
                                <AiOutlineUser size="1.8rem" />
                            </InputGroup.Text>
                            <Form.Control name="username" type="text" placeholder="Username" minLength={3} required />
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <InputGroup.Text>
                                <VscKey size="1.8rem" />
                            </InputGroup.Text>
                            <Form.Control name="password" className='form-control' type="password" placeholder="Password"  required />
                        </InputGroup>
                        <Button
                            type="submit"
                            className={`bg-light-primary m-auto d-block`}
                            disabled={loading}
                            style={{border: 0}}
                        >
                        {loading? 
                            <>
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                &nbsp;Loading...
                            </> : 'Sign in'
                        }
                        </Button>
                        <Form.Group className="mt-3 text-center">
                            <Form.Text className="text-muted fw-bold">
                                New to MyMoviePlan?
                            </Form.Text>
                            <Row className="py-2 border-bottom mb-3"/>
                            <Link to='/register' className="btn btn-info rounded-0">
                                Create your MyMoviePlan account 
                            </Link>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
       </Container>
       </div>
       
    );
};

export default SignIn;