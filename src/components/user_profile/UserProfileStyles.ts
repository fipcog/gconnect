import styled from "styled-components"
import { theme } from "../../style/Theme"

const UserName = styled.h1`
    margin-bottom: 5px;
`

const UserAddress = styled.address`
    display: flex;
    flex-direction: column;

    font-style: normal;
`

export const S = {
    UserName,
    UserAddress,
}