import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import ConfirmedException from "../ConfirmedException";
import { signUp } from "../../../store/auth/action";
import classes from "./signUpForm.module.css";

const validationSchema = Yup.object().shape({
  mail: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

const SignUpForm = (props) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mail: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(signUp(values.firstName, values.lastName, values.mail, values.password));
      setIsSignUp(false);
    },
  });

  return (
    <div className={classes.section}>
      {isSignUp ? (
        <Modal show={props.show} handleClose={props.handleClose}>
          <span className={classes.close} onClick={props.handleClose}></span>
          <h4 className={classes.title}>Գրանցում</h4>
          <form onSubmit={formik.handleSubmit} className={classes.form} autoComplete="off">
            <div className={classes.formInputs}>
              <label htmlFor="first-name" autoComplete="off">
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  placeholder="Անուն"
                />
                {formik.errors.firstName && formik.errors.touched ? (
                  <div className={classes.error}>{`*${formik.errors.firstName}`}</div>
                ) : null}
              </label>
              <label htmlFor="last-name">
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  placeholder="Ազգանուն"
                  autoComplete="off"
                />
                {formik.errors.lastName && formik.errors.touched ? (
                  <div className={classes.error}>{`*${formik.errors.lastName}`}</div>
                ) : null}
              </label>
              <label htmlFor="mail">
                <input
                  type="text"
                  name="mail"
                  id="mail"
                  onChange={formik.handleChange}
                  value={formik.values.mail}
                  placeholder="Էլ. փոստ"
                  autoComplete="off"
                />
                {formik.errors.mail && formik.errors.touched ? (
                  <div className={classes.error}>{`*${formik.errors.mail}`}</div>
                ) : null}
              </label>
              <label htmlFor="password">
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  placeholder="Գաղտնաբառ"
                  autoComplete="off"
                />
                {formik.errors.password && formik.errors.touched ? (
                  <div className={classes.error}>{`*${formik.errors.password}`}</div>
                ) : null}
              </label>
            </div>
            <Button
              classes={
                formik.isValid
                  ? { button: classes.authButton }
                  : { disabledButton: classes.disabledButton }
              }
            >
              ՈՒՂԱՐԿԵԼ
            </Button>
            <Button
              classes={
                formik.isValid
                  ? { button: classes.facebookButton }
                  : { disabledButton: classes.disabledButton }
              }
            >
              ՄՈՒՏՔ ԳՈՐԾԵԼ FACEBOOK-Ի ՄԻՋՈՑՈՎ
            </Button>
          </form>
        </Modal>
      ) : (
        <ConfirmedException
          show={props.show}
          handleClose={props.handleClose}
          userName={formik.values && formik.values.mail}
        />
      )}
    </div>
  );
};
export default SignUpForm;
