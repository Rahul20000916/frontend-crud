import React, { useState } from "react";
import Logo from "./../../../assets/logo.png"
import { motion } from 'framer-motion';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("https://crud-backend-siu8.onrender.com/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.status === "ok") {
      localStorage.setItem("admintoken", data.admintoken);
      window.location.href = "/admin";
    }
    console.log(data);
  }
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      {/* Left: Image */}
      <div className="w-1/2 h-screen hidden lg:flex justify-center items-center">
      <motion.img
        src={Logo}
        alt="image"
        className="object-cover"
        style={{ width: '75%', maxWidth: '75%', height: 'auto' }}
        whileHover={{
          y: [0, -20, 0], // Bouncing animation
          transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse', // Bounce back to original position
            ease: 'easeInOut', // Smooth animation
          }
        }}
      />
    </div>
      {/* Right: Login Form */}
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Admin Login</h1>
        <form onSubmit={loginUser}>
          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              required
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
