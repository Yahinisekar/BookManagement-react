import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik"; 
import * as Yup from "yup";


const EditBook = ({ id }) => {
  //using useNavigate to navigate  between pages
  const navigate = useNavigate();
  const [editData, setEditData] = useState(null);
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
    navigate("/");
  };
  const validationSchema = Yup.object().shape({
    book: Yup.string().required("Please enter Book Name"),
    author: Yup.string().required("Author name is required"),
    isbn: Yup.string().required("isbn is required"),

    dates: Yup.string().required("Publication date is required"),
  });


  return (
    //Form with all the fields that can be edited and a submit button
    <>
      {editData && (<Formik
        initialValues={editData}
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
                <ErrorMessage
                  name="author"
                  component="h6"
                  className="redText"
                />
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
              <label htmlFor="dates" className="col-sm-12 col-form-label">
                <span className="text-danger">*</span> Publication date:
              </label>
              <div className="col-sm-12">
                <Field
                  type="text"
                  className="form-control "
                  id="date"
                  name="dates"
                                  />
                <ErrorMessage name="dates" component="h6" className="redText" />
              </div>
            </div>
            <button type="submit" className="btn btn-success">
              Add Author
            </button>
          </Form>
        </div>
      </Formik>
      )}
    </>
  );
};

export default EditBook;
