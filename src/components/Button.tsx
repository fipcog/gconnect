import styled from "styled-components";
import { theme } from "../style/Theme";

export const Button = styled.button`
    width: 120px;
    height: 40px;

    color: ${theme.colors.color};
    font-size: 1em;

    border: none;
    border-radius: 10px;
    background: linear-gradient(175deg, rgba(224,26,79,1) 0%, rgba(241,89,70,1) 48%, rgba(249,194,46,1) 100%);

    cursor: pointer;
    transition: .2s;

    &:active {
        transform: translateY(1px);
    }
`