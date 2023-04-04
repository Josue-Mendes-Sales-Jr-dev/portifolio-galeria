import { Conatiner,Menu,Icons } from "./styled";
import { Link } from "react-router-dom";
import {BsInstagram, BsTwitter, } from "react-icons/bs"
import {MdAddToPhotos } from "react-icons/md"

export const Navbar=()=>{
    return(
        <Conatiner>
            <span>Logo</span>
            <Menu>
                <Link to="/">Portifolio</Link>
                <Link to="/About">About</Link>
                <Link to="/Contacts">Contacts</Link>
            </Menu>
            <Icons>
                <Link to="/"><BsInstagram/></Link>
                <Link to="/About"><BsTwitter/></Link>
                <Link to="/Contacts"><MdAddToPhotos/></Link>
            </Icons>
        </Conatiner>
    )
}