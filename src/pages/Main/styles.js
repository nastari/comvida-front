import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 29px;
  color: #7159c1;
  font-family: Arial, Helvetica, sans-serif;

  small {
    color: ${(props) => (props.error ? '#948271' : '#7159c1')};
    font-style: italic;
  }
`;
