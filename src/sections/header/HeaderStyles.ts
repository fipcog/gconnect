import styled from "styled-components"
import { theme } from './../../style/Theme';

const DesctopHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 1140px;
    height: 100px;

    margin-bottom: 15px;

    background: ${theme.colors.primaryBgr};
    background: linear-gradient(175deg, rgba(224,26,79,1) 0%, rgba(241,89,70,1) 48%, rgba(249,194,46,1) 100%);
    color: ${theme.colors.color};
    border-radius: 10px;
`

export const S = {
    DesctopHeader,
}