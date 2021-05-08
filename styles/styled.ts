import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
   *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;

    }

html, body{
  height:100%;
  width:100%;
    #__next {
height: 100%;
}
  font-family:'Muli';
          background:#FCFCFC;
//...
}
`;

export default GlobalStyle;
