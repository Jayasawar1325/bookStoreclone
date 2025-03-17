import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';
const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    const userInfo = {
        email: data.email,
        password: data.password
    };

    try {
        const res = await axios.post('http://localhost:4001/api/v1/auth/login', userInfo);
        if (res.data) {
          toast.success('LoggedIn Successfully!');
          document.getElementById('my_modal_3').close();
          setTimeout(()=>{
            window.location.reload()
            localStorage.setItem('Users',JSON.stringify(res.data.user))

          },1000)
        }
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
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        {/* Close Button */}
        <button 
          onClick={() => document.getElementById('my_modal_3').close()} 
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>

        <h3 className="font-bold text-lg">Login</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          
          {/* Email Field */}
          <div className="mt-4">
            <label>Email:</label><br />
            <input
              type="email"
              placeholder="Enter your email"
              className="py-1 w-80 px-3 rounded-lg outline-none border border-gray-300"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div className="mt-4">
            <label>Password:</label><br />
            <input
              type="password"
              placeholder="Enter your password"
              className="py-1 w-80 px-3 rounded-lg outline-none border border-gray-300"
              {...register("password", { 
                required: "Password is required", 
                minLength: { value: 6, message: "Minimum 6 characters" } 
              })}
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          </div>

          {/* Submit and Signup Link */}
          <div className="flex justify-between items-center mt-4">
            <button type="submit" className="text-white bg-pink-600 px-4 py-2 rounded-md">
              Login
            </button>
            <p>Not registered? <Link to='/signup' className="text-pink-600">Signup</Link></p>
          </div>

        </form>
      </div>
    </dialog>
  );
};

export default Login;
