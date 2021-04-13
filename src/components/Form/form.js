
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_REVIEWS, SET_PRODUCT_REVIEW } from "../../GraphQl/queries";
import Button from "../Button";
import classes from "./form.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(70, "Too Long!").required("Required"),
  mail: Yup.string().email("Invalid email").required("Required"),
});

const Form = ({rating, productId, handleReview}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      mail: "",
      comment: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const { loading, error, data, refetch } = useQuery(GET_PRODUCT_REVIEWS, {
    variables: { productId: productId },
  });

  const [setProductReview] = useMutation(SET_PRODUCT_REVIEW);


  console.log(data, 77777777)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setProductReview({ variables: { productId, name: formik.values.name, rating, review: formik.values.comment } });
        handleReview(rating, formik.values.name, formik.values.comment);
        refetch()
      }}
      className={classes.form}
    >
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
          {formik.errors.name ? (
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
          {formik.errors.mail ? (
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
      <Button classes={{ button: classes.formButton }}>ՈՒՂԱՐԿԵԼ</Button>
    </form>
  );
};

export default Form;
