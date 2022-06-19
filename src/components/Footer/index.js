import React from "react";
import { 
    FaFacebook, 
    FaInstagram, 
} from "react-icons/fa"

import { 
    FooterContainer,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from "./FooterElements";

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>

                    <WebsiteRights>
                        Maeve O'Byrne Art © Copyright {new Date().getFullYear()}
                    </WebsiteRights>

                    <SocialIcons style={{color:"#FFFFFF"}}>
                        <SocialIconLink href="/https://www.facebook.com" target="_blank"
                        area-label="Facebook"></SocialIconLink>
                        <FaFacebook />
                        <SocialIconLink href="/" target="_blank"
                        area-label="Instagram"></SocialIconLink>
                        <FaInstagram />
                    </SocialIcons>
                    
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
