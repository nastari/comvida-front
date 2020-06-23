import React from 'react';
import Button from '../../components/Button';

import { Container } from './styles';

function Profile() {
  return (
    <Container>
      <img src="" alt="" />
      <div>
        <input type="text" name="name" />
        <input type="text" name="description" />
        <input type="text" name="uf" />
        <input type="text" name="city" />
        <input type="text" name="whatsapp" />
        <hr />
        <Button>POR PERFIL ONLINE</Button>
        <Button>DELETAR CONTA</Button>
      </div>
    </Container>
  );
}

export default Profile;
