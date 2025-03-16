import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
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
