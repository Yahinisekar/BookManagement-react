import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddBook = () => {
  //using useNavigate  to redirect to the user page
  const navigate = useNavigate();
  //using useState to manage the state of the Field fields
  const [createData, setCreateData] = useState({
    book: "",
    author: "",
    isbn: "",
    date: "",
  });

 
  //post  request to add a new user using axios
  const handleSubmit = async (values) => {
    // e.preventDefault();
    try {
      const response = await axios.post(
        "https://65e896934bb72f0a9c4fd9f9.mockapi.io/users",
        values
      );
      console.log(response.data);
      navigate("/"); // Redirect to home page after successful creation
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
 
  const validationSchema = Yup.object().shape({
    book: Yup.string().required("Please enter Book Name"),
    author: Yup.string().required("Author name is required"),
    isbn: Yup.string().required("isbn is required"),

    date: Yup.string().required("Publication date is required"),
  });

  return (
    //Form with all the necessary fields for adding a new user
    <Formik
      initialValues={createData}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <div className="back">
        <Form
          className="container text-center userWidth"
          
        >
          <div className="row mb-5">
            <label
              htmlFor="book"
              className="col-sm-12 bookname col-form-label mt-5 p-3 "
            >
              <span className="text-danger">*</span> Book Name:
            </label>
            <div className="col-sm-12">
              <Field
                type="text"
                className="form-control"
                id="book"
                name="book"
                     />
              <ErrorMessage name="book" component="h6" className="redText" />
            </div>
            <label htmlFor="author" className="col-sm-12 col-form-label">
              <span className="text-danger">*</span> Author Name:
            </label>
            <div className="col-sm-12">
              <Field
                type="text"
                className="form-control"
                id="author"
                name="author"
                />
              <ErrorMessage name="author" component="h6" className="redText" />
            </div>
            <label htmlFor="isbn" className="col-sm-12 col-form-label">
              <span className="text-danger">*</span>ISBN number:
            </label>
            <div className="col-sm-12">
              <Field
                type="tel"
                className="form-control"
                id="isbn"
                name="isbn"
                 />
              <ErrorMessage name="isbn" component="h6" className="redText" />
            </div>
            <label htmlFor="date" className="col-sm-12 col-form-label">
              <span className="text-danger">*</span> Publication date:
            </label>
            <div className="col-sm-12">
              <Field
                type="date"
                className="form-control "
                id="date"
                name="date"
                 />
              <ErrorMessage name="date" component="h6" className="redText" />
            </div>
          </div>
          <button type="submit" className="btn btn-success">
            Create
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default AddBook;
