import styled from 'styled-components';
import foto from '../../assets/images/top.svg';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url(${foto}) no-repeat top center;
  /* background-image: linear-gradient(90deg, #B100BD 10%,  pink 100%); */

  img {
    height: 50px;
    margin-left: 50px;
  }

  div {
    margin-right: 50px;
    display: flex;

    a {
      text-decoration: none;
      color: black;
      list-style: none;
      text-transform: uppercase;
      font-size: 14px;
      margin-right: 10px;
      font-weight: bold;
    }
  }

  @media (max-width: 600px) {
    img {
      margin-left: 0px;
    }

    div {
      margin-right: 0px;
    }
  }
`;
