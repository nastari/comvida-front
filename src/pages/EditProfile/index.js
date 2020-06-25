import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Container, FormProfile } from './styles';
import * as userActions from '../../store/modules/user/actions';
import AvatarInput from './AvatarInput';

function EditProfile() {
  const dispatch = useDispatch();

  const [ufs, setUfs] = useState([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('0');

  const user = useSelector((state) => state.user.profile);

  useEffect(() => {
    axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then((response) => {
        const ufNames = response.data.map((uf) => {
          return uf.sigla;
        });

        setUfs(ufNames);
      });
  }, []);
  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        const cityNames = response.data.map((city) => city.nome);
        setCities(cityNames);
      });
  }, [selectedUf]);

  useEffect(() => {
    setSelectedUf(user.uf);
    setSelectedCity(user.city);
  }, [user]);

  const postSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, 'Pelo menos 4 caracteres.')
      .max(32, 'No máximo 32 caracteres.')
      .required('Seu nome é importante'),
    description: Yup.string()
      .min(50, 'Coloque pelo menos 50 caracteres.')
      .max(520, 'Máximo 520 caracteres.')
      .required('Sua descrição é importante'),
    whatsapp: Yup.string()
      .min(8, 'Coloque uma senha de pelo menos 6 dígitos.')
      .required('Insira seu Whats App.'),
  });

  return (
    <>
      <Header />
      <Container>
        <h1> Coloque seu perfil online preenchendo aqui. :)</h1>
        <FormProfile>
          <div>
            <AvatarInput />

            <Formik
              initialValues={{}}
              onSubmit={(values) => {
                if (
                  !user.avatar ||
                  !user.uf ||
                  !user.city ||
                  user.uf === '0' ||
                  user.city === '0'
                ) {
                  toast.error('Coloque seu foto e a localidade');
                  return;
                }
                if (user.online === false) {
                  values.online = true;
                } else {
                  values.online = false;
                }
                dispatch(userActions.updateRequest(values));
              }}
            >
              <Form>
                {user.online ? (
                  <Button type="submit" color="rgb(2,2,250)" width="500">
                    RETIRAR PERFIL ONLINE
                  </Button>
                ) : (
                  <Button type="submit" color="rgb(9,199,35)" width="500">
                    POR PERFIL ONLINE
                  </Button>
                )}
              </Form>
            </Formik>
            <Formik
              initialValues={{}}
              onSubmit={(values) => {
                dispatch(userActions.updateRequest(values));
              }}
            >
              <Form>
                <Button type="submit" color="rgb(150,20,40,1)" width="500">
                  DELETAR CONTA
                </Button>
              </Form>
            </Formik>
          </div>

          <Formik
            initialValues={{
              name: user.name || '',
              description: user.description || '',
              uf: user.uf || '0',
              city: user.city || '0',
              whatsapp: user.whatsapp || '',
            }}
            onSubmit={(values) => {
              values.city = selectedCity;
              values.uf = selectedUf;
              if (
                !values.city ||
                !values.uf ||
                values.city === '0' ||
                values.city === '0'
              ) {
                toast.error('Preencha sua localização');
                return;
              }
              console.log(values);
              dispatch(userActions.updateRequest(values));
            }}
            validationSchema={postSchema}
          >
            <Form className="form-main">
              <Field type="text" name="name" placeholder="Seu nome" />
              <ErrorMessage name="name" component="div" />
              <Field
                component="textarea"
                type="text"
                name="description"
                placeholder="Conte um pouco sobre você e sua necessidade!"
              />
              <ErrorMessage name="description" component="div" />

              <Field
                as="select"
                name="uf"
                value={selectedUf}
                onChange={(e) => {
                  setSelectedUf(e.target.value);
                  setSelectedCity('0');
                }}
              >
                <option value="0">Selecione seu estado</option>
                {ufs.map((uf) => (
                  <option value={uf}>{uf}</option>
                ))}
              </Field>
              <ErrorMessage name="uf" component="div" />
              <Field
                as="select"
                name="city"
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                }}
              >
                <option value="0">Selecione sua cidade</option>
                {cities.map((city) => (
                  <option value={city}>{city}</option>
                ))}
              </Field>
              <ErrorMessage name="city" component="div" />

              <Field type="text" name="whatsapp" placeholder="Seu WhatsApp!" />
              <ErrorMessage name="whatsapp" component="div" />
              <Button type="submit" color="rgb(50,50,50)" width="500">
                ATUALIZAR PERFIL
              </Button>
            </Form>
          </Formik>
        </FormProfile>
      </Container>
    </>
  );
}

export default EditProfile;
