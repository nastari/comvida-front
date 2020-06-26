import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <h1> colaboradores </h1>
      <div>
        <a href="https://www.linkedin.com/in/gabriel-nastari/">
          Gabriel Nastari <FaLinkedinIn color="rgb(99, 165, 167)" />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/julianoalves7/">
          Juliano Alves
          <FaLinkedinIn color="rgb(99, 165, 167)" />
        </a>
      </div>
      <div>
        <a href="https://stories.freepik.com/">Stories Illustrations</a>
      </div>
    </Container>
  );
}

export default Footer;
