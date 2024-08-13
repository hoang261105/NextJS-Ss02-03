import React from "react";

export default function B3() {
  return (
    <div className="form-login">
      <h1>Admin Login</h1>
      <form action="">
        <div className="username">
          <label htmlFor="">UserName</label> <br />
          <input type="text" placeholder="Enter your name" />
        </div>
        <br />
        <div className="pass-word">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label htmlFor="">Password</label> <br />
            <a href="" style={{ color: "green" }}>
              Forgot Password?
            </a>
          </div>
          <input type="password" placeholder="Enter your password" /> <br />
          <span style={{ color: "red" }}>Please enter your password</span>
        </div>
        <br />
        <div className="remember">
          <input type="checkbox" />
          <span>Keep me signed in</span>
        </div>
        <br />
        <div className="login">
          <button>Login</button>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <span>Or sign up with</span>
        </div>
        <br />
        <div className="list-button">
          <button className="button">
            <i className="fa-brands fa-google"></i>
            <span>Google</span>
          </button>
          <button className="button">
            <i className="fa-brands fa-facebook"></i>
            <span>Facebook</span>
          </button>
          <button className="button">
            <i className="fa-brands fa-apple"></i>
            <span>Apple</span>
          </button>
        </div>
        <br />
        <p style={{textAlign: "center"}}>
          Don't have an account? <a href="#" style={{color: "green"}}>Sign up here</a>
        </p>
      </form>
    </div>
  );
}
