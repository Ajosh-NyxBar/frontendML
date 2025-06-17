import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg("Register success! Redirecting to login...");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setMsg(data.message || "Register failed");
      }
    } catch (err) {
      setMsg("Network error");
    }
    setLoading(false);
  };

  return (
    <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-0 max-w-[960px] flex-1 justify-center">
      <div className="flex items-center gap-4 justify-center pb-4">
        <img src={logo} alt="SkinScan Logo" className="w-[150px] object-contain" />
      </div>
      <h2 className="text-[#111518] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3">
        Create your account
      </h2>
      <form onSubmit={handleRegister}>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#111518] text-base font-medium leading-normal pb-2">Username</p>
            <input
              placeholder="Username"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637888] p-4 text-base font-normal leading-normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#111518] text-base font-medium leading-normal pb-2">Password</p>
            <input
              type="password"
              placeholder="Password"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-14 placeholder:text-[#637888] p-4 text-base font-normal leading-normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </label>
        </div>
        <div className="flex px-4 py-3">
          <button
            type="submit"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#309be8] text-white text-base font-bold leading-normal tracking-[0.015em]"
            disabled={loading}
          >
            <span className="truncate">{loading ? "Registering..." : "Sign up"}</span>
          </button>
        </div>
        {msg && (
          <div className="text-center text-sm text-red-500 pb-2">{msg}</div>
        )}
      </form>
      <p className="text-[#637888] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
        By signing up, you agree to our Terms of Service and Privacy Policy
      </p>
      <p className="text-[#637888] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline cursor-pointer">
        Already have an account? <a href="/login">Log in</a>
      </p>
    </div>
  );
};

export default RegisterForm;