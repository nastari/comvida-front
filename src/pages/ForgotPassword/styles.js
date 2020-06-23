import styled from 'styled-components';
import wall from '../../assets/images/yellow22.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${wall}) no-repeat top right;
  a {
    color: black;
    text-decoration: none;
  }

  h1 {
    margin-bottom: 20px;
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
      border: 1px solid black;
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
