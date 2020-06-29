import styled from 'styled-components';
import foto from '../../assets/images/top.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${foto}) no-repeat top center;

  h1 {
    margin-top: 50px;
    font-size: 32px;
    color: black;
    letter-spacing: -1px;
    margin-bottom: 30px;
  }

  @media (max-width: 678px) {
    h1 {
      max-width: 80%;
    }
  }
`;

export const SearchField = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  select {
    border: 1px solid #dadada;
    background: rgb(235, 230, 235);
    padding: 10px 10px 10px 20px;
    border-radius: 5px;
    width: 220px;
    height: 40px;
    margin-right: 10px;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;

    select {
      width: 100%;
    }
  }
`;

export const FormProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 80vh;

  @media (max-width: 678px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 80px;
    .view-desktop {
      display: none;
    }

    input,
    select,
    textarea,
    button {
      margin-bottom: 0px;
      margin-top: 10px;
    }
  }

  @media (min-width: 678px) {
    .view-phone {
      display: none;
    }
  }

  > div {
    height: 300px;
    border-radius: 5px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      margin-top: 10px;
    }

    img {
      border-radius: 5px;
    }
  }

  form.form-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > input,
    textarea,
    select {
      border: 0;
      background: rgb(235, 230, 235);
      padding: 10px 10px 10px 20px;
      border-radius: 5px;
      width: 300px;

      & + select,
      input {
        margin-bottom: 10px;
      }
    }

    button {
      margin-top: 10px;
    }
    textarea {
      height: 180px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`;
