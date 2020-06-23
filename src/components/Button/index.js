import React from 'react';

import { Container } from './styles';

function Button({ children, width, color, onClick, type }) {
  const word = children;
  return (
    <Container type={type} onClick={onClick} width={width} color={color}>
      {word}
    </Container>
  );
}

export default Button;
