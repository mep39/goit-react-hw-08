import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from "formik";
import { useId } from 'react';
import { logIn } from '../../../redux/auth/operations';
import css from './LoginForm.module.css';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


export default function LoginForm()  {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(logIn(values)).unwrap()
    .then(() => {
      
      toast.success('login success');
    })
    .catch(() => {
      toast.error('login error');
    });
    action.resetForm();
  };

    const emailId = useId();
    const passwordId = useId();

  return (
    <Formik 
    initialValues={{
      email: "",
      password: "",
    }}
    onSubmit={handleSubmit}
    >
      <Form className={css.form}  autoComplete='off'>
             
        <label className={css.label} htmlFor= {emailId} >
          Email 
          <Field className={css.field} type='email' name='email' id={emailId} />
        </label>
        <label className={css.label} htmlFor={passwordId}>
          Password
        <Field className={css.field} type='password' name='password' id={passwordId} />
        </label>
       
        <Button type="submit" variant="contained" color="primary">
             Log In
           </Button>
        <div className={css.registerCont}>
          <p>or</p>
          <Link to="/register" className={css.textRegister} >
            Registration
          </Link>
        </div>
      </Form>
    </Formik>
  );
}