import styled from 'styled-components';
import wall from '../../assets/images/yellow22.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${wall}) no-repeat top right;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const SubmitArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 92vh;

  form {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 20px;

    > input {
      /* border: 1px solid black; */
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
  }

  > img {
    margin-left: 20px;
    height: 350px;
  }
`;
