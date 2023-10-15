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
    /* background: linear-gradient(175deg, rgba(31,19,33,1) 0%, rgba(91,122,212,1) 48%, rgba(21,32,52,1) 100%); */
    background: ${theme.colors.primaryBgr};
    color: ${theme.colors.color};
    border-radius: 10px;
`

export const S = {
    DesctopHeader,
}