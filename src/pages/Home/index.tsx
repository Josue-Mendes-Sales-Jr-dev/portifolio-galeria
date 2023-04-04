import { Cards } from "../../components/cards"
import { Container } from "./styled"
import  Image01  from "../../assets/imgs/img1.jpg"
import  Image02  from "../../assets/imgs/img2.jpg"
import  Image03  from "../../assets/imgs/img3.jpg"
import  Image04  from "../../assets/imgs/img4.jpg"
import  Image05  from "../../assets/imgs/img5.jpg"
import  Image06  from "../../assets/imgs/img6.jpg"
import  Image07  from "../../assets/imgs/img7.jpg"
import  Image08  from "../../assets/imgs/img8.jpg"
import  Image09  from "../../assets/imgs/img9.jpg"
import  Image10  from "../../assets/imgs/img10.jpg"
export const Home=()=>{
  return(
    <Container>
        <Cards image={Image01} text="free Desinger "/>
        <Cards image={Image02} text="Dream"/>
        <Cards image={Image03} text="Draw"/>
        <Cards image={Image04} text="Tech draw"/>
        <Cards image={Image05} text="Free draw"/>
        <Cards image={Image06} text="Desiner graph"/>
        <Cards image={Image07} text="Lifestyle"/>
        <Cards image={Image08} text="World tech"/>
        <Cards image={Image09} text="Tech"/> 
    </Container>
  )
}