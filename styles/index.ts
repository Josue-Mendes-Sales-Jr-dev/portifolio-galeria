import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,700&display=swap');

   *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style-type:none;
    
    
    
   }
   html, body, #root{
    height:100%;
    -webkit-font-smoothing: antialiased;
    color:white;
    background:#000;
    font-family: 'Roboto', sans-serif;
   }
   
`