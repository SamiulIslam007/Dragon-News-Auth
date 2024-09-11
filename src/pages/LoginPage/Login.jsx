import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="pb-8">
      <Navbar />
      <div>
        <div className="bg-[#F3F3F3] shadow py-5 rounded md:w-1/2   mx-auto mt-8">
          <h2 className="text-2xl text-center  ">Login youir account</h2>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <h3 className="text-center">
            Don't have an account?
            <Link className="text-orange-500" to="/register">
              Register
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
