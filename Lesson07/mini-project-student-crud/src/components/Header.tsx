import React from "react";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row  my-2">
          <div className="col-12 d-flex align-items-end border">
            <img
              src="https://devmaster.edu.vn/images/logo.png"
              alt="Devmaster Academy"
            />
            <h2 className="m-2">STUDENT MANAGEMENT SYSTEM</h2>
          </div>
        </div>
      </div>
    </header>
  );
}
