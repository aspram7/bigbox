import React from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { RESEND_CONFIRMATION_CODE } from "../../../GraphQl/queries";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import classes from "./resendConfirmationCode.module.css";

const ConfirmedException = (props) => {
  const state = useSelector((state) => state.signUpReducer);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: async (values) => {
      try {
        // await dispatch(signUpConfirmCode(props.userName, values.code, state.signUp.userId));
        await setResendConfirmationCode({
          variables: {
            username: props.userName,
          },
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  });

  const [setResendConfirmationCode] = useMutation(RESEND_CONFIRMATION_CODE);

  return (
    <div className={classes.section}>
      <Modal show={props.show} handleClose={props.handleClose}>
        <span className={classes.close} onClick={props.handleClose}></span>
        <h4 className={classes.title}>Մուտք</h4>
        <p className={classes.resetPassword}>Դուք կստանաք կոդը։ </p>
        <form onSubmit={formik.handleSubmit} className={classes.form} autoComplete="off">
          <div className={classes.formInputs}>
            <label htmlFor="mail">
              <input
                type="text"
                name="code"
                id="code"
                onChange={formik.handleChange}
                value={formik.values.code}
                placeholder="Մուտքագրեք կոդը"
              />
              {formik.errors.code && formik.errors.touched ? (
                <div className={classes.error}>*Կոդը սխալ է</div>
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
            ՀԱՍՏԱՏԵԼ
          </Button>
        </form>
      </Modal>
    </div>
  );
};
export default ConfirmedException;
