import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
  };

  console.log(formData);

  return (
    <body
      style={{
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage:
          "url(https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          width: "420px",
          background: "transparent",
          border: "2px solid rgba(255,255,255,.2)",
          color: "#fff",
          borderRadius: "10px",
          padding: "30px",
        }}
        className="p-3 max-w-lg mx-auto "
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "800",
            color: "#fff",
            height: "auto", // Adjusted height to "auto"
          }}
          className="text-3xl text-center font-semibold my-7"
        >
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" action="">
          <input
            style={{
              width: "100%",
              height: "45px",
              background: "transparent",
              outline: "none",
              border: "2px solid rgba(255, 255, 255, .2)",
              borderRadius: "40px",
              fontSize: "16px",
              color: "#fff",
              padding: "20px 45px 20px 20px",
            }}
            type="text"
            placeholder="username"
            className="border p-3 rounder-lg"
            id="username"
            onChange={handleChange}
          />
          <input
            style={{
              width: "100%",
              height: "45px",
              background: "transparent",
              outline: "none",
              border: "2px solid rgba(255, 255, 255, .2)",
              borderRadius: "40px",
              fontSize: "16px",
              color: "#fff",
              padding: "20px 45px 20px 20px",
            }}
            type="email"
            placeholder="email"
            className="border p-3 rounder-lg"
            id="email"
            onChange={handleChange}
          />
          <input
            style={{
              width: "100%",
              height: "45px",
              background: "transparent",
              outline: "none",
              border: "2px solid rgba(255, 255, 255, .2)",
              borderRadius: "40px",
              fontSize: "16px",
              color: "#fff",
              padding: "20px 45px 20px 20px",
            }}
            type="password"
            placeholder="password"
            className="border p-3 rounder-lg"
            id="password"
            onChange={handleChange}
          />
          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            Sign Up
          </button>
        </form>
        <div className="flex gap-2 mt-5 ">
          <p>Have an account?</p>
          <Link to={"/sign-in"}>
            <span className="text-blue-700">Sign in</span>
          </Link>
        </div>
      </div>
    </body>
  );
}
