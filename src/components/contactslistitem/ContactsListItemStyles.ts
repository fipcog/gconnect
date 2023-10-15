import styled from "styled-components"
import { theme } from "../../style/Theme"

const ContactsListItem = styled.li`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: 10px;

    width: 100%;
    max-height: 40px;

    font-size: 1.1em;

    & > a {
        text-decoration: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${theme.colors.altColor};
    }
`

export const S = {
    ContactsListItem,
} 