import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

// styles
import { Form } from './styled';

// schema
import LoginFormSchema from './schema';

// store
import { loginRequest } from 'modules/session/actions';

const initialValues = {
  username: '',
  password: '',
};

const LoginForm = () => {
  // lib hooks
  const dispatch = useDispatch();

  // handlers
  const handleOnSubmit = (values) => {
    const { username, password } = values;

    dispatch(loginRequest(username, password));
  };

  // lib hooks
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: LoginFormSchema,
    onSubmit: handleOnSubmit,
  });

  // constants
  const { username, password } = values;

  return (
    <Form onSubmit={handleSubmit}>
      <input name="username" values={username} onChange={handleChange} />
      <span>{errors && errors.username}</span>

      <input name="password" values={password} onChange={handleChange} />
      <span>{errors && errors.password}</span>

      <button type="submit">Iniciar sesion</button>
    </Form>
  );
};

export default LoginForm;
