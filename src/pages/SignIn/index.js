import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import family from '../../assets/images/familys.svg';
import { Container, SubmitArea } from './styles';
import Button from '../../components/Button';
import * as authActions from '../../store/modules/auth/actions';

function SignIn() {
  const dispatch = useDispatch();

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Cheque seu email!')
      .required('Email é importante.'),
    password: Yup.string()
      .min(6, 'Sua senha tem pelo menos 6 dígitos.')
      .required('A senha é importante.'),
  });

  return (
    <Container>
      <SubmitArea>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            dispatch(authActions.loginRequest(values));
          }}
          validationSchema={loginSchema}
        >
          <Form>
            <Field type="email" placeholder="Email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" placeholder="Senha" name="password" />
            <ErrorMessage name="password" component="div" />
            <Button type="submit">login</Button>
            <Link to="/forgot">Esqueci minha senha</Link>
          </Form>
        </Formik>
        <img src={family} alt="" />
      </SubmitArea>
      <Link to="/">Voltar</Link>
    </Container>
  );
}

export default SignIn;
