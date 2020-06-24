import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  SearchField,
  ProfilesField,
  Profile,
  Pagination,
} from './styles';
import fotouser from '../../assets/images/user.png';
import findSomeone from '../../assets/images/search.svg';
import Header from '../../components/Header';
import Button from '../../components/Button';
import * as searchActions from '../../store/modules/search/actions';

function Main() {
  const dispatch = useDispatch();

  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  const [page, setPage] = useState(1);

  const profiles = useSelector((state) => state.search.profiles);

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
        <h1>Pessoas precisando de você!</h1>
        <ProfilesField>
          {profiles.length ? (
            profiles.map((user) => (
              <Profile key={user.id}>
                <img src={fotouser} alt="usuario" />
                <div>
                  <h1>{user.name}</h1>
                  <h2>
                    {user.city} - {user.uf}
                  </h2>
                  <p> {user.description} </p>

                  <a href={user.contact}>
                    <Button color="blue">AJUDAR</Button>
                  </a>
                </div>
              </Profile>
            ))
          ) : (
            <div className="find">
              <h1>Ainda não tem ninguém aqui não !</h1>
              <h2>
                Mas você pode ajudar divulgando pra alguém que precisa! Que tal?
              </h2>
              <img src={findSomeone} alt="findSomeone" />
            </div>
          )}
        </ProfilesField>
        <Pagination>
          {profiles.length ? (
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
          ) : (
            <> </>
          )}
        </Pagination>
      </Container>
    </>
  );
}

export default Main;
