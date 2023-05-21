import { Link, useNavigate } from '@reach/router'
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import "./login.css";
import Switch from "react-switch";

function AdminHome() {
    const navigate = useNavigate();
    var data = []
    const [checkedValue, SetcheckedValue] = useState(false);
    const [productData, setProductData] = useState([]);

    const deleteProduct = (pid) => {
        axios.get("http://localhost:8081/deleteProduct/" + pid)
            .then(response => alert("Medicine Data Deleted"));
        window.location.reload();
    }

    const changeStatus = (pid) => {
        
        axios.get("http://localhost:8081/updateStatus/" + pid)
            .then(response => console.log("A"));
            window.location.reload();
        console.log(pid)
    }
    const getData=()=>{
        axios.get("http://localhost:8081/getAllProducts")
        .then(response => setProductData(response.data));
    }
    useEffect(() => {

        getData();
        console.log(productData.length);
        if (sessionStorage.getItem("admin") === null) {
            navigate("/admin_login");
        }

    }, [])
    return (
<>
<nav className="navbar navbar-expand-lg navbar-light text-center" style={{background:'#ffbc6c'}}>
  <Link to="/admin_home" className="navbar-brand mx-5 " href="#" style={{position:'relative',left:'7.5pc'}}><b>My Movie Plan Admin</b></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    
      <li className="nav-item "  style={{position:'relative',right:'-51.8pc' ,color:'black'}}>
      <button className='btn btn-danger'  onClick={() => {
                    sessionStorage.removeItem("admin");
                    navigate("/admin_login");
                }}>Logout</button>
      </li>

    </ul>
  </div>
</nav>

        <div className='d-flex bg-light justify-content-center align-items-center' style={{ height: '37pc' }}>
            
            <div className='w-75 bg-white rounded' style={{ padding: '8px',border:'2px solid', overflowY: "scroll", height: "573px",position:'relative',top:'-0px' }}>
                <h3 className='text-center'>List of Shows</h3>
                
                <Link to='/createProduct' className='btn btn-success ' style={{ textAlign: 'right', position: 'relative', right: "-86%" }}>Add +</Link >
                <table className='table table-striped ' style={{}}>
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Genre</th>

                            <th>Language</th>
                            <th>Description</th>
                            <th>Timings</th>
                            <th>Status</th>

                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            productData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.genre}</td>
                                    <td>{item.language}</td>
                                    <td>{item.description}</td>
                                    <td>{item.timings}
                                    </td>
                                    <td>                                       <Switch onChange={()=>changeStatus(item.id)} checked={item.status} />
                                    </td>

                                    <td>
                                        <Link className='btn btn-success mx-3' to={`/updateProduct/${item.id}`}>Update</Link>
                                        <button
                                            onClick={() => { deleteProduct(item.id) }}
                                            className='btn btn-danger'>Delete</button>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default AdminHome