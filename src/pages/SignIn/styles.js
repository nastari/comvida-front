import styled from 'styled-components';
import wall from '../../assets/images/yellow22.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: url(${wall}) no-repeat top right;

  svg {
    transform: 'scale(-2,2)';
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

export const SubmitArea = styled.div`
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;

  img {
    height: 350px;
    margin-left: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 20px;

    > input {
      border: 0;
      background: rgb(235, 230, 235);
      padding: 10px 10px 10px 20px;
      border-radius: 5px;
      width: 300px;

      & + input {
        margin-top: 10px;
      }
    }

    input:last-of-type {
      margin-bottom: 15px;
    }

    > a {
      margin-top: 10px;
      align-self: center;
    }
  }
`;

/* #08aeea
  #2af598 */
