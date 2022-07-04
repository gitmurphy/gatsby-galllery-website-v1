import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faFacebook, 
    faInstagram } from "@fortawesome/free-brands-svg-icons";

import {
    NavItem,
    NavLinks,
    NavMenu,
} from "../Navbar/NavbarElements";

import { 
    FooterContainer,
    SocialIcons,
} from "./FooterElements";

const Footer = () => {
    return (
        <>
        <FooterContainer> 
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/">Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/gallery">Gallery</NavLinks>
                    </NavItem>     
                    <NavItem>
                        <NavLinks to="/about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/contact">Contact</NavLinks>
                    </NavItem>  
                </NavMenu>

                <SocialIcons>
                    <FontAwesomeIcon icon={faInstagram} size="2x"/>
                    <FontAwesomeIcon icon={faFacebook} size="2x"/>
                </SocialIcons>

        </FooterContainer>
    </>
    )
}

export default Footer

