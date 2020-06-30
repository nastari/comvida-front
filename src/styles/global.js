import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #app {
  min-height: 100vh;
}

body {
  -webkit-font-smoothing: antialiased !important;

}

body, input, button {
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}

button {
  cursor: pointer;
}


.Toastify__toast {
  border-radius: 5px;
}

.Toastify__toast--error {
  background: #ECA9A9;
}
.Toastify__toast--warning {
  background: blue;
}

`;
