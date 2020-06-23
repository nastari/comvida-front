import styled from 'styled-components';
import foto from '../../assets/images/top222.svg';

export const Container = styled.div`
  background: url(${foto}) no-repeat top right;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  img {
    height: 100px;
    margin-bottom: 10px;
  }

  a {
    margin-bottom: 10px;
    text-decoration:none;
}
  }

  div a {
    margin-right: 10px;
  }
`;
