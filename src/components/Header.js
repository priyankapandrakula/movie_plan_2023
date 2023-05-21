import React, {  useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import {  BiCart } from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import { Link, useNavigate } from "@reach/router";
import { useCart } from "react-use-cart";
import { useEffect } from 'react';

const Header = () => {
  const [session, SetSession] = useState("");
  const navigate=useNavigate();
  useEffect(()=>{
    
    SetSession(sessionStorage.getItem("name"));
  },[])
  const navmenu = () => {
    if (session === null) {
      return (
        <>
        <Link to="/sign-in" className={`text-success nav-link `}>
          Sign in
        </Link>
        <Link
            to="/cart"
            className={` d-flex align-items-center`}
          >
            <BiCart size="2rem" />
            {!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px',color:'white' }}>{totalItems}</span>}
            <span style={{ marginLeft: !isEmpty ? '-13px' : 0 }}>&nbsp;Cart</span>
          </Link>
          <Link className='btn btn-success' style={{padding:"6px",margin:"0px 19px"}} to='/admin_login'>
          Admin Login
          </Link>
        </>
      );
    }
    else {
      return (
        <>
          <Link to="home" className={`nav-link ` } style={{color:'white'}}>
            Signed in As:<strong> {session}</strong>
          </Link>
          <Link
            to="/cart"
            className={` d-flex align-items-center`}
          >
            <BiCart size="2rem" />
            {!isEmpty && <span style={{ position: 'relative', left: '-21px', top: '-18px',color:'white' }}>{totalItems}</span>}
            <span style={{ marginLeft: !isEmpty ? '-13px' : 0 }}>&nbsp;Cart</span>
          </Link>
          <button 
           onClick={()=>{
            sessionStorage.removeItem("name");
            navigate("/sign-in");
        }}
          className={`mx-3 btn btn-danger `}>
            <VscAccount size="1.8rem" />
            &nbsp;Logout
          </button>
        </>
      );
    }
  }
  const {
    isEmpty,
    totalItems,
  } = useCart();

  return (
    <Navbar collapseOnSelect expand="md"
      variant={'light'}
      className={'text border-bottom'}
      style={{ width: '100%', position: 'fixed', zIndex: 100 ,top:"0px",  background: "black",color:'white'}}
    >
      <Container>
        <Link to="/home">
          <Navbar.Brand className={''} style={{color:'white',fontFamily:'fantasy'}}>
            My Movie Plan
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
              navmenu()
            }


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;