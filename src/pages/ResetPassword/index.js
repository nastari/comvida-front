import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, SubmitArea } from './styles';
import Button from '../../components/Button';
import * as userAction from '../../store/modules/user/actions';

function ResetPassword() {
  const dispatch = useDispatch();
  const resetSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Coloque uma senha de pelo menos 6 dígitos.')
      .required('Uma senha é importante'),
    confirm: Yup.string().oneOf(
      [Yup.ref('password')],
      'Sua senha não está coincidindo.'
    ),
  });

  const isForgot = useSelector((state) => state.user.isForgot);

  return (
    <Container>
      {!isForgot ? <Redirect to="/login" /> : null}
      <h1>Insira sua nova senha!</h1>
      <SubmitArea>
        <Formik
          initialValues={{ password: '', confirm: '' }}
          onSubmit={(values) => {
            dispatch(userAction.resetRequest(values.password));
          }}
          validationSchema={resetSchema}
        >
          <Form>
            <Field type="text" placeholder="Nova senha" name="password" />
            <ErrorMessage name="password" component="div" />
            <Field
              type="text"
              placeholder="Confirme sua nova senha"
              name="confirm"
            />
            <ErrorMessage name="confirm" component="div" />
            <Button type="submit">Confirmar nova senha</Button>
          </Form>
        </Formik>
      </SubmitArea>
    </Container>
  );
}

export default ResetPassword;
