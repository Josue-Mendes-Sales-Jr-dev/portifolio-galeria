import styled from "styled-components";

export const Conatiner=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  height: 250px;
  gap:4rem;

  button{
    display:flex;
    justify-content:center;
    align-items:center;
    gap: .5rem;
    background:none;
    border:none;
    color:white;
    font-size:1.4rem;
    :hover{
      cursor:pointer;
    }
  }

`

