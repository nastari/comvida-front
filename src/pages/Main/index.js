import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import {
  Container,
  SearchField,
  ProfilesField,
  Profile,
  Pagination,
} from './styles';
import findSomeone from '../../assets/images/search.svg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import { store } from '../../store/index';
import * as searchActions from '../../store/modules/search/actions';

function Main() {
  const dispatch = useDispatch();

  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  const [page, setPage] = useState(1);

  const profiles = useSelector((state) => state.search.profiles);
  // const loading = useSelector((state) => state.search.loading);
  const { loading } = store.getState().search;

  function handleSubmitSearch() {
    setPage(1);
    dispatch(searchActions.indexRequest(selectedUf, selectedCity));
  }

  useEffect(() => {
    dispatch(searchActions.indexPageRequest(page, selectedUf, selectedCity));
  }, [page]);

  // ---
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
  // ---

  useEffect(() => {
    setSelectedCity('0');
  }, [selectedUf]);

  return (
    <>
      <Header />
      <Container>
        <SearchField>
          <select
            name="uf"
            id="uf"
            value={selectedUf}
            onChange={handleSelectUf}
          >
            <option value="0">Selecione o estado</option>
            {ufs &&
              ufs.map((uf) => (
                <option key={uf} value={uf}>
                  {uf}
                </option>
              ))}
          </select>

          <select
            name="city"
            id="city"
            value={selectedCity}
            onChange={handleSelectCity}
          >
            <option value="0">Selecione a cidade</option>
            {cities &&
              cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
          <Button onClick={handleSubmitSearch}>Procurar</Button>
        </SearchField>
        <h1 className="slogan">Pessoas precisando de você!</h1>
        {loading ? (
          <div className="loading">
            <h2>Carregando</h2>
            <FaSpinner size={24} />
          </div>
        ) : (
          <>
            <ProfilesField>
              {profiles.length ? (
                profiles.map((user) => (
                  <Profile key={user.id}>
                    <img src={user.avatar.url} alt="usuario" />
                    <div className="break-description">
                      <h1>{user.name}</h1>
                      <h2>
                        {user.city} - {user.uf}
                      </h2>
                      <p> {user.description} </p>

                      <a href={user.contact}>
                        <Button>AJUDAR</Button>
                      </a>
                    </div>
                  </Profile>
                ))
              ) : (
                <div className="find">
                  <h1 className="brnodisplay">
                    Ainda não tem ninguém aqui não!
                  </h1>

                  <h2 className="brnodisplay">
                    Mas você pode ajudar divulgando pra alguém que precisa! Que
                    tal?
                  </h2>
                  <img
                    src={findSomeone}
                    alt="findSomeone"
                    className="brnodisplay"
                  />
                </div>
              )}
            </ProfilesField>
            <Pagination>
              <>
                {page === 1 ? (
                  <>
                    <button type="button">{page}</button>
                    <button type="button" onClick={() => setPage(page + 1)}>
                      {page + 1}
                    </button>
                    <button type="button" onClick={() => setPage(page + 2)}>
                      {page + 2}
                    </button>
                  </>
                ) : (
                  <>
                    {page > 2 && !profiles.length ? (
                      <button type="button" onClick={() => setPage(1)}>
                        1
                      </button>
                    ) : null}
                    <button type="button" onClick={() => setPage(page - 1)}>
                      {page - 1}
                    </button>
                    <button type="button" onClick={() => setPage(page)}>
                      {page}
                    </button>
                    <button type="button" onClick={() => setPage(page + 1)}>
                      {page + 1}
                    </button>
                  </>
                )}
              </>
            </Pagination>
          </>
        )}
        <Footer />
      </Container>
    </>
  );
}

export default Main;
