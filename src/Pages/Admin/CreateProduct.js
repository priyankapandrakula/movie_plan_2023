import { useNavigate } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from '@reach/router';

function CreateProduct() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: '',
        price: '',
        language: '',
        description: '',
        timings: '',
        genre:'',
        status: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.name === "" && data.name === "" && data.name === "" && data.name === "" && data.name === "") {
            alert("Fill all the details");
        }
        else {
            // console.log(typeof(data.sta))
            const data1 = {
                "name": data.name,
                "price": data.price,
                "language": data.language,
                "description": data.description,
                "timings": data.timings,
                "status": data.status,
                "genre":data.genre

            }

            axios.put('http://localhost:8081/addProduct', data1)
                .then(response => alert("Medicine Added"));
            navigate("/admin_home");
        }
    }
    useEffect(() => {

        if (sessionStorage.getItem("admin") === null) {
            navigate("/admin_login");
        }
    }, []);
    const updateData = (event, property) => {
        const target = event.target
        console.log(target)

        event.preventDefault()
        setData((prevState) => ({
            ...prevState,
            [property]: event.target.value,
        }))
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light text-center" style={{ background: '#ffbc6c' }}>
                <Link to="/admin_home" className="navbar-brand mx-5 " href="#" style={{ position: 'relative', left: '7.5pc' }}><b>My Movie Plan Admin</b></Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item" style={{ position: 'relative', right: '-51.8pc' }}>
                            <button className='btn btn-danger' onClick={() => {
                                sessionStorage.removeItem("admin");
                                navigate("/admin_login");
                            }}>Logout</button>
                        </li>

                    </ul>
                </div>
            </nav>
            <div className='d-flex  justify-content-center align-items-center' style={{ height: '37pc' }}>
                <div className='w-50 bg-white rounded' style={{ padding: '23px', border: '2px solid', overflowY: "scroll", height: "59%", position: 'relative', top: '-30px' }}>
                    <form>
                        <h2>Add Show</h2>
                        <div className='row'>
                            <div className='col mb-2'>
                                <label >Name</label>
                                <input type='text' placeholder='Enter Movie Name'
                                    onChange={(e) => updateData(e, 'name')}
                                    className='form-control' />
                            </div>
                            <div className=' col mb-2'>
                                <label >language</label>
                                <input type='text' placeholder='Enter Movie Language'
                                    onChange={(e) => updateData(e, 'language')}
                                    className='form-control' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col mb-2'>
                                <label >Price</label>
                                <input type='text' placeholder='Enter Ticket Price'
                                    onChange={(e) => updateData(e, 'price')}
                                    className='form-control' />
                            </div>
                            <div className='col mb-2'>
                                <label >Description</label>
                                <input type='text' placeholder='Enter Movie Description'
                                    onChange={(e) => updateData(e, 'description')}
                                    className='form-control' />
                            </div>
                        </div>
                        <div className='row'>

                            <div className=' col mb-2'>
                                <label >Timings</label>
                                <input type='text' placeholder='Enter Movie Timings'
                                    onChange={(e) => updateData(e, 'timings')}
                                    className='form-control' />
                                {/* <input type='text' placeholder='Enter Medicine Status' 
                         onChange={(e) => updateData(e, 'status')}
                        className='form-control'/> */}
                            </div>
                            <div className=' col mb-2'>
                                <label >Status</label>
                                <select onChange={(e) => { updateData(e, 'status'); console.log(data); }} className='form-control'>
                                    <option defaultValue={0}>Select</option>
                                    <option value={true}>Available</option>
                                    <option value={false}>Not Available</option>
                                </select>
                                {/* <input type='text' placeholder='Enter Medicine Status' 
                         onChange={(e) => updateData(e, 'status')}
                        className='form-control'/> */}
                            </div>
                            <div className='col mb-2'>
                            <label >Genre</label>
                            <input type='text' placeholder='Enter Movie genre' 
                             onChange={(e) => updateData(e, 'genre')}
                            className='form-control'/>
                        </div>
                        </div>
                        <button onClick={handleSubmit} className='btn btn-success'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateProduct