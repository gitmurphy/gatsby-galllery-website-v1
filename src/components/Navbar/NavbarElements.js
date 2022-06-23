import {DiScala} from "react-icons/Di"
import styled from "styled-components"
import {Link} from "gatsby"

export const Nav = styled.nav`

    // removed styling for nav that changes from transparent to white because i couldnt figure out
    // how to change the font-color at the same time - maybe i should just add some white shading to 
    // the top of the image ?

    background-color: #fff;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1000px;
`
export const NavLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 5%;

    &:hover { 
        color: #DDDDDE;
        transition: all 0.3s ease;
    }
    
`
export const NavIcon = styled(DiScala)`
    margin: 0 0.5rem 0 2rem; 
`
export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
}
`
export const NavMenu = styled.ul`
	display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    

    @media screen and (max-width: 960px) {
		display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: ${({ click }) => (click ? "100%" : "-1000px") };
            opacity: 1;
            transition: all 0.2s ease;
            background: #fff;
}
`
export const NavItem = styled.li`
    height: 80px;
    a:hover { 
        color: #DDDDDE;
        transition: all 0.3s ease;
    } 

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export const NavLinks = styled(Link)`
    color: #000000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-size: 1.3 rem;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
        
        &:hover {
            color: #ff4040;
            transition: all 0.3s ease;
        }
    }
`

