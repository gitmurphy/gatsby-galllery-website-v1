// navbar is styled by styled-components plugin
import styled from "styled-components"
import {Link} from "gatsby"

export const Nav = styled.nav`
    background-color: #fff;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;
    opacity: 0;
    transition: opacity 0.3s ease;

    &.fade-in {
        opacity: 1;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    padding-right: 5%;
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

