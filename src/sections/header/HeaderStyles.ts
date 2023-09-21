import styled from "styled-components"
import { theme } from './../../style/Theme';

const DesctopHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 1140px;
    height: 100px;

    margin-bottom: 15px;

    background-color: ${theme.colors.primaryBgr};
    color: ${theme.colors.color};
    border-radius: 10px;
`

export const S = {
    DesctopHeader,
}