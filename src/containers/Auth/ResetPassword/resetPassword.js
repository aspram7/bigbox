import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import classes from "./resetPassword.module.css";

const validationSchema = Yup.object().shape({
  mail: Yup.string().email("Invalid email").required("Required"),
});

const SignInForm = (props) => {
  const formik = useFormik({
    initialValues: {
      mail: "",
    },
    validationSchema,
    onSubmit: (values, formik) => {},
  });
  console.log(props);
  return (
    <div className={classes.section}>
      <Modal show={props.show} handleClose={props.handleClose}>
        <span className={classes.close} onClick={props.handleClose}></span>
        <h4 className={classes.title}>Մուտք</h4>
        <p className={classes.resetPassword}>Դուք կստանաք գաղտնաբառը վերականգնելու նամակ։ </p>
        <form onSubmit={formik.handleSubmit} className={classes.form} autoComplete="off">
          <div className={classes.formInputs}>
            <label htmlFor="mail">
              <input
                type="text"
                name="mail"
                id="mail"
                onChange={formik.handleChange}
                value={formik.values.mail}
                placeholder="Էլ. փոստ"
              />
              {formik.errors.mail && formik.errors.touched ? (
                <div className={classes.error}>{`*${formik.errors.mail}`}</div>
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
            ՎԵՐԱԿԱՆԳՆԵԼ
          </Button>
        </form>
        <p className={classes.signUp} onClick={props.handleClose}>
          Չեղարկել
        </p>
      </Modal>
    </div>
  );
};
export default SignInForm;
