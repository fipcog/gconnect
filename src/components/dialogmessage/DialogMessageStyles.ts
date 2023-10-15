import styled from "styled-components"
import { theme } from "../../style/Theme"

const DialogMessage = styled.article`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
`

const UserName = styled.div`
    display: block;
    width: 100%;
    font-size: .7em;

    & > a {
        text-decoration: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${theme.colors.altColor};
    }
`

const UserMessage = styled.p`
    position: relative;
    display: inline-block;

    max-width: 65%;
    padding: 20px;

    background-color: ${theme.colors.accent};
    border-radius: 15px;

    &::before {
        content: '';
        position: absolute;
        top: 15px;
        left: -30px;

        width: 0;
        height: 0;
        border-top: 30px solid ${theme.colors.accent};
        border-left: 30px solid transparent;
    }
`

export const S = {
    DialogMessage,
    UserName,
    UserMessage,
} 