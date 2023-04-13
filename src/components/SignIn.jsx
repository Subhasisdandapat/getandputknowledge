import React from "react";
import "./login.css";

const login = () => {
  return (
    <>
      <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
        <div className="login rounded">
          <h2 className="mb-3">Login</h2>
          <form className="needs-validation">
            <div className="form-group was-validated mb-2">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input type="email" className="form-control" required />
              <div className="invalid-feedback">Please enter your email</div>
            </div>
            <div className="form-group was-validated mb-2">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="Password" className="form-control" required />
              <div className="invalid-feedback">Please enter your password</div>
            </div>
            <div className="form-group was-validated mb-2">
              <input type="checkbox" className="form-chack-input" />
              <label htmlFor="check" className="form-check-lable">
                Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-success w-100 mt-2 ">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default login;
