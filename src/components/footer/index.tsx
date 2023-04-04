import { useEffect } from "react";
import { Conatiner} from "./styled";
import {AiOutlineArrowUp } from "react-icons/ai"

export const Footer=()=>{
   const handleClick=()=>{
        if(scrollY>10){
            scrollTo(0,0);
        }
    
    }
    return(
        <Conatiner>
            <button onClick={handleClick} type="button"><AiOutlineArrowUp/>Back Top</button>
             <h4>Portifolio Galeria <span> &copy; </span> 2023</h4>
        </Conatiner>
    )
}