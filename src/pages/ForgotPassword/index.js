import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, SubmitArea } from './styles';
import Button from '../../components/Button';
import image from '../../assets/images/forgot.svg';
import * as userAction from '../../store/modules/user/actions';

function ForgotPassword() {
  const dispatch = useDispatch();
  const forgotSchema = Yup.object().shape({
    email: Yup.string()
      .email('Cheque seu email!')
      .required('Email é importante.'),
  });

  return (
    <Container>
      <SubmitArea>
        <Formik
          initialValues={{ email: '' }}
          onSubmit={(values) => {
            dispatch(userAction.forgotRequest(values));
          }}
          validationSchema={forgotSchema}
        >
          <Form>
            <h1>Redefinir senha</h1>
            <Field type="email" placeholder="Email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Button type="submit">ENVIAR EMAIL</Button>
          </Form>
        </Formik>
        <img src={image} alt="forgot" />
      </SubmitArea>
      <Link to="/">Voltar</Link>
    </Container>
  );
}

export default ForgotPassword;
