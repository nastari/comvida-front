import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/images/ComVida.svg';
import { Container } from './styles';
import * as authAction from '../../store/modules/auth/actions';

function Header() {
  const dispatch = useDispatch();
  const signed = useSelector((state) => state.auth.signed);

  const signOut = () => {
    dispatch(authAction.singOut());
  };

  return (
    <Container>
      <Link to="/main">
        <img src={logo} alt="ComVida" />
      </Link>
      <div>
        {signed ? (
          <>
            <Link to="/editprofile"> perfil</Link>
            <Link to="/" onClick={signOut}>
              SAIR
            </Link>
          </>
        ) : (
          <>
            <Link to="/register">cadastrar</Link>
            <Link to="/login"> entrar</Link>
          </>
        )}
      </div>
    </Container>
  );
}

export default Header;
