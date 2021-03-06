import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ResendConfirmationCode from "../ResendConfirmationCode";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import { signIn } from "../../../store/auth/action";
import classes from "./signInForm.module.css";

const validationSchema = Yup.object().shape({
  mail: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const SignInForm = (props) => {
  const [isResendConfirmationCode, setResendConfirmationCode] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      mail: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(signIn(values.mail, values.password));
        await history.push("/profile");

      } catch (err) {
        console.log(err.message);
        if (err.message === "UserNotConfirmedException") {
          setResendConfirmationCode(true);
        }
        throw err;
      }
    },
  });

  return (
    <div className={classes.section}>
      {isResendConfirmationCode ? (
        <ResendConfirmationCode
          show={props.show}
          handleClose={props.handleClose}
          userName={formik.values.mail}
        />
      ) : (
        <Modal show={props.show} handleClose={props.handleClose}>
          <span className={classes.close} onClick={props.handleClose}></span>
          <h4 className={classes.title}>Մուտք</h4>
          <form onSubmit={formik.handleSubmit} className={classes.form}>
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
      )}
    </div>
  );
};
export default SignInForm;
