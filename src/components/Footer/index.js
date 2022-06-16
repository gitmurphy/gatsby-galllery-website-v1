import React from "react";
import { 
    FaFacebook, 
    FaInstagram, 
    FaTumblr 
} from "react-icons/fa"

import { 
    FooterContainer,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from "./FooterElements";

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo>
                        <SocialIcon />
                        MOBA
                    </SocialLogo>
                    <WebsiteRights>MOBA © {new Date().getFullYear()}
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank"
                        area-label="Facebook"></SocialIconLink>
                        <FaFacebook />
                        <SocialIconLink href="/" target="_blank"
                        area-label="Instagram"></SocialIconLink>
                        <FaInstagram />
                        <SocialIconLink href="/" target="_blank"
                        area-label="Tumblr"></SocialIconLink>
                        <FaTumblr />
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
