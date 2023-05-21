import React, { useState } from 'react'

import "../Admin/login.css";
import { useNavigate } from '@reach/router';


// import "../Admin/login";


function AdminLogin() {
		const [username,Setusename]=useState("");
	const [password,Setpassword]=useState("");
	const navigate=useNavigate();
	const handleSubmit=()=>{
		if(username==="admin" && password==="admin"){
			sessionStorage.setItem("admin", true);
			navigate("/admin_home");
		}
	}
	// JSX code for login form
	const renderForm = (
	  <div className="form">
		<form onSubmit={handleSubmit}>
		  <div className="input-container">
			<label>Username </label>
			
			<input type="text"  onChange={(e)=>{Setusename(e.target.value)}} placeholder="Username" required/>


			 
		  </div>
		  <div className="input-container">
			<label>Password </label>
		  <input type="password" onChange={(e)=>{Setpassword(e.target.value)}} placeholder="Password"  required/>
			
		
		  </div>
		  <div className="button-container">
			<input  className='btn btn-success my-2' type="button" onClick={handleSubmit} value="Login"/>

		  </div>
		</form>
	  </div>
	);
  
	return (
	  <div className="app" style={{background:'bisque'}}>
		<div className="login-form">
		  <div className="title text-center">Admin Login</div>
		  {renderForm}
		</div>
	  </div>
	);
  }
  
  export default AdminLogin;












// export default function AdminLogin() {
// 	const [username,Setusename]=useState("");
// 	const [password,Setpassword]=useState("");
// 	const navigate=useNavigate();
// 	const handleSubmit=()=>{
// 		if(username==="admin" && password==="admin"){
// 			sessionStorage.setItem("admin", true);
// 			navigate("/admin_home");
// 		}
// 	}
//   return (
//     <div>

// <div className="login-reg-panel" style={{position:"absolute"}}>
// 		<div className="login-info-box">
// 			<h2>Have an account?</h2>
// 			<p>Lorem ipsum dolor sit amet</p>
// 			<label id="label-register" for="log-reg-show">Login</label>
// 			<input type="radio" name="active-log-panel" id="log-reg-show"  checked="checked"/>
// 		</div>
							
// 		<div className="register-info-box">
// 		<div className="login py-4">
// 				<h2>Admin Login</h2>
				// <input type="text"  onChange={(e)=>{Setusename(e.target.value)}} placeholder="Email" className='form-control my-2' required/>
				// <input type="password" onChange={(e)=>{Setpassword(e.target.value)}} placeholder="Password" className='form-control my-2' required/>
// 				<input  className='btn btn-success my-2' type="button" onClick={handleSubmit} value="Login"/>
				
// 			</div>
			
// 		</div>
							
// 		<div className="white-panel">
			
// 		</div>
// 	</div>
//     </div>
//   )
// }
