import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card w-50 m-auto p-2">
        <div className="card-title text-center text-black fw-bolder">
          Register
        </div>
        <div className="card-body">
          <form className="p-10 w-75 m-auto">
            <div className="form-label">FirstName</div>
            <input
              type="text"
              name="firstname"
              placeholder="FirstName"
              className="form-control"
            />

            <div className="form-label mt-2">LastName</div>
            <input
              type="text"
              name="lastname"
              placeholder="LastName"
              className="form-control"
            />

            <div className="form-label mt-2">Email</div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
            />

            <div className="form-label mt-2">Username</div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="form-control"
            />

            <div className="form-label mt-2">Password</div>
            <input
              type="password"
              name="email"
              placeholder="Password"
              className="form-control"
            />

            <button className="btn btn-secondary w-100 mt-4">Register</button>

            <div className="mt-2">
              Already have an account?
              <span className="ms-1">
                <Link style={{ textDecoration: "none" }} to="/login">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
