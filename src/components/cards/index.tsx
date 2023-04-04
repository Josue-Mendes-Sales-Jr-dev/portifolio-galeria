import { Conatiner,Image,Text } from "./styled";
import { Link } from "react-router-dom";

interface ICards{
    image:string;
    text:string;
}
export const Cards:React.FC<ICards>=({image, text})=>{
    return(
        <Conatiner>
            <Image src={image} alt="imag"/>
            <Text>
               <h2>{text}</h2>
            </Text>   
        </Conatiner>
    )
}