import { createGlobalStyle } from "styled-components";
import { boxShadow } from "./variables";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
    font-weight: normal;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    background-color: #f7f7f7;
  }
  
  h1 {
    letter-spacing: 1px;
    margin: 0;
  }
  
  h3 {
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
    margin: 40px 0 10px;
  }
  
  h4 {
    margin: 0;
    text-transform: uppercase;
  }
  
  label {
    display: inline-block;
    margin: 10px 0;
  }
  
  input[type=text], 
  input[type=number] {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    font-weight: normal;
    font-style: normal;
    border: 1px solid #dedede;
    border-radius: 2px;
    transition: all .15s ease-in-out;
    
    &:focus {
      outline: 0;
      box-shadow: ${boxShadow};
    }
  }
`;
