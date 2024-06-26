import React, { useState } from 'react';
import Footer from './Footer';
import NavComponent from './nav';
import './login.css';



const SignupPage = () => {

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        password: '',
        username: '',
        email: ''


    });
    // this method takes an event e as its parameter (e-event object)
    //setformstate updates form data state
    //handleChange func updates the formdata when user types in the textbox
    const handleChange = (e) => {
        if (e.target.name === 'role') {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
        else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {

            alert('Invalid Email Format');
            return;
        }
        if (!validatePassword(formData.password)) {

            alert('Invalid Password Format');
            return;
        }
        try {
            const response = await fetch('http://localhost:8099/authentication/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                window.location.href = './home';
            } else {
                console.error('signup failed');
            }
        } catch (error) {
            console.error('Error', error);
        }
    };
    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        console.log(password);
        return passwordRegex.test(password);
    };
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailRegex.test(email);
    };

    return (
        <div>

            <NavComponent></NavComponent>
            <div className='ocontainer' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className='container' style={{ marginTop: '-160px', width: '500px' }}>
                    <div className='row'>
                        <div className='card'>
                            <h2 className='text-center'>Sign Up</h2>
                            <div className='card-body'>
                                <form >
                                    <div className='form-group mb-2'>
                                        <label for="fname">First Name : </label>
                                        <input type="text" id="fname" name="fname" placeholder='First Name' value={formData.fname} className='form-control'
                                            onChange={handleChange} required /></div>

                                    <div className='form-group mb-2'>
                                    <label for="lname"> Last Name : </label>
                                    <input type="text" id="lname" name="lname" placeholder='Last Name' value={formData.lname} className='form-control'
                                        onChange={handleChange} required /></div>

                                    <div className='form-group mb-2'>
                                        <label for="password">Password : </label>
                                        <input type="password" id="password" name="password" placeholder='password' value={formData.password} className='form-control'
                                            onChange={handleChange} required /></div>

                                    <div className='form-group mb-2'>
                                        <label for="username">Username : </label>

                                        <input type="username" id="username" name="username" placeholder='username' value={formData.username} className='form-control'
                                            onChange={handleChange} required /></div>
                                   

                                    <div className='form-group mb-2'>
                                        <label for="email">Email : </label>

                                        <input type="email" id="email" name="email" placeholder='Email' value={formData.email} className='form-control'
                                            onChange={handleChange} required /></div>


                                </form>
                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                    <button className='btn btn-success' style={{ backgroundColor: '#000000', border: 'none' }} onClick={handleSubmit}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
                <Footer></Footer>
            
        </div>
        
        
    );
}

export default SignupPage;
