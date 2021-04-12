import { useFormik, ErrorMessage  } from 'formik';
import * as Yup from "yup";
import Button from "../Button"

import classes from "./form.module.css";

const validationSchema  = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Required'),
    mail: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });

const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            mail: "",
            comment: ""
        },
        validationSchema,
        onSubmit: values => {
            console.log(values)
        }
    })

    
    return (
        <form onSubmit={formik.handleSubmit} className={classes.form} >
            <div className={classes.formInputs}>
            <label htmlFor="name">
                <input type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name} placeholder="Անուն" />
                {formik.errors.name ? <div className={classes.error}>{`*${formik.errors.name}`}</div> : null}
            </label>
            <label htmlFor="mail">
                <input type="text" name="mail" id="mail" onChange={formik.handleChange} value={formik.values.mail}  placeholder="Էլ. փոստ" />
                {formik.errors.mail ? <div className={classes.error}>{`*${formik.errors.mail}`}</div> : null}
            </label>
            <textarea name="comment" id="comment" cols="30" rows="10" onChange={formik.handleChange} value={formik.values.comment} placeholder="Մեկնաբանություն"></textarea>
            </div>
            <Button classes={{ button: classes.formButton }}>ՈՒՂԱՐԿԵԼ</Button>
        </form>
    )

}

export default Form;