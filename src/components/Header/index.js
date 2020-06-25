import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import logo from '../../assets/images/ComVida.svg';
import { Container } from './styles';
import * as authAction from '../../store/modules/auth/actions';
import * as searchActions from '../../store/modules/search/actions';

function Header() {
  const dispatch = useDispatch();
  const signed = useSelector((state) => state.auth.signed);

  const signOut = () => {
    dispatch(authAction.singOut());
  };

  function handleMainState() {
    dispatch(searchActions.indexPageRequest(1, '0', '0'));
  }

  return (
    <Container>
      <Link to="/main" onClick={handleMainState}>
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

export default withRouter(Header);
