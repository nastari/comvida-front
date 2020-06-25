import styled from 'styled-components';

export const Container = styled.div`
  label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
      opacity: 0.7;
    }

    input {
      display: none;
    }

    img {
      transition: border-radius 0.5s;
      height: 300px;
      width: 300px;
    }

    img:hover {
      border-radius: 7%;
    }
  }
`;
