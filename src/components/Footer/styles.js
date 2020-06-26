import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: flex-end;
  margin-bottom: 50px;

  h1 {
    color: rgb(99, 165, 167);
    font-size: 11px;
    align-self: center;
    margin-bottom: 5px;
  }

  div {
    display: flex;
    align-items: baseline;
    justify-content: center;
    color: rgb(99, 165, 167);

    a {
      display: flex;
      align-items: center;
      color: #999;
      text-decoration: none;
      font-size: 11px;

      &:hover {
        color: rgb(11, 160, 180);
      }

      svg {
        margin-left: 5px;
      }
    }
  }
`;
