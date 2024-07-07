import styles from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={(values, action) => {
        dispatch(
          addContact({
            id: Date.now(),
            ...values,
          })
        );
        action.resetForm();
      }}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.form}>
        <div className={styles.fieldWrapper}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={styles.field}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={styles.fieldWrapper}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={styles.field}
            type="tel"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage name="number" component="span" />
        </div>
        <button className={styles.btnForm} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
