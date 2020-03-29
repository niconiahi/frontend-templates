import * as yup from 'yup';

export default yup.object().shape({
  password: yup.string().required('Este campo es requerido'),
  username: yup.string().required('Este campo es requerido'),
});
