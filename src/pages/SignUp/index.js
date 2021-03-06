import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, SubmitArea } from './styles';
import signup from '../../assets/images/signup.svg';
import Button from '../../components/Button';
import * as userActions from '../../store/modules/user/actions';

function SignUp() {
  const dispatch = useDispatch();

  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, 'Coloque uma nome de pelo menos 4 dígitos.')
      .max(32, 'No máximo 32 caracteres.')
      .required('Seu nome é importante'),
    email: Yup.string()
      .email('Coloque um email válido')
      .required('Seu email é importante.'),
    password: Yup.string()
      .min(6, 'Coloque uma senha de pelo menos 6 dígitos.')
      .required('Uma senha é importante'),
    confirm: Yup.string().oneOf(
      [Yup.ref('password')],
      'Sua senha não esta coincidindo.'
    ),
  });

  const [Try, setTry] = useState(false);

  return (
    <Container>
      {Try ? <Redirect to="/login" /> : null}
      <SubmitArea>
        <img src={signup} alt="" className="brnodisplay" />
        <Formik
          initialValues={{ name: '', email: '', password: '', confirm: '' }}
          onSubmit={(values) => {
            dispatch(userActions.registerRequest(values));
            setTry(true);
          }}
          validationSchema={registerSchema}
        >
          <Form>
            <Field type="text" placeholder="Nome" name="name" />
            <ErrorMessage name="name" component="div" />

            <Field type="email" placeholder="Email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" placeholder="Senha" name="password" />
            <ErrorMessage name="password" component="div" />
            <Field
              type="password"
              placeholder="Confirme sua senha"
              name="confirm"
            />
            <ErrorMessage name="confirm" component="div" />
            <Button type="submit">Cadastrar</Button>
          </Form>
        </Formik>
      </SubmitArea>
      <Link to="/"> Voltar</Link>
    </Container>
  );
}

export default SignUp;
