import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { TextField, Button } from "@mui/material";
import toast from "react-hot-toast";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = ({ name, number }, actions) => {
    dispatch(addContact({ name, number }))
      .unwrap()
      .then(() => {
        toast.success("New contact add success");
      })
      .catch(() => {
        toast.error("New contact add error");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.wrap}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            as={TextField}
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
            fullWidth
          />
          <ErrorMessage className={css.error} name="name" as="span" />
        </div>
        <div className={css.wrap}>
          <label className={css.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            as={TextField}
            className={css.field}
            type="text"
            name="number"
            id={numberFieldId}
            fullWidth
          />
          <ErrorMessage className={css.error} name="number" as="span" />
        </div>

        <Button
          className={css.button}
          type="submit"
          variant="outlined"
          color="primary"
        >
          Add contact
        </Button>
      </Form>
    </Formik>
  );
}
