import { Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Registration success");
      })
      .catch(() => {
        toast.error("Registration error");
      });
    action.resetForm();
  };

  const userNameId = useId();
  const emailId = useId();
  const passwordId = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label} htmlFor={userNameId}>
          Username
          <Field
            className={css.field}
            type="text"
            name="name"
            id={userNameId}
          />
        </label>
        <label className={css.label} htmlFor={emailId}>
          Email
          <Field className={css.field} type="email" name="email" id={emailId} />
        </label>
        <label className={css.label} htmlFor={passwordId}>
          Password
          <Field
            className={css.field}
            type="password"
            name="password"
            id={passwordId}
          />
        </label>
        <Button type="submit" variant="contained" color="primary">
          Registration
        </Button>
      </Form>
    </Formik>
  );
}
