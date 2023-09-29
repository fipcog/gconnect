import styled from "styled-components"
import { theme } from "../../style/Theme"

const Sidebar = styled.aside`
    display: flex;
    justify-content: start;

    width: 200px;
    height: 600px;

    padding-top: 30px;
    padding-left: 30px;
    margin-right: 15px;

    background: ${theme.colors.primaryBgr};
    background: linear-gradient(144deg, rgba(224,26,79,1) 0%, rgba(241,89,70,1) 40%, rgba(249,194,46,1) 100%);
    border-radius: 10px;
`

const NavList = styled.ul`
    
`

const ListItem = styled.li`
    margin-bottom: 5px;
    transition: .2s;
    
    &:last-child {
        margin-top: 30px;
    }

    a {
        display: inline-block;
        position: relative;
        overflow-x: hidden;

        padding-bottom: 3px;

        color: ${theme.colors.color};
        font-size: 1.2em;
        letter-spacing: 1px;
        transition: .2s;

        &::before {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            position: absolute;
            bottom: 0;
            right: 100%;

            background-color: ${theme.colors.color};
	        transition: .2s;
	    }

        &:hover {
            &::before {
                right: 0;
            }
        }
    }
`

export const S = {
    Sidebar,
    ListItem,
}