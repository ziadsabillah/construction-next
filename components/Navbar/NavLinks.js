import styled from "styled-components"
import { useRouter } from 'next/router'
import React from "react";


const NavLinkContainer = styled.div`
    height: 100%;
    display: flex; 
    align-items: center;
`;

const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    list-style: none;
`;

const LinkItem = styled.li`
    height: 100%;
    padding: 0 1.1em;
    color: #cecdcd;
    font-weight: 500;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-top: 2px solid transparent;
    transition: all 220ms ease-in-out; 

    &:hover {
        border-top: 2px solid #f1c40f;
        color: #f1c40f;
    }

    &.active {
        border-top: 2px solid #f1c40f;
        color: #f1c40f;
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`;

const DetectActive = ({href, pageName}) => {
    const router = useRouter();
    let className = '';

    if(router.pathname === href) {
        className = `active`
    }

    return  <LinkItem className={className}><Link href={href}>{pageName}</Link></LinkItem>

}

const NavLinks = () => {
    const router = useRouter();


    return (
        <NavLinkContainer>
            <LinksWrapper>
                <DetectActive href="/" pageName="Accueil" />
                
                <DetectActive href="/about" pageName="A propos" />

                <DetectActive href="/projects" pageName="Projets" />

                <DetectActive href="/services" pageName="Services" />

                <DetectActive href="/clients" pageName="Clients" />

                <DetectActive href="/contact" pageName="Contact" />

            </LinksWrapper>
        </NavLinkContainer>
    )
}

export default NavLinks;