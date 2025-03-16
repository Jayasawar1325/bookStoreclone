import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";

    
const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (    
      <>
      <div className='flex items-center justify-center '>
     
        <div className='max-w-2xl container shadow-md px-8 py-8 relative'>
          <Link to='/' className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>X</Link>
          <h1 className='text-2xl'>SignUp</h1>
          <form method='dialog' onSubmit={handleSubmit(onSubmit)}>
          
          <div className='mt-4'>
            <label>
                Username:
            </label><br/>   
            <input type="text" placeholder='Enter your email'  className='py-1 w-80 px-3  rounded-lg outline-none'  {...register("email", { required: "Email is required" })}
            />
                        {errors.email && <p className="text-red-600">{errors.email.message}</p>}

          </div>
          <div className='mt-4'>
            <label>
                Email:
            </label><br/>
            <input type="email" placeholder='Enter your email' className='py-1 w-80 px-3  rounded-lg outline-none' />
          </div>
          <div className='mt-4'>
            <label>
                Password:
            </label><br/>
            <input type="password" placeholder='Enter your password' className='py-1 w-80 px-3  rounded-lg outline-none'  {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })} />    
                          {errors.password && <p className="text-red-600">{errors.password.message}</p>}

          </div>
          <div className="flex justify-between items-center">
            <button className='text-white bg-pink-600 px-4 py-2 rounded-md mt-4 cursor-pointer'>Signup</button>
            <p>Not LoggedIn? <button className='text-pink-600 cursor-pointer' onClick={()=>document.getElementById('my_modal-3').showModal()}>Login<Login/></button></p>
          </div>
          </form>
        </div>
      </div>
      </>
    )
  }

export default Signup