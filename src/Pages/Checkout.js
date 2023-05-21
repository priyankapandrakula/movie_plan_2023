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
import { Link, useNavigate } from '@reach/router';
import { useState } from 'react';
import axios from 'axios';







import Modal from 'react-bootstrap/Modal'
import Header from '../components/Header';
// import { CurrencyDollar } from 'react-bootstrap-icons'
import "./backgroundImage.css";
import { useDeferredValue } from 'react';
import { useEffect } from 'react';

function Checkout() {
  const [data_items,SetItems]=useState([]);
  const [totalPrice,SetTotalPrice]=useState(0);
  useEffect(()=>{

    if (sessionStorage.getItem("name") === null) {
      navigate("/sign-in");
  }

  },[])
  const navigate=useNavigate();
  const [payment,SetPayment]=useState("");
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
} = useCart();
  const [milestone, setMilestone] = useState({
    name: sessionStorage.getItem("name"),
    number:sessionStorage.getItem("number") ,
    email: sessionStorage.getItem("email"),
    address: sessionStorage.getItem("address")
  })

  const handleSubmit = () => {
    if(milestone.name==="" && milestone.number==="" && milestone.email==="" && milestone.address==="" ){
      alert('Invalid');
      
    }
    else{
      const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
      var items_list="";
      items.map((item,index)=>{
        let a=item.id+"-"+item.quantity
        items_list=items_list.concat(",",a)
      });
      const data={
        "user_name":milestone.name,
        "user_number":milestone.number,
        "user_email":milestone.email,
        "user_address":milestone.address,
        "items":items_list.slice(1),
        "date":currentDate
      }

      axios.post('http://localhost:8081/addOrder', data)
                .then(response => alert("Order Placed"));
      SetItems(items);
      SetTotalPrice(cartTotal);
      console.log(data_items)
      emptyCart();
      navigate("/order",{state:{total:totalPrice,Items:data_items}});

    }
  }


  

  const setpayment = () => {
    if(payment==='1'){
      return (
        <h5 className="text-center text-danger mt-4">**Selected Cash on Delivery as Payment Method**</h5>
      );
    }
    else if(payment==='2'){
      return (
        <>
        <h4 className='text-center mt-4 mb-4'><u>Enter Debit Card Details</u></h4>
        <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>Debit Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="cardnumber"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik02">
                  <Form.Label>Expiry Date</Form.Label>
                  <Form.Control
                    type="text"
                    name="expiry"
                    placeholder="--/----"
                  />

                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                  <Form.Label>CVV</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="XXX"
                      aria-describedby="inputGroupPrepend"
                      name="cvv "
                    />
                </Form.Group>
              </Row>
              </>
      );
    }
    else if(payment==='3'){
       return (
        <>
        <h4 className='text-center mt-4 mb-4'><u>Enter Credit Card Details</u></h4>
        <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>Credit Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="cardnumber"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik02">
                  <Form.Label>Expiry Date</Form.Label>
                  <Form.Control
                    type="text"
                    name="expiry"
                    placeholder="--/----"
                  />

                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                  <Form.Label>CVV</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="XXX"
                      aria-describedby="inputGroupPrepend"
                      name="cvv "
                    />
                </Form.Group>
              </Row>
              </>
      );
    }
  }
  const updateMilestone = (event, property) => {
    const target = event.target
    console.log(target)

    event.preventDefault()
    setMilestone((prevState) => ({
      ...prevState,
      [property]: event.target.value,
    }))
  }

  return (
    <div className='' >
               <img src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-movie-ticket-cinema-promotion-banner-image_189804.jpg" style={{position:'absolute', width:"100%",opacity:'.7'}} height={600    } />

        <Header/>

      <Container className=' bg-light py-3 border w-75 rounded my-5 ' style={{position:'relative',top:'31px',padding:'50px',overflowY:"scroll",height:'32pc'}}>
        <h3 className='text-center '> Check Out</h3>
        <hr></hr>
      <Form>
      <Row className="mb-3">
      <h4 className='text-center '> <u>User Details</u></h4>

                 <Form.Group as={Col} md="4" controlId="validationFormik01">
                   <Form.Label>Full Name</Form.Label>
                   <Form.Control
                    type="text"
                    onChange={(e) => updateMilestone(e, 'name')}
                    value={milestone.name}
                    name="firstName"
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik02">
                  <Form.Label>Mobile number</Form.Label>
                  {/* <PhoneInput
 value={milestone.number}
                    name="number"
                    onChange={(e) => updateMilestone(e, 'number')}
                    className="text-dark"
                  /> */}
                   <Form.Control
                    type="text"
                    onChange={(e) => updateMilestone(e, 'number')}
                    value={milestone.number}
                    name="firstName"
                    required
                  />

                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                  <Form.Label>Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      value={milestone.email}
                      onChange={(e) => updateMilestone(e, 'email')}
                      placeholder="Email"
                      aria-describedby="inputGroupPrepend"
                      name="email"
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </Row>

                <Form.Group controlId="validationFormik03">
                 <Form.Label>Address</Form.Label>
                 <Form.Control
                  type="text"
                  onChange={(e) => updateMilestone(e, 'address')}
                  value={milestone.address}
                  placeholder="Address"
                  name="address"
                  required
                />
                </Form.Group>


                <Form.Group className='w-25 text-center' style={{position:'relative',left:'38%'}} required>
                <Form.Label>Payment Type</Form.Label>
                <Form.Select onChange={(e) => {SetPayment(e.target.value) }} aria-label="Default select example">
                  <option value="0" > Open this select menu</option>
                  <option value="1">Cash on Delivery</option>
                  <option value="2">Debit Card</option>
                  <option value="3">Credit Card</option>
                </Form.Select>

              </Form.Group>
            {
              setpayment()
            }
            <Container className="py-4 mt-2 border border-4 border-dark">
            <h4 className={` text-center`}>
               <u> {isEmpty? 'Your Cart is Empty' : 'Review Cart Details'}</u>
            </h4>
            <Row className="justify-content-center">
                <Table responsive="sm" striped bordered hover variant={'light'} className="mb-5">
                <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
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
                              <td>{item.id}</td>
                              <td>
                                  <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                      {item.name}
                                  </h6>
                              </td>
                              <td>Rs. {item.price}</td>
                              <td> ({item.language})</td>
                              <td> ({item.timings})</td>
                              <td>Quantity ({item.quantity})</td>
                              
                              <td> {item.description}</td>
                              <td>
                                  <Button onClick={()=> updateItemQuantity(item.id, item.quantity - 1)} className="ms-2">-</Button>
                                  <Button onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} className="ms-2">+</Button>
                                  <Button variant="danger" onClick={()=> removeItem(item.id)} className="ms-2">Remove Item</Button>
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
                            <Button onClick={handleSubmit}
                                className="btn btn-success m-2"
                            >
                                <BsCartCheck size="1.7rem" />
                               Checkout
                            </Button>
                        </Col>
                    </Row>}
            </Row>
        </Container>
             
      </Form>
      </Container>
    </div>
  )
}

