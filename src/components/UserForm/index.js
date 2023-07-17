import React, { Component } from "react";
import { Formik } from "formik";
import styles from "./UserForm.module.css";
import {AiOutlineCloudUpload} from 'react-icons/ai'
import { toast } from "react-toastify";
export default class UserForm extends Component {
  initialValues = { fullName: "", email: "", password: "", photo: null };
  constructor() {
    super();
    this.handleValidate = this.handleValidate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleValidate(values) {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
      toast.error(errors.email);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.fullName) {
      errors.fullName = "Full name is required";
      toast.error(errors.fullName);
    }
    if (!values.password) {
      errors.password = "Password is required";
      toast.error(errors.password);
    }
    if (!values.photo) {
      errors.photo = "Photo is required";
      toast.error(errors.photo);
    }
    return errors;
  }
  handleSubmit(values, options) {
    options.resetForm();
    this.props.addUser(values);
  }
  handleFileChange(event, setFieldValue) {
    const photo = URL.createObjectURL(event.target.files[0]);
    setFieldValue("photo", photo);
  }
  render() {
    const renderComponent = (params) => {
      console.log(params);

      return (
        <>
          <h3 className={styles["form-title"]}>Create an account</h3>
          <form className={styles["user-form"]} onSubmit={params.handleSubmit}>
            <input
              placeholder="Fullname"
              className={styles["user-input"]}
              type="text"
              name="fullName"
              onChange={params.handleChange}
              value={params.values.fullName}
            />
            <input
              placeholder="Email"
              className={styles["user-input"]}
              type="email"
              name="email"
              onChange={params.handleChange}
              value={params.values.email}
            />
            {params.errors.email && params.email && params.errors.email}
            <input
              placeholder="Password"
              className={styles["user-input"]}
              type="password"
              name="password"
              onChange={params.handleChange}
              value={params.values.password}
            />
            <label id={styles["user-label"]} htmlFor="photo">
             <AiOutlineCloudUpload size={30}  /> Upload your profile photo
            </label>
            <input
              className={styles["user-input"]}
              type="file"
              id="photo"
              name="photo"
              onChange={(event) =>
                this.handleFileChange(event, params.setFieldValue)
              }
            />

            <button
              className={styles["user-btn"]}
              type="submit"
              disabled={params.isSubmitting}
            >
              Create an account
            </button>
          </form>{" "}
        </>
      );
    };
    return (
      <Formik
        //  validationSchema={Yup.object({
        //    firstName: Yup.string()
        //      .max(15, 'Must be 15 characters or less')
        //      .required('Required'),
        //    lastName: Yup.string()
        //      .max(20, 'Must be 20 characters or less')
        //      .required('Required'),
        //    email: Yup.string()
        //      .email('Invalid email address')
        //      .required('Required'),
        //    acceptedTerms: Yup.boolean()
        //      .required('Required')
        //      .oneOf([true], 'You must accept the terms and conditions.'),
        //    jobType: Yup.string()
        //      .oneOf(
        //        ['designer', 'development', 'product', 'other'],
        //        'Invalid Job Type'
        //      )
        //      .required('Required'),
        //  })}
        initialValues={this.initialValues}
        validate={this.handleValidate}
        onSubmit={this.handleSubmit}
      >
        {renderComponent}
      </Formik>
    );
  }
}
