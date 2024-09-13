import React, { useContext } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const registerHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const termsAndContitions = e.target.termsAndContitions.checked;

    if (!termsAndContitions) {
      toast.error("Accept Terms &  Conditions", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });

      return;
    }
    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((e) => {
        console.log(
          "Error occured while creating user with email and password",
          e
        );
      });
  };

  return (
    <div className="pb-8">
      <Navbar />
      <div>
        <div className="bg-[#F3F3F3] shadow py-5 rounded md:w-1/2   mx-auto mt-8">
          <h2 className="text-2xl text-center  ">Login youir account</h2>
          <form onSubmit={registerHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Enter your photo url"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />

              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
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
              <button className="btn btn-primary">Register</button>
              {/* React toastify */}
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
              />
            </div>
            <div className="form-control ">
              <label className="label cursor-pointer justify-start gap-2">
                <input
                  type="checkbox"
                  name="termsAndContitions"
                  className="checkbox"
                />
                <span className="label-text">
                  Accept our{" "}
                  <a href="#" className="text-[#706F6F] font-semibold">
                    Terms & Contitions
                  </a>
                </span>
              </label>
            </div>
          </form>
          <h3 className="text-center">
            Already have an account?
            <Link className="text-orange-500 font-bold" to="/login">
              Login
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Register;
