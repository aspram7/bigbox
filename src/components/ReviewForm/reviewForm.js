import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_REVIEWS, SET_PRODUCT_REVIEW } from "../../GraphQl/queries";
import Button from "../Button";
import classes from "./reviewForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(70, "Too Long!").required("Required"),
  mail: Yup.string().email("Invalid email").required("Required"),
});

const ReviewForm = ({ rating, productId, handleReview }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      mail: "",
      comment: "",
    },
    validationSchema,
    onSubmit: (values, formik) => {
      setProductReview({
        variables: { productId, name: values.name, rating: rating || 0, review: values.comment },
      });
      handleReview(rating, values.name, values.comment);
      refetch();
      formik.resetForm();
    },
  });
  const { refetch } = useQuery(GET_PRODUCT_REVIEWS, {
    variables: { productId: productId },
  });

  const [setProductReview] = useMutation(SET_PRODUCT_REVIEW);

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <div className={classes.formInputs}>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Անուն"
          />
          {formik.errors.name && formik.errors.touched ? (
            <div className={classes.error}>{`*${formik.errors.name}`}</div>
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
          />
          {formik.errors.mail && formik.errors.touched ? (
            <div className={classes.error}>{`*${formik.errors.mail}`}</div>
          ) : null}
        </label>
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="10"
          onChange={formik.handleChange}
          value={formik.values.comment}
          placeholder="Մեկնաբանություն"
        ></textarea>
      </div>
      <Button
        classes={
          formik.isValid
            ? { button: classes.formButton }
            : { disabledButton: classes.disabledButton }
        }
      >
        ՈՒՂԱՐԿԵԼ
      </Button>
    </form>
  );
};

export default ReviewForm;
