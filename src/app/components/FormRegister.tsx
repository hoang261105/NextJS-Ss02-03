import React from "react";

export default function B4() {
  return (
    <div className="form-signup">
      <h1>Form Sign up</h1>
      <form action="">
        <div className="name">
          <label htmlFor="" className="title">Name</label> <br />
          <input type="text" placeholder="Name" className="value"/>
        </div>
        <br />
        <div className="name">
          <label htmlFor="" className="title">Email</label> <br />
          <input type="text" placeholder="Email" className="value"/>
        </div>
        <br />
        <div className="name">
          <label htmlFor="" className="title">Phone number</label> <br />
          <div className="item">
            <select className="choose">
              <option value="">US</option>
            </select>
            <input type="text" placeholder="Phone number" className="phone"/>
          </div>
        </div>
        <br />
        <div className="name">
          <label htmlFor="" className="title">Address</label> <br />
          <input type="text" className="value address" />
        </div>
        <br />
        <div className="select">
          <label htmlFor="" className="title">Skills</label> <br />
          <div className="divide">
            <div className="checkbox">
              <input type="checkbox" /> HTML <br />
              <input type="checkbox" /> UX Design <br />
              <input type="checkbox" /> CSS
            </div>
            <div className="checkbox">
              <input type="checkbox" /> Javascript <br />
              <input type="checkbox" /> ReactJS <br />
              <input type="checkbox" /> Java
            </div>
          </div>
        </div>
        <br />
        <div className="signup">
            <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  );
}
