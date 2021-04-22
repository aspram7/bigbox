import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import classes from "./signInForm.module.css";

const validationSchema = Yup.object().shape({
  mail: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const SignInForm = (props) => {
  const formik = useFormik({
    initialValues: {
      mail: "",
      password: "",
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
            <label htmlFor="password">
              <input
                type="password"
                name="password"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Գաղտնաբառ"
              />
              {formik.errors.password && formik.errors.touched ? (
                <div className={classes.error}>{`*${formik.errors.password}`}</div>
              ) : null}
            </label>
          </div>
          <p className={classes.forgetPassword}>Մոռացե՞լ եք գաղտնաբառը</p>
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
        {/* <a href="" className={classes.signUp} onClick={onSignUpForm}>
          Գրանցվել
        </a> */}
        <p className={classes.signUp} onClick={props.onSignUpForm}>
          Գրանցվել
        </p>
      </Modal>
    </div>
  );
};
export default SignInForm;
