import styled from "styled-components"
import { theme } from "../../style/Theme"

const Sidebar = styled.aside`
    display: flex;
    justify-content: start;

    width: 200px;
    height: 100%;

    padding-top: 30px;
    padding-left: 30px;
    margin-right: 15px;

    background-color: ${theme.colors.primaryBgr};
    border-radius: 10px;
`

const NavList = styled.ul`
    
`

const ListItem = styled.li`
    margin-bottom: 10px;

    &:last-child {
        margin-top: 30px;
    }

    a {
        color: ${theme.colors.color};
        font-size: 1.2em;
        transition: .2s;

        &:hover {
            color: ${theme.colors.accent};
        }
    }
`

export const S = {
    Sidebar,
    ListItem,
}