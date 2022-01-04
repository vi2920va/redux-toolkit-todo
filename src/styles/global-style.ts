import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
  ${reset}

  button{
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  
  }

  input{
    padding:0;
    outline: 0;
    border:0;
    appearance: none;
    :focus{
      outline: 0;
    }
  }

  a{
    color: #000;
    text-decoration: none;
  }

  body {
  line-height: 1.5;
  font-family: system-ui;
  color: #000;
  background: #f7f1f1;
}

  *{
    box-sizing: border-box;
  }
`;

export default GlobalStyles;