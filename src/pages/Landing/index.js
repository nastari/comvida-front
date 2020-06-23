import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import logo from '../../assets/images/ComVida.svg';
import Button from '../../components/Button';

function Landing() {
  const signed = useSelector((state) => state.auth.signed);
  return (
    <Container>
      <img src={logo} alt="ComVida" />

      {!signed ? (
        <>
          <Link to="/main">
            <Button width={250}>Quero ajudar</Button>
          </Link>
          <Link to="/register">
            <Button>quero cadastrar</Button>
          </Link>
          <Link to="/login">
            <Button>LOGIN</Button>
          </Link>
        </>
      ) : (
        <>
          <Link to="/main">
            <Button width={250}>ENTRAR</Button>
          </Link>
        </>
      )}
    </Container>
  );
}

export default Landing;
