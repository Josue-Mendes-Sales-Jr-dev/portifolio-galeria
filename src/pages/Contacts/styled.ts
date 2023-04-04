import styled from "styled-components";

export const Container=styled.div`
  width: 100vw;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  flex-direction:column;
  padding: 30px 0;
  gap:3.5rem;
  h1{
    font-size:2.5rem;
  }
  
`
export const Form=styled.form`
   display:flex;
  align-items:center;
  justify-content:flex-start;
  flex-direction:column;
  width: 100vw;
  label{
  display:flex;
  align-items:flex-start;
  justify-content:center;
  flex-direction:column;
  font-size:1.5rem;
  gap: 1rem;
  margin-bottom:1.5rem;
  input{
    width:30rem;
    height: 3rem;
    background-color:transparent;
    border:.5px solid white;
    outline:none;
    border-radius:5px;
    padding: 0 20px;
    color: white;
  }
  .message{
    padding-top:1.5rem;
    padding-bottom:5rem;
  }
  }
  .boxBtn{
    width:30rem;

  }
  .submit{
    display:flex;
     align-items:center;
     height: 3rem;
     width:10rem;
    justify-content:center;
    flex-direction:column;
     font-size:1.5rem;
     margin-top:1rem;
     border-radius:5px;
     border:none;
     :hover{
       background-color:gray;
       cursor:pointer;
       color:white;
     }
  }
  
`