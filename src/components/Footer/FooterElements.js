import styled from "styled-components"
import {Link} from "gatsby"

export const FooterContainer = styled.div`
background-color: #DDDDDE;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 200px;
`

export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 20px auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`
export const SocialLogo = styled(Link)`
    color:#000000;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 4rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    height: 30px;
`

export const WebsiteRights = styled.small`
    color:#DDDDDE;
    /* margin-bottom: 16px; */
    font-size: 20px;
    width: 100%;
`
export const RightsContainer = styled.div`
    background-color: #707070;
    text-align: center;
    height: 40px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
`