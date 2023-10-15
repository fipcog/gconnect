import styled from "styled-components"
import { theme } from "../../style/Theme"

const Music = styled.section`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    border-radius: 10px;
    overflow: hidden;

    color: ${theme.colors.altColor};
`

export const S = {
    Music,
} 