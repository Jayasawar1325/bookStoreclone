import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password
        };

        try {
            const res = await axios.post('http://localhost:4001/api/v1/auth/register', userInfo);
            if (res.data) {
                toast.success('Registered successfully');
                navigate(from,{replace:true})
            }
            localStorage.setItem('Users',JSON.stringify(res.data.user))
        } catch (err) {
            if (err.response) {
                console.error("Server Error:", err.response.data);
                toast.error('Error: ' + err.response.data.message || "Something went wrong");
            } else if (err.request) {
                console.error("Request Error:", err.request);
                alert('Network Error: No response received');
            } else {
                console.error("Axios Error:", err.message);
                alert('Error: ' + err.message);
            }
        }
    };

    return (
        <>
            <div className='flex items-center justify-center '>
                <div className='max-w-2xl container shadow-md px-8 py-8 relative'>
                    <Link to='/' className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>X</Link>
                    <h1 className='text-2xl'>SignUp</h1>
                    <form method='dialog' onSubmit={handleSubmit(onSubmit)}>

                        <div className='mt-4'>
                            <label>Name:</label><br />
                            <input
                                type="text"
                                placeholder='Enter your name'
                                className='py-1 w-80 px-3 rounded-lg outline-none'
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                        </div>

                        <div className='mt-4'>
                            <label>Email:</label><br />
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className='py-1 w-80 px-3 rounded-lg outline-none'
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                        </div>

                        <div className='mt-4'>
                            <label>Password:</label><br />
                            <input
                                type="password"
                                placeholder='Enter your password'
                                className='py-1 w-80 px-3 rounded-lg outline-none'
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Minimum 6 characters" },
                                })}
                            />
                            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                        </div>

                        <div className="flex justify-between items-center">
                            <button className='text-white bg-pink-600 px-4 py-2 rounded-md mt-4 cursor-pointer'>
                                Signup
                            </button>
                            <p>Not LoggedIn? <button className='text-pink-600 cursor-pointer' onClick={() => document.getElementById('my_modal-3').showModal()}>
                                Login <Login />
                            </button></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
