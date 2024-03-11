import React from 'react'
import { Link } from 'react-router-dom';

const OffCanvas = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
              <div className="offcanvas-header">
                  {/* sidebar for navlink */}
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Sidebar
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
              <div className="offcanvas-body background">
                  {/* link to home page */}
          <Link to="/" className="home nav-link ms-5 px-1">
            <i className="fa-solid fa-home icon"></i> Home
          </Link>
                  <hr />
                  {/* link to add book page */}
          <Link to="/addbook" className="book nav-link ms-5 px-2">
            <i className="fa-solid fa-file-pen icon"></i> Add book
          </Link>
                  <hr />
                  {/* link to addauthor page */}
          <Link to="/addauthor" className="author ms-5 nav-link px-1">
            <i className="fa-solid fa-user-pen icon"></i> Add Author
          </Link>
        </div>
      </div>
    </>
  );
}

export default OffCanvas