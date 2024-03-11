import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditAuthor = ({id}) => {
    const [editData, setEditData] = useState(null);
    const navigate =useNavigate();
  //using useEffect to rerender  the component when data is changed
  useEffect(() => {
    //using axios to get data from the api
    axios
      .get(`https://65e896934bb72f0a9c4fd9f9.mockapi.io/users/${id}`)
      .then((res) => setEditData(res.data))
      .catch((err) => console.log(err));
  }, []);

  //function to handle changes in the inputs
  const handleSubmit = async (values) => {
    // To prevent rerender
    // e.preventDefault();
    await axios
      .put(`https://65e896934bb72f0a9c4fd9f9.mockapi.io/users/${id}`, values)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
    navigate("/authorlist");
  };

  const validationSchema = Yup.object().shape({
    author: Yup.string().required("Please enter Author Name"),
    dates: Yup.string().required("Dob is required"),
    book: Yup.string().required("Book name is required"),
    description: Yup.string().required("Description is required"),
  });

  return (
    //Form with all the necessary fields for adding a new user
    <>
      {editData && (
        <Formik
          initialValues={editData}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <div className="back">
            <Form
              className="container text-center userWidth"
              // style={{ width: "30rem" }}
            >
              <div className="row mb-5">
                <label
                  htmlFor="author"
                  className="col-sm-12 bookname col-form-label mt-5 p-3"
                >
                  Author Name:
                </label>
                <div className="col-sm-12">
                  <Field
                    type="text"
                    className="form-control"
                    id="new"
                    name="author"
                    // value={createData.name}
                    // onChange={handleChange}
                  />
                  <ErrorMessage
                    name="author"
                    component="h6"
                    className="redText"
                  />
                </div>
                <label htmlFor="dates" className="col-sm-12 col-form-label">
                  Date of Birth:
                </label>
                <div className="col-sm-12">
                  <Field
                    type="text"
                    className="form-control"
                    id="date"
                    name="dates"
                    // value={createData.date}
                    // onChange={handleChange}
                  />
                  <ErrorMessage
                    name="dates"
                    component="h6"
                    className="redText"
                  />
                </div>
                <label htmlFor="book" className="col-sm-12 col-form-label">
                  Book Name:
                </label>
                <div className="col-sm-12">
                  <Field
                    type="text"
                    className="form-control"
                    id="book"
                    name="book"
                    // value={createData.book}
                    // onChange={handleChange}
                  />
                  <ErrorMessage
                    name="book"
                    component="h6"
                    className="redText"
                  />
                </div>
                <label
                  htmlFor="description"
                  className="col-sm-12 col-form-label"
                >
                  Biography:
                </label>
                <div className="col-sm-12">
                  <Field
                    as="textarea"
                    className="form-control"
                    id="description"
                    name="description"
                    // value={createData.description}
                    // onChange={handleChange}
                  />
                  <ErrorMessage
                    name="description"
                    component="h6"
                    className="redText"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-success">
                Create
              </button>
            </Form>
          </div>
        </Formik>
      )}
    </>
  );
};

export default EditAuthor;
