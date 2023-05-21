import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { Container, Table } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import PhoneInput from 'react-phone-input-2';
import { BsCartCheck, BsCartX } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from '@reach/router';
import { useState } from 'react';






import Modal from 'react-bootstrap/Modal'
import Header from '../components/Header';
import { useEffect } from 'react';
// import { CurrencyDollar } from 'react-bootstrap-icons'

function OrderConfirmation() {
  const navigate=useNavigate();
  const location=useLocation();
  const access=location.state;
  const date=new Date();
  
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
const number=sessionStorage.getItem('number');
const email=sessionStorage.getItem('email');
const address=sessionStorage.getItem('address');


// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}/${month}/${year}`;
  console.log(access);
  useEffect(()=>{
    if (sessionStorage.getItem("name") === null) {
      navigate("/sign-in");
  }
},[])
  


  return (
    <div>
      <Header/>
      <div className="container mt-5 mb-5">

                    <div className="row d-flex justify-content-center">

                        <div className="col-md-8">

                            <div className="card">



                                <div className="invoice p-5">

                                    <h5>Your order Confirmed!</h5>

                                    <span className="font-weight-bold d-block mt-4">Hello, </span>
                                    <span>You order has been confirmed and will be shipped in next two days!</span>

                                    <div className="payment border-top mt-3 mb-3 border-bottom table-responsive">

                                        <table className="table table-borderless">

                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="py-2">

                                                            <span className="d-block text-muted">Order Date</span>
                                                            <span>{currentDate}</span>

                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="py-2">

                                                            <span className="d-block text-muted">Contact Number</span>
                                                            <span>{number}</span>

                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="py-2">

                                                            <span className="d-block text-muted">Contact Email</span>
                                                            <span>{email}</span>

                                                        </div>
                                                    </td>

                                                    <td>
                                                        <div className="py-2">

                                                            <span className="d-block text-muted">Shiping Address</span>
                                                            <span>{address}</span>

                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>

                                        </table>





                                    </div>




                            
                                    <div className="row d-flex justify-content-end">

                                        <div className="col-md-5">

                                            <table className="table table-borderless">

                                                <tbody className="totals">

                                                    <tr>
                                                        <td>
                                                            <div className="text-left">

                                                                <span className="text-muted">Total</span>

                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="text-right">
                                                                <span>Rs/-578</span>
                                                            </div>
                                                        </td>
                                                    </tr>


                                                </tbody>

                                            </table>

                                        </div>



                                    </div>


                                    <p>We will be sending shipping confirmation email when the item shipped successfully!</p>
                                    <p className="font-weight-bold mb-0">Thanks for Choosing us!</p>
                                    <span>Medicare</span>




                                </div>
                                <Link to="/" className='btn btn-success'>Back to Home</Link>







                            </div>

                        </div>

                    </div>

                </div>
      {/* <Container className='bg-light py-3 border rounded my-5 ' style={{position:'relative',top:'82px',padding:'110px'}}>
        <h3 className='text-center '> Order Summary</h3>
        
     
      </Container> */}
    </div>
  )
}

export default OrderConfirmation;




