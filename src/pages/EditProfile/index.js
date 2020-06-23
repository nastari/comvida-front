import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Container, FormProfile } from './styles';
import userfoto from '../../assets/images/user.png';
import * as userActions from '../../store/modules/user/actions';

function EditProfile() {
  const dispatch = useDispatch();
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState('0');
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

  function handleSelectUf(e) {
    const uf = e.target.value;
    setSelectedUf(uf);
  }

  function handleSelectCity(e) {
    const city = e.target.value;
    setSelectedCity(city);
  }

  const postSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, 'Pelo menos 4 caracteres.')
      .required('Seu nome é importante'),
    description: Yup.string()
      .min(50, 'Coloque pelo menos 50 caracteres.')
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
            <img src={userfoto} alt="" />

            <Formik
              initialValues={{}}
              onSubmit={(values) => {
                if (user.online === false) {
                  values.online = true;
                  if (selectedUf === '0' || selectedCity === '0') {
                    toast.error('Entre com sua localização');
                    return;
                  }
                } else {
                  values.online = false;
                }
                dispatch(userActions.updateRequest(values));
              }}
            >
              <Form>
                {user.online ? (
                  <Button type="submit" color="#F55AC1" width="500">
                    RETIRAR PERFIL ONLINE
                  </Button>
                ) : (
                  <Button type="submit" color="#00A410" width="500">
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
                <Button type="submit" color="rgb(220,40,90)" width="500">
                  DELETAR CONTA
                </Button>
              </Form>
            </Formik>
          </div>

          <Formik
            initialValues={{
              name: user.name || '',
              description: user.description || '',
              uf: user.uf || '',
              city: user.city || '',
              whatsapp: user.whatsapp || '',
            }}
            onSubmit={(values) => {
              values.uf = selectedUf;
              values.city = selectedCity;
              if (values.uf === '0' || values.city === '0') {
                toast.error('Entre com sua localização');
                return;
              }
              console.log(values.uf);
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
                placeholder="Conte um pouco sobre você e se precisas de ajuda. "
              />
              <ErrorMessage name="description" component="div" />
              <Field
                as="select"
                onChange={handleSelectUf}
                value={selectedUf}
                type="text"
                name="uf"
                placeholder="Seu estado"
              >
                <option value="0">Selecione seu estado</option>
                {ufs.map((uf) => (
                  <option key={uf} value={uf}>
                    {uf}
                  </option>
                ))}
              </Field>

              <Field
                as="select"
                type="text"
                name="city"
                value={selectedCity}
                placeholder="Sua cidade"
                onChange={handleSelectCity}
              >
                <option value="0">Selecione a cidade</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </Field>
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
