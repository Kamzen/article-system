import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="row">
        <div className="card w-50 m-auto p-2 col-sm-12">
          <div className="card-title text-center text-black fw-bolder">
            Login
          </div>
          <div className="card-body">
            <form className="p-10 w-75 m-auto">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="form-label">Email/Username</div>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email/Username"
                    className="form-control"
                  />
                </div>

                <div className="col-md-12 col-sm-12">
                  <div className="form-label mt-2">Password</div>
                  <input
                    type="password"
                    name="email"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>

                <div className="col-md-12 col-sm-12">
                  <button className="btn btn-secondary w-100 mt-4">
                    Login
                  </button>
                </div>

                <div className="col-md-12 col-sm-12">
                  <div className="mt-2">
                    Don't have an account?
                    <span className="ms-1">
                      <Link to="/register" style={{ textDecoration: "none" }}>
                        Register
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
