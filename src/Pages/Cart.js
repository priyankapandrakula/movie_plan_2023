import React from 'react';
import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { BsCartCheck, BsCartX} from 'react-icons/bs';
// import {Link} f
import { Link } from "@reach/router";
import Header from '../components/Header';
import { useState } from 'react';
import "./backgroundImage.css";

const Cart = () => {
    const [session, SetSession] = useState(sessionStorage.getItem("name"));
    const checkSignin=()=>{
        // alert("Sign in To Continue");
        if(session===null){
            return(
                <Link to='/sign-in'
                                className="btn btn-success m-2"
                            >
                                <BsCartCheck size="1.7rem" />
                               Checkout
                            </Link>
            );
        }
        else{
            return(
                <Link to='/checkout'
                                className="btn btn-success m-2"
                            >
                                <BsCartCheck size="1.7rem" />
                               Checkout
                            </Link>
            );
        }
    }
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    return (
        <div className='containerUnique3'>
        <Header/>
        {/* <img src="https://www.hopkinsmedicine.org/-/media/images/health/3_-wellness/living-with-a-chronic-disease/help-for-managing-multiple-medications-hero.ashx?h=500&iar=0&mh=500&mw=1300&w=1297&hash=122DB3C1DCAD683F2F7CAE139A67613C" style={{position:'absolute', width:"100%",opacity:'.7' ,zIndex:'-1'}} height={657} /> */}

        <Container className=" py-4 mt-5">
            <h1 className={`text-light-primary my-5 text-center`}>
                {isEmpty? 'Your Cart is Empty' : 'The Cart'}
            </h1>
            <Row className="justify-content-center">
                <Table responsive="sm" striped bordered hover variant={'light'} className="mb-5">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Movie Name</th>
                            <th>Ticket Price</th>
                            <th>Language</th>
                            <th>Timings</th>

                            <th>No of Tickets</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    {/* <td>
                                        <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ padding: '.5rem'}}>
                                                <img src={item.image} style={{ width: '4rem'}} alt={item.title} />
                                            </div>
                                        </div>
                                    </td> */}
                                    <td>{item.id}</td>
                                    <td>
                                        <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                            {item.name}
                                        </h6>
                                    </td>
                                    <td>Rs. {item.price}</td>
                                    <td>Language ({item.language})</td>
                                    <td> ({item.timings})</td>

                                    <td> ({item.quantity})</td>
                                    
                                    <td> {item.description}</td>
                                    <td>
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity - 1)} className="ms-2">-</Button>
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} className="ms-2">+</Button>
                                        <Button variant="danger" onClick={()=> removeItem(item.id)} className="ms-2">Remove Ticket</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                {!isEmpty &&
                    <Row 
                        style={{ position: 'fixed', bottom: 0}}
                        className={`bg-light text-balck justify-content-center w-100`}
                    >
                        <Col className="py-2">
                            <h4>Total Price: Rs. {cartTotal}</h4>
                        </Col>
                        <Col className="p-0" md={4}>
                            <Button variant="danger"
                                className="m-2"
                                onClick={()=> emptyCart()}
                            >
                                <BsCartX size="1.7rem" />
                                Clear Cart
                            </Button>
                            {
                                checkSignin()
                            }
                        </Col>
                    </Row>}
            </Row>
        </Container>
        </div>
    );
};

export default Cart;