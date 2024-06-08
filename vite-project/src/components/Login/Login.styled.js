import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

export const GlobalStyleSignin = createGlobalStyle`
* {
    margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
  color: #000000;
}
div,
button,
a {
font-family: "Roboto", sans-serif;  
}
`;
export const Wrapper = styled.div`
max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
`;