export default Checkout;





  // }

















      // <Formik

      //   validationSchema={schema}
      //   initialValues={{
      //     fullname: 'Mark',
      //     number: '919966288487',
      //     email: 'naren@gmail.com',
      //     address: 'asasa',
      //     state: '',
      //     zip: '',
      //     terms: false,
      //   }}
      //   onSubmit={async (values)=>{
      //     alert("Naren");
      //   }}
      // >
      //   {({ handleSubmit, handleChange, values, touched, errors }) => (
      //     <Container className="py-5 mt-0 bg-light rounded w-75 "
      //       style={{ position: "relative", top: "8pc" }}>
      //       <h2 className={`text-center border-bottom pb-3   'text-light-primary'`}>
      //         Checkout
      //       </h2>
      //       <Form noValidate onSubmit={handleSubmit}>
              // <h4 className='text-center mb-4'><u>Review Your Details</u></h4>
              // <Row className="mb-3">
              //   <Form.Group as={Col} md="4" controlId="validationFormik01">
              //     <Form.Label>Full Name</Form.Label>
              //     <Form.Control
              //       type="text"
              //       name="firstName"
              //       value={values.fullname}
              //       onChange={handleChange}
              //       isValid={touched.fullname && !errors.fullname}
              //     />
              //     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              //   </Form.Group>
              //   <Form.Group as={Col} md="4" controlId="validationFormik02">
              //     <Form.Label>Mobile number</Form.Label>
              //     <PhoneInput

              //       name="number"
              //       isValid={touched.number && !errors.number}
              //       country={'in'}
              //       value={values.number}
              //       onChange={handleChange}
              //       className="text-dark"
              //     />

              //     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              //   </Form.Group>
              //   <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              //     <Form.Label>Email</Form.Label>
              //     <InputGroup hasValidation>
              //       <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              //       <Form.Control
              //         type="text"
              //         placeholder="Email"
              //         aria-describedby="inputGroupPrepend"
              //         name="email"
              //         value={values.email}
              //         onChange={handleChange}
              //         isInvalid={!!errors.email}
              //       />
              //       <Form.Control.Feedback type="invalid">
              //         {errors.username}
              //       </Form.Control.Feedback>
              //     </InputGroup>
              //   </Form.Group>
              // </Row>
      //         {/* <Row className="mb-3"> */}
      //         <Form.Group controlId="validationFormik03">
      //           <Form.Label>Address</Form.Label>
      //           <Form.Control
      //             type="text"
      //             placeholder="Address"
      //             name="address"
      //             value={values.address}
      //             onChange={handleChange}
      //             isInvalid={!!errors.address}
      //           />

      //           <Form.Control.Feedback type="invalid">
      //             {errors.address}
      //           </Form.Control.Feedback>
      //         </Form.Group>
    
      //         <button type="submit">Submit</button>
              
             
      //       </Form>
      //     </Container>
      //   )}


      // </Formik>