import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddBook from "./AddBook";
import AddAuthor from "./AddAuthor";
import AuthorList from "./AuthorList";
import EditBook from "./EditBook";
import EditAuthor from "./EditAuthor";

const Sidebar = () => {
  const [id, setId] = useState(0);
  return (
    <>
      <div className="container-fluid p-0">
       
        <div className="col-12">
          <div className="row">
            <div className="col-lg-2 d-none d-lg-block col-sm-12 sidebar num  p-0">
              <hr />

              {/* navigation links */}
              <Link to="/" className="home nav-link ms-5 px-1">
                <i className="fa-solid fa-home icon"></i> Home
              </Link>
              <hr />
              <Link to="/addbook" className="book nav-link ms-5 px-2">
                <i className="fa-solid fa-file-pen icon"></i> Add book
              </Link>
              <hr />
              <Link to="/addauthor" className="author ms-5 nav-link px-1">
                <i className="fa-solid fa-user-pen icon"></i> Add Author
              </Link>
              <hr />
              
            </div>
            <div className="content col-lg-10  col-sm-12 p-0">
              <Routes>
                {/* route path */}
                <Route path="/" element={<Dashboard setId={setId}/>} />
                <Route path="/addbook" element={<AddBook />} />
                <Route path="/addauthor" element={<AddAuthor />} />
                <Route path="/authorlist" element={<AuthorList setId={setId} />} />
                <Route path="/editbook/:id" element={<EditBook id={id} />} />
                <Route path="/editauthor/:id" element={<EditAuthor id={id} />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
