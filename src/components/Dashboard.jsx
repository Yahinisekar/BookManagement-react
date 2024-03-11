import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({setId}) => {
  const [users, setUsers] = useState([]);
  
 
  const navigate = useNavigate();
  const [deleteData, setDeleteData] = useState([]);
  useEffect(() => {
    //using axios to get data from the api
    axios
      .get("https://65e896934bb72f0a9c4fd9f9.mockapi.io/users")
      .then((res) => setUsers(res.data));
  }, [deleteData]);
      const handleEdit = (id) => {
        setId(id)
        navigate(`/editbook/${id}`);
      };

  //delete function axios
  const handleDel = (id) => {
    axios
      .delete(`https://65e896934bb72f0a9c4fd9f9.mockapi.io/users/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    //To display the user data in cards
    <div className="container">
      <h3 className="text-center heading">Book List</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {users.map((item, index) => (
          <div className="col" key={index}>
            <div className="card h-100 mt-3">
              <div className="card-body">
                <h5 className="card-title text-center">{item.book}</h5>
                <hr />
                <p className="card-text text-center">
                  <b>Author:</b> {item.author}
                </p>
                <p className="card-text text-center">
                  <b>ISBN number:</b> {item.isbn}
                </p>
                <p className="card-text text-center">
                  <b>Publication Date:</b> {item.dates}
                </p>
              </div>
              <div className="d-flex justify-content-around">
                <button
                  className="btn new mb-3"
                  onClick={() => {
                    handleEdit(item.id);
                  }}
                >
                  <i
                    className="fa-solid fa-pen-to-square icon3"
                    style={{ color: "#42ae8d" }}
                  ></i>{" "}
                  <span style={{ color: "#42ae8d" }}>Edit</span>
                </button>
                <button
                  className="btn new mb-3"
                  onClick={() => {
                    handleDel(item.id);
                  }}
                >
                  <i
                    className="fa-solid fa-trash icon3"
                    style={{ color: "red" }}
                  ></i>{" "}
                  <span style={{ color: "red" }}>Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
         </div>
  );
};

export default Dashboard;
