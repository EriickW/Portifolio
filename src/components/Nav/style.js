import styled from "styled-components";

export const NavStyle = styled.nav`
    position: fixed;
    width: 100%;
    height: 5rem;
`
export const SecNav = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height:100%;
`
export const Ul = styled.ul`
    display: flex;
    gap:2rem;
    height: 100%;
    align-items: center;
    justify-content: center;
    list-style: none;
`
export const A = styled.a`
    color: var(--font-color-white);
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration:none;
    color:var(--text-white);
`

