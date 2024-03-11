import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';


function Navbar() {
  //navbar navigation links
  return (
    <>
      <nav className="navbar navbar-expand-lg navigation sticky-top">
        <div className="container-fluid p-0">
          <button
            className="btn togglebtn d-block d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="nav-link px-2  ms-3 manage" href="#">
            <i className="fa-solid fa-book icon"></i>
            <b className="bold"> Book Management</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-5">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active navcontent me-5"
                  aria-current="page"
                >
                  Book List
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/authorlist" className="nav-link navcontent">
                  Author List
                </Link>
              </li>


            </ul>
           
          </div>
        </div>
      </nav>
     
    </>
  );
}

export default Navbar