import styled from 'styled-components';

export const Container = styled.button.attrs((props) => ({
  type: props.type,
}))`
  border: 0;
  background: ${(props) => (props.color ? props.color : 'rgb(45, 45, 45)')};
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  padding: 10px;
  font-weight: bold;
  border-radius: 5px;
  display: block;
  width: 300px;
  max-width: 500px;
  max-height: 50px;
  width: ${(props) => (props.width ? props.width : 200)};
  transition: background 0.2s;

  :hover {
    background: black;
  }
`;
